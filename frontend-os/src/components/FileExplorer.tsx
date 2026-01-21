import { useState } from 'react'
import { useThemeStore } from '../store/themeStore'
import { useWindowStore } from '../store/windowStore'
import { themes } from '../types/theme'
import { projects } from '../data/portfolioData'
import FolderIcon from './icons/FolderIcon'
import PortfolioIcon from './icons/PortfolioIcon'
import type { Project } from '../types/portfolio'

interface FileItem {
  name: string
  type: 'folder' | 'file' | 'project'
  project?: Project
}

/**
 * Componente explorador de archivos tipo Windows/Linux
 * @returns Interfaz de explorador de archivos con navegación real
 */
function FileExplorer(): JSX.Element {
  const { theme } = useThemeStore()
  const { openWindow } = useWindowStore()
  const themeConfig = themes[theme]
  const [currentPath, setCurrentPath] = useState<string>('portfolio')

  /**
   * Navega a una carpeta o abre un proyecto
   */
  const handleItemClick = (item: FileItem): void => {
    if (item.type === 'project' && item.project) {
      openWindow({
        title: item.project.title,
        type: 'app',
        content: 'project',
        projectId: item.project.id,
      })
    } else if (item.type === 'folder') {
      setCurrentPath(item.name)
    }
  }

  /**
   * Obtiene los archivos según la ruta actual
   */
  const getCurrentFiles = (): FileItem[] => {
    if (currentPath === 'portfolio') {
      return projects.map((project) => ({
        name: project.title,
        type: 'project' as const,
        project,
      }))
    }
    return []
  }

  const files = getCurrentFiles()

  return (
    <div className="flex flex-col h-full">
      <div
        className="flex items-center gap-2 px-3 py-2 border-b"
        style={{
          borderColor: themeConfig.border,
        }}
      >
        <button
          className="px-2 py-1 text-xs font-light transition-all duration-200"
          style={{
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            color: themeConfig.text,
            opacity: 0.6,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.6'
          }}
        >
          ←
        </button>
        <button
          className="px-2 py-1 text-xs font-light transition-all duration-200"
          style={{
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            color: themeConfig.text,
            opacity: 0.6,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.6'
          }}
        >
          →
        </button>
        <div
          className="flex-1 px-3 py-1 text-xs font-light border rounded-md"
          style={{
            borderColor: themeConfig.border,
            backgroundColor: themeConfig.inputBackground,
            color: themeConfig.text,
          }}
        >
          {currentPath === 'portfolio' ? 'Portafolio' : currentPath}
        </div>
        {currentPath !== 'portfolio' && (
          <button
            onClick={() => setCurrentPath('portfolio')}
            className="px-2 py-1 text-xs font-light transition-all duration-200"
            style={{
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              color: themeConfig.text,
              opacity: 0.6,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.6'
            }}
            aria-label="Volver al portafolio"
          >
            Inicio
          </button>
        )}
      </div>
      <div
        className="flex-1 p-4 overflow-auto"
        style={{
          backgroundColor:
            theme === 'dark'
              ? 'rgba(0, 0, 0, 0.1)'
              : 'rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {files.map((file) => (
            <button
              key={file.name}
              onClick={() => handleItemClick(file)}
              className="flex flex-col items-center gap-2 p-3 cursor-pointer transition-all duration-200 rounded-lg"
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                outline: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = themeConfig.iconHover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
              aria-label={`Abrir ${file.name}`}
            >
              <div
                className="flex items-center justify-center transition-transform duration-200"
                style={{
                  transform: 'scale(1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                {file.type === 'project' ? (
                  <PortfolioIcon size={48} />
                ) : file.type === 'folder' ? (
                  <FolderIcon size={48} />
                ) : (
                  <div
                    className="w-8 h-10 border rounded-sm"
                    style={{
                      borderColor: themeConfig.border,
                      backgroundColor: themeConfig.iconBackground,
                    }}
                  />
                )}
              </div>
              <span
                className="text-xs font-light text-center max-w-[100px] truncate"
                style={{ color: themeConfig.text }}
              >
                {file.name}
              </span>
            </button>
          ))}
        </div>
        {files.length === 0 && (
          <div
            className="flex items-center justify-center h-64 text-sm font-light"
            style={{ color: themeConfig.textSecondary }}
          >
            No hay elementos en esta carpeta
          </div>
        )}
      </div>
    </div>
  )
}

export default FileExplorer

