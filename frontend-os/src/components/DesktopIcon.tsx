import { useThemeStore } from '../store/themeStore'
import { themes } from '../types/theme'

interface DesktopIconProps {
  title: string
  onClick?: () => void
}

/**
 * Componente icono de aplicación del escritorio
 * @param title - Título del icono
 * @param onClick - Función a ejecutar al hacer clic
 * @returns Icono de aplicación tipo Windows
 */
function DesktopIcon({ title, onClick }: DesktopIconProps): JSX.Element {
  const { theme } = useThemeStore()
  const themeConfig = themes[theme]

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 p-3 transition-all duration-200"
      style={{
        border: 'none',
        backgroundColor: 'transparent',
        color: themeConfig.text,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = `${themeConfig.border}10`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent'
      }}
    >
      <div
        className="w-12 h-12 border rounded-md flex items-center justify-center"
        style={{
          borderColor: themeConfig.border,
          backgroundColor:
            theme === 'dark'
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          className="w-6 h-6 border rounded-sm"
          style={{
            borderColor: themeConfig.border,
            opacity: 0.6,
          }}
        />
      </div>
      <span className="text-xs font-light" style={{ color: themeConfig.text }}>
        {title}
      </span>
    </button>
  )
}

export default DesktopIcon

