import { lazy, Suspense, memo } from 'react'
import { useThemeStore } from '../store/themeStore'
import { useAuthStore } from '../store/authStore'
import { useWindowStore } from '../store/windowStore'
import { themes } from '../types/theme'
import Taskbar from './Taskbar'
import DesktopIcon from './DesktopIcon'
import WindowComponent from './Window'
import { projects } from '../data/portfolioData'

const FileExplorer = lazy(() => import('./FileExplorer'))
const ProjectView = lazy(() => import('./ProjectView'))
const AboutView = lazy(() => import('./AboutView'))
const ContactView = lazy(() => import('./ContactView'))

/**
 * Componente escritorio tipo Windows
 * @returns Interfaz tipo Windows después del login
 */
function LinuxDesktop(): JSX.Element {
  const { theme } = useThemeStore()
  const { userName } = useAuthStore()
  const { openWindow, windows } = useWindowStore()
  const themeConfig = themes[theme]

  /**
   * Maneja el clic en el icono de Contacto
   */
  const handleContactClick = (): void => {
    openWindow({
      title: 'Contacto',
      type: 'app',
      content: 'contact',
    })
  }

  /**
   * Maneja el clic en el icono de Portafolio
   */
  const handlePortfolioClick = (): void => {
    openWindow({
      title: 'Portafolio',
      type: 'file-explorer',
    })
  }

  /**
   * Renderiza el contenido de la ventana según su tipo
   */
  const renderWindowContent = (window: typeof windows[0]): JSX.Element | null => {
    if (window.type === 'file-explorer') {
      return (
        <Suspense
          fallback={
            <div
              className="flex items-center justify-center h-full"
              style={{ color: themeConfig.textSecondary }}
            >
              Cargando...
            </div>
          }
        >
          <FileExplorer />
        </Suspense>
      )
    }

    if (window.content === 'project' && window.projectId) {
      const project = projects.find((p) => p.id === window.projectId)
      if (project) {
        return (
          <Suspense
            fallback={
              <div
                className="flex items-center justify-center h-full"
                style={{ color: themeConfig.textSecondary }}
              >
                Cargando...
              </div>
            }
          >
            <ProjectView project={project} />
          </Suspense>
        )
      }
    }

    if (window.content === 'about') {
      return (
        <Suspense
          fallback={
            <div
              className="flex items-center justify-center h-full"
              style={{ color: themeConfig.textSecondary }}
            >
              Cargando...
            </div>
          }
        >
          <AboutView />
        </Suspense>
      )
    }

    if (window.content === 'contact') {
      return (
        <Suspense
          fallback={
            <div
              className="flex items-center justify-center h-full"
              style={{ color: themeConfig.textSecondary }}
            >
              Cargando...
            </div>
          }
        >
          <ContactView />
        </Suspense>
      )
    }

    return null
  }

  return (
    <div className="min-h-screen pb-12" role="main" aria-label="Escritorio principal">
      <div
        className="w-full h-full p-4 sm:p-6"
        style={{
          minHeight: 'calc(100vh - 3rem)',
        }}
      >
        <div className="mb-8 animate-fade-in">
          <h1
            className="text-2xl font-light mb-2"
            style={{ color: themeConfig.text }}
          >
            Bienvenido, {userName}
          </h1>
          <p
            className="text-sm font-light"
            style={{ color: themeConfig.textSecondary }}
          >
            Explora mi portafolio y proyectos
          </p>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-8" role="group" aria-label="Iconos del escritorio">
          <DesktopIcon
            title="Sobre Mí"
            onClick={() => {
              openWindow({
                title: 'Sobre Mí',
                type: 'app',
                content: 'about',
              })
            }}
            iconType="contact"
          />
          <DesktopIcon
            title="Portafolio"
            onClick={handlePortfolioClick}
            iconType="portfolio"
          />
          <DesktopIcon
            title="Contacto"
            onClick={handleContactClick}
            iconType="contact"
          />
        </div>
      </div>
      {windows.map((window) => (
        <WindowComponent key={window.id} window={window}>
          {renderWindowContent(window)}
        </WindowComponent>
      ))}
      <Taskbar />
    </div>
  )
}

export default memo(LinuxDesktop)

