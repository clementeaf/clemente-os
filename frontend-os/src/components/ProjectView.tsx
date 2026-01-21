import { useThemeStore } from '../store/themeStore'
import { themes } from '../types/theme'
import type { Project } from '../types/portfolio'

interface ProjectViewProps {
  project: Project
}

/**
 * Componente para visualizar detalles de un proyecto
 * @param project - Información del proyecto a mostrar
 * @returns Vista detallada del proyecto
 */
function ProjectView({ project }: ProjectViewProps): JSX.Element {
  const { theme } = useThemeStore()
  const themeConfig = themes[theme]

  return (
    <div className="flex flex-col h-full overflow-auto p-6">
      <div className="max-w-4xl mx-auto w-full space-y-6">
        <div className="space-y-4">
          <h1
            className="text-3xl font-light"
            style={{ color: themeConfig.text }}
          >
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            <span
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{
                backgroundColor: themeConfig.accent + '20',
                color: themeConfig.accent,
              }}
            >
              {project.category.toUpperCase()}
            </span>
            <span
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{
                backgroundColor: themeConfig.iconBackground,
                color: themeConfig.textSecondary,
              }}
            >
              {project.year}
            </span>
          </div>
        </div>

        <div
          className="p-4 rounded-lg border"
          style={{
            backgroundColor: themeConfig.iconBackground,
            borderColor: themeConfig.border,
          }}
        >
          <p
            className="text-sm font-light leading-relaxed"
            style={{ color: themeConfig.text }}
          >
            {project.longDescription}
          </p>
        </div>

        <div className="space-y-4">
          <h2
            className="text-xl font-light"
            style={{ color: themeConfig.text }}
          >
            Tecnologías
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium rounded-md border transition-all duration-200"
                style={{
                  borderColor: themeConfig.border,
                  backgroundColor: themeConfig.buttonBackground,
                  color: themeConfig.text,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = themeConfig.accent
                  e.currentTarget.style.backgroundColor = themeConfig.accent + '10'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = themeConfig.border
                  e.currentTarget.style.backgroundColor = themeConfig.buttonBackground
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <div className="flex gap-4 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium rounded-md border transition-all duration-200"
                style={{
                  borderColor: themeConfig.border,
                  backgroundColor: themeConfig.buttonBackground,
                  color: themeConfig.text,
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = themeConfig.accent
                  e.currentTarget.style.backgroundColor = themeConfig.accent
                  e.currentTarget.style.color = '#ffffff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = themeConfig.border
                  e.currentTarget.style.backgroundColor = themeConfig.buttonBackground
                  e.currentTarget.style.color = themeConfig.text
                }}
              >
                Ver en GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200"
                style={{
                  backgroundColor: themeConfig.accent,
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = themeConfig.accentHover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = themeConfig.accent
                }}
              >
                Ver Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectView
