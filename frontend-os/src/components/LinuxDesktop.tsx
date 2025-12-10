import { useThemeStore } from '../store/themeStore'
import { useAuthStore } from '../store/authStore'
import { themes } from '../types/theme'
import Taskbar from './Taskbar'
import DesktopIcon from './DesktopIcon'

/**
 * Componente escritorio tipo Windows
 * @returns Interfaz tipo Windows después del login
 */
function LinuxDesktop(): JSX.Element {
  const { theme } = useThemeStore()
  const { userName } = useAuthStore()
  const themeConfig = themes[theme]

  /**
   * Maneja el clic en el icono de Contacto
   */
  const handleContactClick = (): void => {
    console.log('Contacto clicked')
  }

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
        </div>
        <div className="flex flex-wrap gap-6">
          <DesktopIcon title="Contacto" onClick={handleContactClick} />
        </div>
      </div>
      <Taskbar />
    </div>
  )
}

export default LinuxDesktop

