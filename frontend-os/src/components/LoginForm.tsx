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
        className="w-full max-w-md bg-transparent border rounded-2xl p-10 animate-fade-in"
        style={{
          borderColor: themeConfig.border,
          backgroundColor:
            theme === 'dark'
              ? 'rgba(255, 255, 255, 0.02)'
              : 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          boxShadow:
            theme === 'dark'
              ? '0 8px 32px rgba(0, 0, 0, 0.4)'
              : '0 8px 32px rgba(0, 0, 0, 0.1)',
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
              className="w-full px-3 py-2 bg-transparent border rounded-md text-sm placeholder:opacity-50 focus:outline-none transition-all duration-200 font-light focus:border-opacity-100"
              style={{
                borderColor: themeConfig.inputBorder,
                color: themeConfig.inputText,
                backgroundColor: themeConfig.inputBackground,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = themeConfig.accent
                e.currentTarget.style.boxShadow = `0 0 0 3px ${themeConfig.accent}20`
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = themeConfig.inputBorder
                e.currentTarget.style.boxShadow = 'none'
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
              outline: 'none',
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

