import { useTasks } from "../hooks/useTasks"
import { TaskList } from "../components/TaskList"
import { TaskInput } from "../components/TaskInput"
import { Layout } from "../layout/Layout"
import { Helmet } from "react-helmet";
import { useAuth } from "../context/AuthContext"


export const MisTareas = () => {
  const { tasks, addTask, removeTask, toggleTask } = useTasks()
  const { user, logout } = useAuth()
  const hora = new Date().getHours()

  const saludo = hora < 12 ? "¡Buen día" : hora < 19 ? "¡Buenas tardes" : "¡Buenas noches"


  return (
    <Layout>
      <Helmet>
        <title>Mis tareas | TaskVoice</title>
        <meta
          name="description"
          content="Accedé a todas tus tareas en TaskVoice. Marcá tus pendientes como completados, agregá nuevas tareas y organizá tu día con ayuda de la voz."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Mis tareas | TaskVoice" />
        <meta
          property="og:description"
          content="Gestioná tus pendientes fácilmente con TaskVoice. Completá, eliminá o agregá tareas con un solo clic o usando tu voz."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://voicetasks.vercel.app/mistareas" />
        <meta property="og:image" content="https://voicetasks.vercel.app/preview-tasks.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mis tareas | TaskVoice" />
        <meta
          name="twitter:description"
          content="Accedé a tus pendientes y organizá tu día con TaskVoice, la app que te ayuda a recordar tus tareas mediante comandos de voz."
        />
        <meta name="twitter:image" content="https://voicetasks.vercel.app/preview-tasks.png" />
      </Helmet>
      <div className="m-1 sm:m-4 xs:m-2">
        <h1 className="text-5xl sm:text-5xl xs:text-3xl font-medium text-white uppercase text-center mt-8">
          {saludo} {user?.name || "de nuevo"}!
        </h1>
        <h2 className="text-center text-3xl sm:text-3xl xs:text-xl text-white mt-3 font-light mb-10">
          ¿Querés agregar un nuevo pendiente?
        </h2>
        <TaskInput onAdd={addTask} />
      </div>
      <TaskList tasks={tasks} onDelete={removeTask} onToggle={toggleTask} />
    </Layout>
  )
}