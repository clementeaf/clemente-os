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
      className="absolute top-4 right-4 px-3 py-1 text-xs font-light border rounded-md transition-all duration-200"
      style={{
        borderColor: currentTheme.border,
        outline: 'none',
        color: currentTheme.text,
        backgroundColor: 'transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = `${currentTheme.border}20`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent'
      }}
      title={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}

export default ThemeSelector

