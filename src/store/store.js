import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSettingsStore = create(persist(
    (set, get) => ({
        language: "en",
        darkTheme: false,

        setLanguage: (value) => set({ language: value }),
        toggleDarkTheme: () => set(state => ({ darkTheme: !state.darkTheme })),
    }),
    {
        name: 'settings-storage',
        getStorage: () => localStorage,
    }
))