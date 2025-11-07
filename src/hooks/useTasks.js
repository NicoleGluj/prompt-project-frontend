import { useState, useEffect } from "react"
import {
  fetchTasksApi,
  addTaskApi,
  removeTaskApi,
  toggleTaskApi,
} from "../services/apiTasks.js"

export const useTasks = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setLoading(true)
        const data = await fetchTasksApi()
        setTasks(data)
      } catch (err) {
        console.error("Error al cargar tareas:", err)
        setError("No se pudieron cargar las tareas")
      } finally {
        setLoading(false)
      }
    }
    loadTasks()
  }, [])

  const addTask = async (text) => {
    if (!text.trim()) return
    const tempId = Date.now().toString()
    const tempTask = { _id: tempId, text, completed: false }

    setTasks(prev => [...prev, tempTask]) // muestra inmediatamente
    try {
      const newTask = await addTaskApi(text)
      setTasks(prev => prev.map(t => t._id === tempId ? newTask : t))
    } catch (error) {
      console.error("Error en addTask:", error)
      setTasks(prev => prev.filter(t => t._id !== tempId)) // revertir si falla
    }
  }

  const removeTask = async (id) => {
    try {
      await removeTaskApi(id)
      setTasks(prevTasks => prevTasks.filter(task => task._id !== id))
    } catch (error) {
      console.error("Error en removeTask:", error)
    }
  }

  const toggleTask = async (id) => {
    try {
      // Buscar usando _id
      const task = tasks.find(t => t._id === id)
      if (!task) return

      const updatedTask = await toggleTaskApi(id, !task.completed)

      setTasks(prevTasks => prevTasks.map(t => t._id === id ? updatedTask : t))
    } catch (error) {
      console.error("Error en toggleTask:", error)
    }
  }

  return { tasks, addTask, removeTask, toggleTask, loading, error }
}