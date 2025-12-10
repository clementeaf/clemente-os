import { useState } from 'react'
import { useThemeStore } from '../store/themeStore'
import { useAuthStore } from '../store/authStore'
import { themes } from '../types/theme'
import StartMenu from './StartMenu'

/**
 * Componente barra de tareas tipo Windows
 * @returns Barra de tareas con botón de inicio y menú
 */
function Taskbar(): JSX.Element {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState<boolean>(false)
  const { theme } = useThemeStore()
  const { logout } = useAuthStore()
  const themeConfig = themes[theme]

  /**
   * Alterna el menú de inicio
   */
  const toggleStartMenu = (): void => {
    setIsStartMenuOpen(!isStartMenuOpen)
  }

  /**
   * Cierra el menú de inicio
   */
  const closeStartMenu = (): void => {
    setIsStartMenuOpen(false)
  }

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 h-12 border-t flex items-center px-2 gap-2 z-50"
        style={{
          borderColor: themeConfig.border,
          backgroundColor:
            theme === 'dark'
              ? 'rgba(0, 0, 0, 0.3)'
              : 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="relative">
          <button
            onClick={toggleStartMenu}
            className="px-4 py-2 text-xs font-light transition-all duration-200"
            style={{
              border: 'none',
              color: themeConfig.text,
              backgroundColor: isStartMenuOpen
                ? `${themeConfig.border}20`
                : 'transparent',
            }}
            onMouseEnter={(e) => {
              if (!isStartMenuOpen) {
                e.currentTarget.style.backgroundColor = `${themeConfig.border}10`
              }
            }}
            onMouseLeave={(e) => {
              if (!isStartMenuOpen) {
                e.currentTarget.style.backgroundColor = 'transparent'
              }
            }}
          >
            Inicio
          </button>
          {isStartMenuOpen && (
            <StartMenu onClose={closeStartMenu} onLogout={logout} />
          )}
        </div>
      </div>
      {isStartMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeStartMenu}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              closeStartMenu()
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Cerrar menú"
        />
      )}
    </>
  )
}

export default Taskbar

