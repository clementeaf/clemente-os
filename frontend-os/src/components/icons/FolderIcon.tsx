import { useThemeStore } from '../../store/themeStore'
import { themes } from '../../types/theme'

interface FolderIconProps {
  size?: number
}

/**
 * Componente icono de carpeta personalizado
 * @param size - Tamaño del icono en píxeles
 * @returns Icono SVG de carpeta
 */
function FolderIcon({ size = 48 }: FolderIconProps): JSX.Element {
  const { theme } = useThemeStore()
  const themeConfig = themes[theme]

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 12C8 10.8954 8.89543 10 10 10H20.5858C21.1162 10 21.6249 10.2107 22 10.5858L24.4142 13H38C39.1046 13 40 13.8954 40 15V36C40 37.1046 39.1046 38 38 38H10C8.89543 38 8 37.1046 8 36V12Z"
        fill={themeConfig.accent}
        fillOpacity="0.2"
        stroke={themeConfig.accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H24.4142C24.9446 12 25.4533 12.2107 25.8284 12.5858L28.2426 15H40"
        stroke={themeConfig.accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default FolderIcon
