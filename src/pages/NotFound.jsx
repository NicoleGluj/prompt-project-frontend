import { Layout } from "../layout/Layout";

export const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h1 className="text-5xl md:text-5xl font-medium text-white uppercase">
          404 - Página no encontrada
        </h1>
        <p className="mt-4 text-white/70 text-lg">
          La página que buscás no existe o fue movida.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-8 px-6 py-2 rounded-2xl bg-[#eb831be7] text-white uppercase font-medium border-2 border-white/70 hover:bg-[#ff9933] transition-all duration-300"
        >
          Volver al inicio
        </button>
      </div>
    </Layout>
  )
}