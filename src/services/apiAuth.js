const BASE_URL = import.meta.env.VITE_API_AUTH

const handleResponse = async (res, defaultMessage) => {
  if (!res.ok) {
    const errorText = await res.text()
    throw new Error(errorText || defaultMessage)
  }

  const contentType = res.headers.get("content-type")
  if (contentType && contentType.includes("application/json")) {
    return await res.json()
  }
  return await res.text()
}

export const registerApi = async (name, email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
    return await handleResponse(res, "Error en el registro")
  } catch (err) {
    console.error("Error en registerApi:", err)
    throw new Error("No se pudo registrar el usuario. Verificá tu conexión o los datos.")
  }
}

export const loginApi = async (email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    const data = await handleResponse(res, "Credenciales inválidas")

    // Guarda el token localmente
    localStorage.setItem("authToken", data.token)
    localStorage.setItem("userEmail", data.email)
    localStorage.setItem("userName", data.name)

    return data
  } catch (err) {
    console.error("Error en loginApi:", err)
    throw new Error("No se pudo iniciar sesión. Revisá tu conexión o tus credenciales.")
  }
}
