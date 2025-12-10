import { useState, FormEvent, ChangeEvent } from 'react'

/**
 * Componente de formulario de ingreso al sistema operativo
 * @returns Formulario con campo de nombre y botón de ingreso
 */
function LoginForm(): JSX.Element {
  const [name, setName] = useState<string>('')

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
      console.log('Usuario ingresado:', name.trim())
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md bg-[#e5e8ea] border border-gray-400/30 rounded-2xl p-10 shadow-xl">
        <p className="text-gray-700 text-sm font-light mb-6 text-center">
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
              className="w-full px-3 py-2 bg-white/60 border border-gray-400/20 rounded-md text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-500/40 focus:bg-white/80 transition-all duration-200 font-light"
              autoFocus
            />
          </div>
          <button
            type="submit"
            disabled={name.trim() === ''}
            className="w-full px-4 py-2 bg-gray-800/80 text-white rounded-md text-xs font-normal tracking-wide uppercase disabled:opacity-25 disabled:cursor-not-allowed hover:bg-gray-800 transition-all duration-200"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm

