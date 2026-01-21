import { useThemeStore } from '../store/themeStore'
import { themes, type Theme } from '../types/theme'

/**
 * Componente toggle de tema
 * @returns Toggle simple para cambiar entre tema claro y oscuro
 */
function ThemeSelector(): JSX.Element {
  const { theme, setTheme } = useThemeStore()
  const currentTheme = themes[theme]

  /**
   * Alterna entre tema claro y oscuro
   */
  const toggleTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 right-4 px-4 py-2 text-xs font-medium border rounded-lg transition-all duration-200 z-50"
      style={{
        borderColor: currentTheme.border,
        outline: 'none',
        color: currentTheme.text,
        backgroundColor: currentTheme.buttonBackground,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = currentTheme.buttonHover
        e.currentTarget.style.borderColor = currentTheme.borderHover
        e.currentTarget.style.transform = 'scale(1.05)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = currentTheme.buttonBackground
        e.currentTarget.style.borderColor = currentTheme.border
        e.currentTarget.style.transform = 'scale(1)'
      }}
      title={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}

export default ThemeSelector

