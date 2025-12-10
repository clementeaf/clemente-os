import { useThemeStore } from '../store/themeStore'
import { themes } from '../types/theme'

interface StartMenuProps {
  onClose: () => void
  onLogout: () => void
}

/**
 * Componente menú de inicio tipo Windows
 * @param onClose - Función para cerrar el menú
 * @param onLogout - Función para cerrar sesión
 * @returns Menú desplegable del botón inicio
 */
function StartMenu({ onClose, onLogout }: StartMenuProps): JSX.Element {
  const { theme } = useThemeStore()
  const themeConfig = themes[theme]

  /**
   * Maneja el cierre de sesión
   */
  const handleLogout = (): void => {
    onLogout()
    onClose()
  }

  return (
    <div
      className="absolute bottom-14 left-2 w-64 border rounded-md p-2"
      style={{
        borderColor: themeConfig.border,
        backgroundColor:
          theme === 'dark'
            ? 'rgba(0, 0, 0, 0.8)'
            : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col gap-1">
        <button
          onClick={onClose}
          className="text-left px-3 py-2 text-sm font-light border rounded-md transition-all duration-200"
          style={{
            borderColor: 'transparent',
            color: themeConfig.text,
            backgroundColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${themeConfig.border}20`
            e.currentTarget.style.borderColor = themeConfig.border
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.borderColor = 'transparent'
          }}
        >
          Inicio
        </button>
        <div
          className="h-px my-1"
          style={{ backgroundColor: themeConfig.border, opacity: 0.3 }}
        />
        <button
          onClick={handleLogout}
          className="text-left px-3 py-2 text-sm font-light border rounded-md transition-all duration-200"
          style={{
            borderColor: 'transparent',
            color: themeConfig.text,
            backgroundColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${themeConfig.border}20`
            e.currentTarget.style.borderColor = themeConfig.border
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.borderColor = 'transparent'
          }}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}

export default StartMenu

