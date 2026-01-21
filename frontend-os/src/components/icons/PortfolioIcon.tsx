import { useThemeStore } from '../../store/themeStore'
import { themes } from '../../types/theme'

interface PortfolioIconProps {
  size?: number
}

/**
 * Componente icono de portafolio personalizado
 * @param size - Tamaño del icono en píxeles
 * @returns Icono SVG de portafolio
 */
function PortfolioIcon({ size = 48 }: PortfolioIconProps): JSX.Element {
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
      <rect
        x="10"
        y="12"
        width="28"
        height="24"
        rx="2"
        fill={themeConfig.accent}
        fillOpacity="0.2"
        stroke={themeConfig.accent}
        strokeWidth="1.5"
      />
      <path
        d="M10 18H38"
        stroke={themeConfig.accent}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="16"
        cy="24"
        r="2"
        fill={themeConfig.accent}
      />
      <path
        d="M22 24H32"
        stroke={themeConfig.accent}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="16"
        cy="30"
        r="2"
        fill={themeConfig.accent}
      />
      <path
        d="M22 30H32"
        stroke={themeConfig.accent}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default PortfolioIcon
