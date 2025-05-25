import { create } from 'zustand'

interface SummarizeStore {
  text: string
  summary: string | null
  isLoading: boolean
  setText: (text: string) => void
  setSummary: (summary: string) => void
  setIsLoading: (isLoading: boolean) => void
}

export const useSummarizeStore = create<SummarizeStore>((set) => ({
  text: '',
  summary: null,
  isLoading: false,
  setText: (text) => set({ text }),
  setSummary: (summary) => set({ summary }),
  setIsLoading: (isLoading) => set({ isLoading }),
}))