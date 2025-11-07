# 🎙️ VoiceTasks Frontend — Gestor de tareas con reconocimiento de voz

**VoiceTasks** es una aplicación web desarrollada con **React + Vite** que permite **crear, completar y eliminar tareas mediante voz o texto**.  
El proyecto se integra con un backend en Node.js/Express para la autenticación y almacenamiento en MongoDB Atlas.

---

## 🚀 Características principales

- 🎤 **Agregar tareas por voz** usando la API `webkitSpeechRecognition`.
- 🧩 **Gestión completa de tareas**: crear, listar, completar, eliminar.
- 🔐 **Autenticación de usuario con JWT**.
- 📦 **Persistencia a través del backend conectado a MongoDB Atlas**.
- 🎨 **Diseño moderno y responsive con TailwindCSS**.
- ⚡ **Rutas protegidas** con `PrivateRoute` y `PublicRoute`.
- ☁️ **Deploy en Vercel** conectado al backend alojado en Render.

---

## 🏗️ Estructura del proyecto

```
/frontend
│
├── /src
│   ├── /components        # Componentes reutilizables (Header, Footer, TaskInput, TaskList, etc.)
│   ├── /context           # Contexto global de autenticación (AuthContext)
│   ├── /hooks             # Hook personalizado useTasks para lógica de tareas
│   ├── /layout            # Layout principal con Header y Footer
│   ├── /pages             # Vistas principales (Home, Login, Register, MisTareas, NotFound)
│   ├── /services          # Conexiones al backend (apiAuth.js, apiTasks.js)
│   ├── /utils             # Funciones auxiliares (formatDate)
│   ├── App.jsx            # Definición de rutas y estructura general
│   └── main.jsx           # Punto de entrada
│
├── .env                   # Variables de entorno con URLs del backend
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🧰 Tecnologías utilizadas

- ⚛️ **React 18 + Vite**
- 🧠 **React Context API**
- 🎨 **TailwindCSS**
- 🔄 **React Router DOM**
- 🪶 **Heroicons**
- 💬 **Framer Motion**
- 🗣️ **webkitSpeechRecognition API**

---

## 🖥️ Instalación y ejecución local

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/NicoleGluj/prompt-project-frontend.git
cd voicetasks-frontend
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Iniciar el servidor de desarrollo
```bash
npm run dev
```

---

## 🔒 Autenticación

- Los usuarios deben registrarse o iniciar sesión antes de acceder a las tareas.
- Al iniciar sesión, se guarda el **token JWT** en `localStorage`.
- Las peticiones protegidas incluyen el encabezado:

```js
Authorization: Bearer <token>
```

El estado global de sesión se maneja desde `AuthContext`.

---

## 🧠 Hooks personalizados

### `useAuth()`
Controla el estado global de autenticación:
```js
const { user, token, login, logout, loading } = useAuth()
```

### `useTasks()`
Controla la lógica de tareas y comunicación con el backend:
```js
const { tasks, addTask, removeTask, toggleTask } = useTasks()
```

---

## 🧩 Componentes principales

| Componente | Función |
|-------------|----------|
| **Header** | Barra superior con navegación y login/logout |
| **Footer** | Pie de página con año dinámico |
| **TaskInput** | Permite escribir o dictar tareas con el micrófono |
| **TaskList** | Lista y organiza las tareas |
| **TaskItem** | Representa cada tarea individual |
| **PrivateRoute / PublicRoute** | Controlan el acceso según autenticación |
| **Layout** | Define la estructura visual con Header y Footer |

---

## 🗂️ Páginas

| Página | Ruta | Descripción |
|--------|------|-------------|
| `/` | **Home** | Pantalla principal |
| `/login` | **Login** | Formulario de ingreso |
| `/register` | **Register** | Registro y login automático |
| `/mistareas` | **MisTareas** | Panel de usuario con tareas |
| `*` | **NotFound** | Página 404 |

---

## 🧮 Flujo general de uso

1. El usuario se registra o inicia sesión.
2. Se redirige automáticamente a `/mistareas`.
3. Puede agregar tareas por voz o texto.
4. Puede marcarlas como completadas o eliminarlas.
5. Al cerrar sesión, se limpia el token y vuelve a `/login`.

---

## 🪄 Diseño y UX

- **Estilo:** Fondo con degradado azul/naranja.  
- **Tipografía:** `Alexandria` y `Montserrat` , modernas y legibles.    
- **Botones animados y transiciones suaves.**  
- **Diseño responsive** adaptable a móvil, tablet y escritorio.  

---

## 🧱 Seguridad

- Tokens JWT almacenados en `localStorage`.
- Verificación en `PrivateRoute` y `PublicRoute`.
- Redirección automática según sesión activa.
- Comunicación HTTPS con backend en Render.

---

## 👩‍💻 Autor

**Nicole  Gluj**  
Desarrolladora web orientada al frontend con una fuerte mirada en la experiencia del usuario.
Me interesa crear interfaces intuitivas, visualmente atractivas y funcionales, cuidando cada detalle del diseño y la interacción.

Contacto: [LinkedIn](https://www.linkedin.com/in/nicole-gluj-640805210/) 

---
