import { useState, FormEvent, ChangeEvent } from 'react'
import { useThemeStore } from '../store/themeStore'
import { useAuthStore } from '../store/authStore'
import { themes } from '../types/theme'

/**
 * Componente de formulario de ingreso al sistema operativo
 * @returns Formulario con campo de nombre y botón de ingreso
 */
function LoginForm(): JSX.Element {
  const [name, setName] = useState<string>('')
  const { theme } = useThemeStore()
  const { login } = useAuthStore()
  const themeConfig = themes[theme]

  /**
   * Maneja el cambio en el input del nombre
   * @param event - Evento de cambio del input
   */
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value)
  }

  /**
   * Maneja el envío del formulario
   * @param event - Evento de envío del formulario
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (name.trim() !== '') {
      login(name.trim())
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div
        className="w-full max-w-md bg-transparent border rounded-2xl p-10"
        style={{
          borderColor: themeConfig.border,
        }}
      >
        <p
          className="text-sm font-light mb-6 text-center"
          style={{
            color: themeConfig.text,
            opacity: 0.8,
          }}
        >
          Bienvenido, por favor introduce tu nombre para acceder
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Nombre"
              className="w-full px-3 py-2 bg-transparent border rounded-md text-sm placeholder:opacity-50 focus:outline-none transition-all duration-200 font-light"
              style={{
                borderColor: themeConfig.inputBorder,
                color: themeConfig.inputText,
              }}
              autoFocus
            />
          </div>
          <button
            type="submit"
            disabled={name.trim() === ''}
            className="w-full px-4 py-2 bg-transparent border rounded-md text-xs font-normal tracking-wide uppercase disabled:opacity-25 disabled:cursor-not-allowed hover:opacity-80 transition-all duration-200"
            style={{
              borderColor: themeConfig.buttonBorder,
              color: themeConfig.buttonText,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm

