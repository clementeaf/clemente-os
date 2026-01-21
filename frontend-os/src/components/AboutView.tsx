import { useThemeStore } from '../store/themeStore'
import { themes } from '../types/theme'
import { aboutInfo } from '../data/portfolioData'

/**
 * Componente para mostrar información sobre mí
 * @returns Vista con información personal y profesional
 */
function AboutView(): JSX.Element {
  const { theme } = useThemeStore()
  const themeConfig = themes[theme]

  return (
    <div className="flex flex-col h-full overflow-auto p-6">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <div className="space-y-4">
          <h1
            className="text-3xl font-light"
            style={{ color: themeConfig.text }}
          >
            {aboutInfo.name}
          </h1>
          <p
            className="text-lg font-light"
            style={{ color: themeConfig.textSecondary }}
          >
            {aboutInfo.title}
          </p>
        </div>

        <div
          className="p-6 rounded-lg border space-y-4"
          style={{
            backgroundColor: themeConfig.iconBackground,
            borderColor: themeConfig.border,
          }}
        >
          <h2
            className="text-xl font-light"
            style={{ color: themeConfig.text }}
          >
            Sobre Mí
          </h2>
          <p
            className="text-sm font-light leading-relaxed"
            style={{ color: themeConfig.text }}
          >
            {aboutInfo.bio}
          </p>
        </div>

        <div className="space-y-4">
          <h2
            className="text-xl font-light"
            style={{ color: themeConfig.text }}
          >
            Habilidades
          </h2>
          <div className="flex flex-wrap gap-2">
            {aboutInfo.skills.map((skill) => (
              <span
                key={skill}
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
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2
            className="text-xl font-light"
            style={{ color: themeConfig.text }}
          >
            Experiencia
          </h2>
          <div className="space-y-6">
            {aboutInfo.experience.map((exp, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border"
                style={{
                  backgroundColor: themeConfig.iconBackground,
                  borderColor: themeConfig.border,
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3
                    className="text-lg font-medium"
                    style={{ color: themeConfig.text }}
                  >
                    {exp.position}
                  </h3>
                  <span
                    className="text-sm font-light"
                    style={{ color: themeConfig.textSecondary }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p
                  className="text-sm font-medium mb-2"
                  style={{ color: themeConfig.accent }}
                >
                  {exp.company}
                </p>
                <p
                  className="text-sm font-light leading-relaxed mb-3"
                  style={{ color: themeConfig.text }}
                >
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded"
                      style={{
                        backgroundColor: themeConfig.accent + '20',
                        color: themeConfig.accent,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2
            className="text-xl font-light"
            style={{ color: themeConfig.text }}
          >
            Educación
          </h2>
          <div className="space-y-4">
            {aboutInfo.education.map((edu, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border"
                style={{
                  backgroundColor: themeConfig.iconBackground,
                  borderColor: themeConfig.border,
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3
                    className="text-lg font-medium"
                    style={{ color: themeConfig.text }}
                  >
                    {edu.degree}
                  </h3>
                  <span
                    className="text-sm font-light"
                    style={{ color: themeConfig.textSecondary }}
                  >
                    {edu.period}
                  </span>
                </div>
                <p
                  className="text-sm font-medium"
                  style={{ color: themeConfig.accent }}
                >
                  {edu.institution}
                </p>
                {edu.description && (
                  <p
                    className="text-sm font-light leading-relaxed mt-2"
                    style={{ color: themeConfig.text }}
                  >
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutView
