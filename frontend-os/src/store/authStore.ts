import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  isAuthenticated: boolean
  userName: string
  login: (name: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      userName: '',
      login: (name: string) => set({ isAuthenticated: true, userName: name }),
      logout: () => set({ isAuthenticated: false, userName: '' }),
    }),
    {
      name: 'auth-storage',
    }
  )
)

