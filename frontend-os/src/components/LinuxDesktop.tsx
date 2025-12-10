import { useThemeStore } from '../store/themeStore'
import { useAuthStore } from '../store/authStore'
import { themes } from '../types/theme'
import Taskbar from './Taskbar'

/**
 * Componente escritorio tipo Windows
 * @returns Interfaz tipo Windows después del login
 */
function LinuxDesktop(): JSX.Element {
  const { theme } = useThemeStore()
  const { userName } = useAuthStore()
  const themeConfig = themes[theme]

  return (
    <div className="min-h-screen pb-12">
      <div
        className="w-full h-full p-6"
        style={{
          minHeight: 'calc(100vh - 3rem)',
        }}
      >
        <div className="mb-6">
          <h1
            className="text-lg font-light"
            style={{ color: themeConfig.text }}
          >
            Bienvenido, {userName}
          </h1>
          <p
            className="text-xs mt-1"
            style={{ color: themeConfig.text, opacity: 0.6 }}
          >
            Sistema operativo personal
          </p>
        </div>
      </div>
      <Taskbar />
    </div>
  )
}

export default LinuxDesktop

