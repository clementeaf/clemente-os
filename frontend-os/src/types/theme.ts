export type Theme = 'dark' | 'light'

export interface ThemeConfig {
  background: string
  backgroundSecondary: string
  text: string
  textSecondary: string
  border: string
  borderHover: string
  inputText: string
  inputBorder: string
  inputBackground: string
  buttonText: string
  buttonBorder: string
  buttonBackground: string
  buttonHover: string
  accent: string
  accentHover: string
  windowBackground: string
  windowBorder: string
  taskbarBackground: string
  iconBackground: string
  iconHover: string
}

export const themes: Record<Theme, ThemeConfig> = {
  dark: {
    background: '#0a0a0f',
    backgroundSecondary: '#121218',
    text: 'rgba(255, 255, 255, 0.92)',
    textSecondary: 'rgba(255, 255, 255, 0.65)',
    border: 'rgba(255, 255, 255, 0.12)',
    borderHover: 'rgba(255, 255, 255, 0.25)',
    inputText: '#ffffff',
    inputBorder: 'rgba(255, 255, 255, 0.15)',
    inputBackground: 'rgba(255, 255, 255, 0.03)',
    buttonText: '#ffffff',
    buttonBorder: 'rgba(255, 255, 255, 0.2)',
    buttonBackground: 'rgba(255, 255, 255, 0.05)',
    buttonHover: 'rgba(255, 255, 255, 0.12)',
    accent: '#6366f1',
    accentHover: '#818cf8',
    windowBackground: 'rgba(10, 10, 15, 0.85)',
    windowBorder: 'rgba(255, 255, 255, 0.1)',
    taskbarBackground: 'rgba(10, 10, 15, 0.75)',
    iconBackground: 'rgba(255, 255, 255, 0.04)',
    iconHover: 'rgba(255, 255, 255, 0.1)',
  },
  light: {
    background: '#fafafa',
    backgroundSecondary: '#f5f5f7',
    text: '#1a1a1a',
    textSecondary: 'rgba(0, 0, 0, 0.6)',
    border: 'rgba(0, 0, 0, 0.1)',
    borderHover: 'rgba(0, 0, 0, 0.2)',
    inputText: '#1a1a1a',
    inputBorder: 'rgba(0, 0, 0, 0.15)',
    inputBackground: 'rgba(0, 0, 0, 0.02)',
    buttonText: '#1a1a1a',
    buttonBorder: 'rgba(0, 0, 0, 0.15)',
    buttonBackground: 'rgba(0, 0, 0, 0.03)',
    buttonHover: 'rgba(0, 0, 0, 0.08)',
    accent: '#6366f1',
    accentHover: '#4f46e5',
    windowBackground: 'rgba(255, 255, 255, 0.9)',
    windowBorder: 'rgba(0, 0, 0, 0.08)',
    taskbarBackground: 'rgba(250, 250, 250, 0.85)',
    iconBackground: 'rgba(0, 0, 0, 0.03)',
    iconHover: 'rgba(0, 0, 0, 0.08)',
  },
}

