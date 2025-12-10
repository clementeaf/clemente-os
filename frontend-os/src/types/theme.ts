export type Theme = 'dark' | 'light'

export interface ThemeConfig {
  background: string
  text: string
  border: string
  inputText: string
  inputBorder: string
  buttonText: string
  buttonBorder: string
}

export const themes: Record<Theme, ThemeConfig> = {
  dark: {
    background: '#1a1a1a',
    text: 'rgba(255, 255, 255, 0.87)',
    border: 'rgba(255, 255, 255, 0.3)',
    inputText: '#ffffff',
    inputBorder: 'rgba(255, 255, 255, 0.3)',
    buttonText: '#ffffff',
    buttonBorder: 'rgba(255, 255, 255, 0.3)',
  },
  light: {
    background: '#f5f5f5',
    text: '#1a1a1a',
    border: 'rgba(0, 0, 0, 0.3)',
    inputText: '#1a1a1a',
    inputBorder: 'rgba(0, 0, 0, 0.3)',
    buttonText: '#1a1a1a',
    buttonBorder: 'rgba(0, 0, 0, 0.3)',
  },
}

