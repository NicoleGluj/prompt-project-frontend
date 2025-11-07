import { ArrowLongRightIcon, MicrophoneIcon } from "@heroicons/react/16/solid"
import { useRef, useState } from "react"

export const TaskInput = ({ onAdd }) => {
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [error, setError] = useState("")
  const recognitionRef = useRef(null)

  const initRecognition = () => {
    if (!("webkitSpeechRecognition" in window)) {
      setError("Tu navegador no soporta reconocimiento de voz.")
      return null
    }

    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = "es-ES"
    recognition.continuous = true
    recognition.interimResults = false

    recognition.onresult = (event) => {
      const result = event.results[event.results.length - 1][0].transcript.trim()
      const capitalized = result.charAt(0).toUpperCase() + result.slice(1)
      setTranscript(prev => {
        const combined = prev ? prev + " " + capitalized : capitalized
        return combined.replace(/\s+/g, " ").trim()
      })
    }

    recognition.onend = () => setListening(false)
    return recognition
  }

  const handleToggle = () => {
    if (listening) {
      recognitionRef.current?.stop()
    } else {
      setTranscript("")
      recognitionRef.current = initRecognition()
      recognitionRef.current?.start()
      setListening(true)
    }
  }

  const handleConfirm = () => {
    if (!transcript.trim()) return
    recognitionRef.current?.stop()
    onAdd(transcript.trim())
    setTranscript("")
    setListening(false)
  }

  return (
    <section className="mt-4 flex justify-center px-2">
      <div className="flex w-full max-w-2xl bg-white/90 rounded-2xl p-2 items-center shadow-md">
        <button
          onClick={handleToggle}
          aria-label={listening ? "Detener grabación" : "Comenzar grabación por voz"}
          title={listening ? "Detener grabación" : "Comenzar grabación por voz"}
          className={`flex items-center px-3 py-2 rounded-2xl font-semibold gap-2 text-sm 
            ${listening ? "text-red-500 animate-pulse" : "text-[#FAA24B] hover:text-[#e97b0e]"}`}
        >
          <MicrophoneIcon className="w-6 h-6" />
          {listening ? "Grabando..." : ""}
        </button>

        <textarea
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              handleConfirm()
            }
          }}
          rows="1"
          className="flex-1 p-2 text-gray-800 mr-4 text-sm resize-none bg-transparent outline-none"
          placeholder="Escribí o hablá tu tarea..."
        />

        <button
          onClick={handleConfirm}
          aria-label="Agregar tarea"
          title="Agregar tarea"
          className="px-3 py-2 bg-[#0e77c294] hover:bg-[#0e77c2c5] text-white rounded-2xl font-medium transition-all"
        >
          <ArrowLongRightIcon className="w-5 h-5" />
        </button>
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-2 text-center w-full">{error}</p>
      )}
    </section>
  )
}
