import { useThemeStore } from '../store/themeStore'
import { themes } from '../types/theme'

/**
 * Componente explorador de archivos tipo Windows/Linux
 * @returns Interfaz de explorador de archivos
 */
function FileExplorer(): JSX.Element {
  const { theme } = useThemeStore()
  const themeConfig = themes[theme]

  const files = [
    { name: 'proyecto-1', type: 'folder' },
    { name: 'proyecto-2', type: 'folder' },
    { name: 'proyecto-3', type: 'folder' },
    { name: 'documento.pdf', type: 'file' },
  ]

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
            backgroundColor:
              theme === 'dark'
                ? 'rgba(0, 0, 0, 0.2)'
                : 'rgba(255, 255, 255, 0.2)',
            color: themeConfig.text,
          }}
        >
          Portafolio
        </div>
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
        <div className="grid grid-cols-4 gap-4">
          {files.map((file) => (
            <div
              key={file.name}
              className="flex flex-col items-center gap-2 p-3 cursor-pointer transition-all duration-200"
              style={{
                border: 'none',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${themeConfig.border}10`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <div
                className="w-12 h-12 border rounded-md flex items-center justify-center"
                style={{
                  borderColor: themeConfig.border,
                  backgroundColor:
                    theme === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)',
                }}
              >
                {file.type === 'folder' ? (
                  <div
                    className="w-6 h-6 border rounded-sm"
                    style={{
                      borderColor: themeConfig.border,
                      opacity: 0.6,
                    }}
                  />
                ) : (
                  <div
                    className="w-4 h-4 border"
                    style={{
                      borderColor: themeConfig.border,
                      opacity: 0.6,
                    }}
                  />
                )}
              </div>
              <span
                className="text-xs font-light text-center"
                style={{ color: themeConfig.text }}
              >
                {file.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FileExplorer

