import { useEffect } from 'react'
import { useThemeStore } from './store/themeStore'
import { themes } from './types/theme'
import LoginForm from './components/LoginForm'
import ThemeSelector from './components/ThemeSelector'

function App(): JSX.Element {
  const { theme } = useThemeStore()

  useEffect(() => {
    const themeConfig = themes[theme]
    document.body.style.backgroundColor = themeConfig.background
    document.body.style.color = themeConfig.text
  }, [theme])

  return (
    <>
      <ThemeSelector />
      <LoginForm />
    </>
  )
}

export default App
