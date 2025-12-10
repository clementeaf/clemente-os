import { useEffect } from 'react'
import { useThemeStore } from './store/themeStore'
import { useAuthStore } from './store/authStore'
import { themes } from './types/theme'
import LoginForm from './components/LoginForm'
import LinuxDesktop from './components/LinuxDesktop'
import ThemeSelector from './components/ThemeSelector'

function App(): JSX.Element {
  const { theme } = useThemeStore()
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    const themeConfig = themes[theme]
    document.body.style.backgroundColor = themeConfig.background
    document.body.style.color = themeConfig.text
  }, [theme])

  return (
    <>
      <ThemeSelector />
      {isAuthenticated ? <LinuxDesktop /> : <LoginForm />}
    </>
  )
}

export default App
