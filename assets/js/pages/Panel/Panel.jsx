import React from "react"
import PanelLayout from "../../layouts/PanelLayout.jsx"

export default function Panel({ users }) {
    const user = users[0] || {}

    return (
        <PanelLayout>
            {/* CARD PRINCIPAL */}
            <div className="w-full flex flex-col items-center justify-center mt-6">
                <div className="w-full max-w-3xl bg-base-100 shadow-xl rounded-2xl p-6 border border-base-300 flex items-center gap-6">
                    {/* AVATAR */}
                    <div className="avatar placeholder">
                        <div className="bg-emerald-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-lg">
                            {user?.tenant?.charAt(0) || "?"}
                        </div>
                    </div>

                    {/* INFORMACIÓN */}
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-bold text-emerald-600">
                            {user?.tenant || "Empresa"}
                        </h1>

                        <p className="text-lg text-base-content/70">
                            Bienvenido,
                            <span className="font-semibold ml-1">
                                {user?.username || "Usuario"}
                            </span>
                        </p>

                        <div className="badge badge-success badge-outline mt-1">
                            Usuario Conectado
                        </div>
                    </div>
                </div>
            </div>
        </PanelLayout>
    )
}
