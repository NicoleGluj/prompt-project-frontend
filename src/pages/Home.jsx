import { Link } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { useAuth } from "../context/AuthContext";

export const Home = () => {
  const { user } = useAuth()

  return (
    <Layout>
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
