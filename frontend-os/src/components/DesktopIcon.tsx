import { useState, memo } from 'react'
import { useThemeStore } from '../store/themeStore'
import { themes } from '../types/theme'
import FolderIcon from './icons/FolderIcon'
import ContactIcon from './icons/ContactIcon'
import PortfolioIcon from './icons/PortfolioIcon'

interface DesktopIconProps {
  title: string
  onClick?: () => void
  iconType?: 'app' | 'folder' | 'contact' | 'portfolio'
}

/**
 * Componente icono de aplicación del escritorio
 * @param title - Título del icono
 * @param onClick - Función a ejecutar al hacer clic
 * @param iconType - Tipo de icono a mostrar
 * @returns Icono de aplicación tipo Windows con diseño mejorado
 */
function DesktopIcon({
  title,
  onClick,
  iconType = 'app',
}: DesktopIconProps): JSX.Element {
  const { theme } = useThemeStore()
  const themeConfig = themes[theme]
  const [isHovered, setIsHovered] = useState<boolean>(false)

  /**
   * Renderiza el icono según el tipo
   */
  const renderIcon = (): JSX.Element => {
    switch (iconType) {
      case 'folder':
        return <FolderIcon size={48} />
      case 'contact':
        return <ContactIcon size={48} />
      case 'portfolio':
        return <PortfolioIcon size={48} />
      default:
        return <PortfolioIcon size={48} />
    }
  }

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300 group"
      style={{
        border: 'none',
        outline: 'none',
        backgroundColor: isHovered ? themeConfig.iconHover : 'transparent',
        color: themeConfig.text,
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={title}
    >
      <div
        className="flex items-center justify-center transition-transform duration-300"
        style={{
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        {renderIcon()}
      </div>
      <span
        className="text-xs font-medium text-center max-w-[80px] transition-colors duration-200"
        style={{
          color: isHovered ? themeConfig.text : themeConfig.textSecondary,
          textShadow: isHovered
            ? `0 0 8px ${themeConfig.accent}40`
            : 'none',
        }}
      >
        {title}
      </span>
    </button>
  )
}

export default memo(DesktopIcon)

