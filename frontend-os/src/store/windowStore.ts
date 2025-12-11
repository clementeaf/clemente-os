import { create } from 'zustand'

export interface Window {
  id: string
  title: string
  type: 'file-explorer' | 'app'
  isMinimized: boolean
  isMaximized: boolean
  position: { x: number; y: number }
  size: { width: number; height: number }
  zIndex: number
}

interface WindowState {
  windows: Window[]
  nextZIndex: number
  openWindow: (window: Omit<Window, 'id' | 'zIndex' | 'isMinimized' | 'isMaximized' | 'position' | 'size'>) => void
  closeWindow: (id: string) => void
  minimizeWindow: (id: string) => void
  maximizeWindow: (id: string) => void
  focusWindow: (id: string) => void
  restoreWindow: (id: string) => void
  updateWindowPosition: (id: string, position: { x: number; y: number }) => void
  updateWindowSize: (id: string, size: { width: number; height: number }) => void
}

const defaultSize = { width: 800, height: 600 }
const defaultPosition = { x: 100, y: 100 }

export const useWindowStore = create<WindowState>((set) => ({
  windows: [],
  nextZIndex: 1,
  openWindow: (window) =>
    set((state) => {
      const newWindow: Window = {
        ...window,
        id: `${window.type}-${Date.now()}`,
        zIndex: state.nextZIndex,
        isMinimized: false,
        isMaximized: false,
        position: defaultPosition,
        size: defaultSize,
      }
      return {
        windows: [...state.windows, newWindow],
        nextZIndex: state.nextZIndex + 1,
      }
    }),
  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    })),
  minimizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
      ),
    })),
  maximizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
      ),
    })),
  focusWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, zIndex: state.nextZIndex } : w
      ),
      nextZIndex: state.nextZIndex + 1,
    })),
  restoreWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id
          ? { ...w, isMinimized: false, zIndex: state.nextZIndex }
          : w
      ),
      nextZIndex: state.nextZIndex + 1,
    })),
  updateWindowPosition: (id, position) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, position } : w
      ),
    })),
  updateWindowSize: (id, size) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, size } : w
      ),
    })),
}))

