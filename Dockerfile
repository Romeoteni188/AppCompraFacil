ARG ALPINE_VERSION=3.21

FROM composer:lts AS vendor

WORKDIR /app
COPY . .

ENV COMPOSER_ALLOW_SUPERUSER=1
ENV SYMFONY_SKIP_AUTO_SCRIPTS=1
ENV APP_ENV=prod
ENV APP_DEBUG=0

RUN touch .env \
    && composer install --no-dev --no-interaction --prefer-dist

FROM node:lts-alpine AS node
WORKDIR /app
ENV COREPACK_INTEGRITY_KEYS=0

COPY package.json pnpm-lock.yaml vite.config.js ./
COPY assets ./assets

RUN corepack enable pnpm \
    && pnpm install \
    && pnpm build

FROM alpine:${ALPINE_VERSION}
WORKDIR /var/www/html

RUN apk add --no-cache \
    bash curl git icu-data-full \
    php84 php84-cli php84-phar php84-opcache \
    php84-mbstring php84-intl php84-xml php84-simplexml \
    php84-pdo php84-pdo_mysql php84-tokenizer php84-ctype \
    php84-zip php84-fileinfo php84-curl php84-session php84-bcmath \
    && ln -s /usr/bin/php84 /usr/bin/php

COPY . .
COPY --from=vendor /app/vendor ./vendor
COPY --from=node /app/public/build ./public/build

RUN chown -R nobody:nobody /var/www/html
USER nobody

EXPOSE 8000
CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]
