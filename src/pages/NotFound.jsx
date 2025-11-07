import { useNavigate } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Helmet } from "react-helmet";

export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <Helmet>
        <title>Error 404 | Página no encontrada</title>
        <meta
          name="description"
          content="La página que buscás no existe o fue movida. Volvé al inicio para continuar navegando en TaskVoice."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Error 404 | Página no encontrada" />
        <meta
          property="og:description"
          content="La página que buscás no existe o fue movida. Volvé al inicio para continuar navegando en TaskVoice."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://voicetasks.vercel.app/404" />
        <meta property="og:image" content="https://voicetasks.vercel.app/preview-404.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Error 404 | Página no encontrada" />
        <meta
          name="twitter:description"
          content="La página que buscás no existe o fue movida. Volvé al inicio para continuar navegando en TaskVoice."
        />
        <meta name="twitter:image" content="https://voicetasks.vercel.app/preview-404.png" />
      </Helmet>
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