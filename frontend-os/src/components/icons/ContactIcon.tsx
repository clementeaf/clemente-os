import { useThemeStore } from '../../store/themeStore'
import { themes } from '../../types/theme'

interface ContactIconProps {
  size?: number
}

/**
 * Componente icono de contacto personalizado
 * @param size - Tamaño del icono en píxeles
 * @returns Icono SVG de contacto
 */
function ContactIcon({ size = 48 }: ContactIconProps): JSX.Element {
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
      <circle
        cx="24"
        cy="20"
        r="8"
        fill={themeConfig.accent}
        fillOpacity="0.2"
        stroke={themeConfig.accent}
        strokeWidth="1.5"
      />
      <path
        d="M12 36C12 30 17 26 24 26C31 26 36 30 36 36"
        stroke={themeConfig.accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ContactIcon
