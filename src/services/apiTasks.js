const BASE_URL = import.meta.env.VITE_API_TASKS;

export const getAuthHeaders = () => {
  const token = localStorage.getItem("authToken")
  if (!token) throw new Error("No hay token de autenticación")
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }
}

export const fetchTasksApi = async () => {
  const res = await fetch(BASE_URL, {
    headers: getAuthHeaders(),
  })
  if (!res.ok) throw new Error("Error al obtener las tareas")
  return await res.json()
}

export const addTaskApi = async (text) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ text }),
  })
  if (!res.ok) throw new Error("Error al crear la tarea")
  return await res.json()
}

export const removeTaskApi = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  })
  if (!res.ok) throw new Error("Error al eliminar la tarea")
  return true
}

export const toggleTaskApi = async (id, completed) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify({ completed }),
  })
  if (!res.ok) throw new Error("Error al actualizar la tarea")
  return await res.json()
}