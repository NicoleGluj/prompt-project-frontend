import { Link } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { useAuth } from "../context/AuthContext";
import { Helmet } from "react-helmet";

export const Home = () => {
  const { user } = useAuth()

  return (
    <Layout>
      <Helmet>
        <title>TaskVoice | Organizá tus tareas con la voz</title>
        <meta
          name="description"
          content="TaskVoice te ayuda a crear, recordar y administrar tus tareas mediante comandos de voz. Organizá tu día de forma simple y moderna."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="TaskVoice | Organiza tus tareas con la voz" />
        <meta
          property="og:description"
          content="Descubrí una nueva forma de recordar tus pendientes. Creá, marcá y administrá tareas con tu voz desde cualquier dispositivo."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://voicetasks.vercel.app/" />
        <meta property="og:image" content="https://voicetasks.vercel.app/preview-home.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TaskVoice | Organiza tus tareas con la voz" />
        <meta
          name="twitter:description"
          content="Creá y administrá tus tareas con la voz y mantené tu día organizado fácilmente."
        />
        <meta name="twitter:image" content="https://voicetasks.vercel.app/preview-home.png" />
      </Helmet>

      <section className="flex flex-col items-start justify-end min-h-[75vh] xl:p-6 p-4">
        <h1 className="w-full sm:w-3/4 lg:w-1/2 text-5xl sm:text-7xl 2xl:text-8xl font-[Alexandria] font-extralight text-white">
          Conoce una nueva forma de recordar tus tareas
        </h1>
        <Link
          to={user ? "/mistareas" : "/login"}
          className="group relative inline-flex items-center justify-center border-2 border-white text-white px-8 py-2 rounded-2xl mt-8 font-medium uppercase text-lg sm:text-base overflow-hidden"
        >
          <span className="z-10">Comenzar</span>
          <div className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:duration-1500 group-hover:transform-[skew(-12deg)_translateX(100%)] transition-transform ease-in-out">
            <div className="relative h-full w-8 bg-white/20"></div>
          </div>
        </Link>
      </section>
    </Layout>
  );
};
