import PanelLayout from "../../layouts/PanelLayout.jsx"
import Input from "../../components/Input.jsx"

export default function Caja() {
    return (
        <PanelLayout>
            <div className="flex flex-col items-center justify-start p-6 w-full gap-8">
                <div className="w-full relative flex items-center  py-2">
                    <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-extrabold tracking-wide">
                        Módulo de Caja
                    </h1>

                    <div className="ml-auto">
                        <button className="btn btn-primary rounded-xl shadow-md hover:scale-105 transition">
                            <i className="fa-solid fa-cash-register mr-2"></i>
                            Abrir Caja
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-xl transition rounded-2xl">
                        <div className="card-body">
                            <h2 className="card-title text-lg font-semibold">
                                <i className="fa-solid fa-money-bill-wave mr-2 text-green-600"></i>
                                Efectivo Actual
                            </h2>
                            <p className="text-4xl font-extrabold mt-2">
                                Q 5,432.00
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-xl transition rounded-2xl">
                        <div className="card-body">
                            <h2 className="card-title text-lg font-semibold">
                                <i className="fa-solid fa-hand-holding-dollar mr-2 text-blue-600"></i>
                                Ingresos Hoy
                            </h2>
                            <p className="text-4xl font-extrabold mt-2">
                                Q 1,200.00
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-xl transition rounded-2xl">
                        <div className="card-body">
                            <h2 className="card-title text-lg font-semibold">
                                <i className="fa-solid fa-arrow-right-from-bracket mr-2 text-red-600"></i>
                                Egresos Hoy
                            </h2>
                            <p className="text-4xl font-extrabold mt-2">
                                Q 300.00
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 w-full">
                    <button className="btn btn-success rounded-xl shadow hover:scale-105 transition">
                        <i className="fa-solid fa-plus mr-2"></i>Ingreso
                    </button>
                    <button className="btn btn-error rounded-xl shadow hover:scale-105 transition">
                        <i className="fa-solid fa-minus mr-2"></i>Retiro
                    </button>
                    <button className="btn btn-warning rounded-xl shadow hover:scale-105 transition">
                        <i className="fa-solid fa-lock mr-2"></i>Cerrar Caja
                    </button>
                </div>

                {/* BUSCADOR */}
                <div className="w-full">
                    <label className="input input-bordered flex items-center gap-3 rounded-xl shadow-sm focus-within:shadow-md transition">
                        <i className="fa-solid fa-magnifying-glass text-base-content/60"></i>
                        <input
                            type="text"
                            className="grow"
                            placeholder="Buscar ticket, cliente o código..."
                        />
                    </label>
                </div>

                {/* TABLA DE OPERACIONES */}
                <div className="w-full overflow-x-auto">
                    <table className="table table-zebra rounded-xl overflow-hidden">
                        <thead className="bg-base-200 sticky top-0 z-10">
                            <tr>
                                <th className="font-bold">Hora</th>
                                <th className="font-bold">Operación</th>
                                <th className="font-bold">Monto</th>
                                <th className="font-bold">Usuario</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="hover">
                                <td>09:10 AM</td>
                                <td>Ingreso por renovación</td>
                                <td className="text-green-600 font-semibold">
                                    + Q 250.00
                                </td>
                                <td>Erwin</td>
                            </tr>

                            <tr className="hover">
                                <td>10:22 AM</td>
                                <td>Retiro de caja</td>
                                <td className="text-red-600 font-semibold">
                                    - Q 100.00
                                </td>
                                <td>Ana</td>
                            </tr>

                            <tr className="hover">
                                <td>11:05 AM</td>
                                <td>Pago de interés</td>
                                <td className="text-green-600 font-semibold">
                                    + Q 50.00
                                </td>
                                <td>Erwin</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </PanelLayout>
    )
}
