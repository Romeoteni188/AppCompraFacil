<?php

namespace App\Controller\Web;

use Rompetomp\InertiaBundle\Architecture\InertiaInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/caja', name: 'app_caja_')]
final class CajaController extends AbstractController
{
    public function __construct(private InertiaInterface $inertia)
    {
    }

    #[Route('', name: 'index', methods: ['GET'])]
    public function index(): Response
    {
        return $this->inertia->render('Caja/Caja', [
            'placeholder' => true,
        ]);
    }

    #[Route('/nueva', name: 'store', methods: ['POST'])]
    public function store(): Response
    {
        return $this->inertia->location('/caja');
    }
}
