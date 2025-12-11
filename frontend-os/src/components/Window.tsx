import { ReactNode, useState, useRef, useEffect } from 'react'
import { useThemeStore } from '../store/themeStore'
import { useWindowStore, type Window } from '../store/windowStore'
import { themes } from '../types/theme'

interface WindowProps {
  window: Window
  children: ReactNode
}

/**
 * Componente ventana tipo Windows
 * @param window - Configuración de la ventana
 * @param children - Contenido de la ventana
 * @returns Ventana con barra de título y controles
 */
function WindowComponent({ window, children }: WindowProps): JSX.Element {
  const { theme } = useThemeStore()
  const {
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    updateWindowPosition,
    updateWindowSize,
  } = useWindowStore()
  const themeConfig = themes[theme]

  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [isResizing, setIsResizing] = useState<boolean>(false)
  const [resizeDirection, setResizeDirection] = useState<string>('')
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })
  const [resizeStart, setResizeStart] = useState<{
    x: number
    y: number
    width: number
    height: number
    positionX: number
    positionY: number
  }>({ x: 0, y: 0, width: 0, height: 0, positionX: 0, positionY: 0 })

  const windowRef = useRef<HTMLDivElement>(null)

  /**
   * Maneja el clic en la ventana para enfocarla
   */
  const handleFocus = (): void => {
    focusWindow(window.id)
  }

  /**
   * Inicia el arrastre de la ventana
   */
  const handleDragStart = (e: React.MouseEvent): void => {
    if (window.isMaximized) return
    setIsDragging(true)
    setDragStart({
      x: e.clientX - window.position.x,
      y: e.clientY - window.position.y,
    })
    focusWindow(window.id)
  }

  /**
   * Inicia el redimensionamiento de la ventana
   */
  const handleResizeStart = (
    e: React.MouseEvent,
    direction: string
  ): void => {
    if (window.isMaximized) return
    e.stopPropagation()
    setIsResizing(true)
    setResizeDirection(direction)
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: window.size.width,
      height: window.size.height,
      positionX: window.position.x,
      positionY: window.position.y,
    })
    focusWindow(window.id)
  }

  /**
   * Maneja el movimiento del mouse para arrastrar y redimensionar
   */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      if (isDragging && !window.isMaximized) {
        const newX = e.clientX - dragStart.x
        const newY = e.clientY - dragStart.y
        updateWindowPosition(window.id, {
          x: Math.max(0, newX),
          y: Math.max(0, newY),
        })
      }

      if (isResizing && !window.isMaximized) {
        const deltaX = e.clientX - resizeStart.x
        const deltaY = e.clientY - resizeStart.y
        let newWidth = resizeStart.width
        let newHeight = resizeStart.height
        let newX = resizeStart.positionX
        let newY = resizeStart.positionY

        if (resizeDirection.includes('right')) {
          newWidth = Math.max(300, resizeStart.width + deltaX)
        }
        if (resizeDirection.includes('left')) {
          newWidth = Math.max(300, resizeStart.width - deltaX)
          newX = Math.max(0, resizeStart.positionX + deltaX)
        }
        if (resizeDirection.includes('bottom')) {
          newHeight = Math.max(200, resizeStart.height + deltaY)
        }
        if (resizeDirection.includes('top')) {
          newHeight = Math.max(200, resizeStart.height - deltaY)
          newY = Math.max(0, resizeStart.positionY + deltaY)
        }

        updateWindowSize(window.id, { width: newWidth, height: newHeight })
        if (resizeDirection.includes('left') || resizeDirection.includes('top')) {
          updateWindowPosition(window.id, { x: newX, y: newY })
        }
      }
    }

    const handleMouseUp = (): void => {
      setIsDragging(false)
      setIsResizing(false)
      setResizeDirection('')
    }

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [
    isDragging,
    isResizing,
    dragStart,
    resizeStart,
    resizeDirection,
    window.id,
    window.isMaximized,
    window.position,
    updateWindowPosition,
    updateWindowSize,
  ])

  if (window.isMinimized) {
    return <></>
  }

  return (
    <div
      ref={windowRef}
      className="fixed border rounded-md flex flex-col shadow-lg"
      style={{
        left: window.isMaximized ? 0 : `${window.position.x}px`,
        top: window.isMaximized ? 0 : `${window.position.y}px`,
        width: window.isMaximized ? '100%' : `${window.size.width}px`,
        height: window.isMaximized ? 'calc(100% - 3rem)' : `${window.size.height}px`,
        borderColor: themeConfig.border,
        backgroundColor:
          theme === 'dark'
            ? 'rgba(0, 0, 0, 0.7)'
            : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(20px)',
        zIndex: window.zIndex,
        cursor: isDragging ? 'move' : 'default',
      }}
      onClick={handleFocus}
    >
      <div
        className="flex items-center justify-between px-3 py-2 border-b"
        style={{
          borderColor: themeConfig.border,
          backgroundColor:
            theme === 'dark'
              ? 'rgba(0, 0, 0, 0.3)'
              : 'rgba(255, 255, 255, 0.3)',
          cursor: window.isMaximized ? 'default' : 'move',
        }}
        onMouseDown={handleDragStart}
      >
        <span
          className="text-xs font-light"
          style={{ color: themeConfig.text }}
        >
          {window.title}
        </span>
        <div className="flex gap-1">
          <button
            onClick={() => minimizeWindow(window.id)}
            className="w-4 h-4 text-xs font-light transition-all duration-200"
            style={{
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              color: themeConfig.text,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${themeConfig.border}30`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            −
          </button>
          <button
            onClick={() => maximizeWindow(window.id)}
            className="w-4 h-4 text-xs font-light transition-all duration-200"
            style={{
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              color: themeConfig.text,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${themeConfig.border}30`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            □
          </button>
          <button
            onClick={() => closeWindow(window.id)}
            className="w-4 h-4 text-xs font-light transition-all duration-200"
            style={{
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              color: themeConfig.text,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${themeConfig.border}30`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            ×
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden relative">{children}</div>
      {!window.isMaximized && (
        <>
          <div
            className="absolute top-0 left-0 w-2 h-2 cursor-nw-resize"
            onMouseDown={(e) => handleResizeStart(e, 'top-left')}
          />
          <div
            className="absolute top-0 right-0 w-2 h-2 cursor-ne-resize"
            onMouseDown={(e) => handleResizeStart(e, 'top-right')}
          />
          <div
            className="absolute bottom-0 left-0 w-2 h-2 cursor-sw-resize"
            onMouseDown={(e) => handleResizeStart(e, 'bottom-left')}
          />
          <div
            className="absolute bottom-0 right-0 w-2 h-2 cursor-se-resize"
            onMouseDown={(e) => handleResizeStart(e, 'bottom-right')}
          />
          <div
            className="absolute top-0 left-2 right-2 h-1 cursor-n-resize"
            onMouseDown={(e) => handleResizeStart(e, 'top')}
          />
          <div
            className="absolute bottom-0 left-2 right-2 h-1 cursor-s-resize"
            onMouseDown={(e) => handleResizeStart(e, 'bottom')}
          />
          <div
            className="absolute left-0 top-2 bottom-2 w-1 cursor-w-resize"
            onMouseDown={(e) => handleResizeStart(e, 'left')}
          />
          <div
            className="absolute right-0 top-2 bottom-2 w-1 cursor-e-resize"
            onMouseDown={(e) => handleResizeStart(e, 'right')}
          />
        </>
      )}
    </div>
  )
}

export default WindowComponent

