"use client"

import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [isDark, setDarkMode] = useState<boolean>()
  function toggle () {
    if (typeof window !== "undefined")
      return
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    // @ts-ignore
    if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
      document.body.classList.add('dark')
    } else {
      setDarkMode(false)
      document.body.classList.remove('dark')
    }
  }
  useEffect(() => {
    if (typeof window !== "undefined")
      toggle()
  }, [])
  if (typeof window !== "undefined") {
    // MediaQueryList
    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

    // recommended method for newer browsers: specify event-type as first argument
    darkModePreference.addEventListener("change", e => toggle());
  }

  return isDark
}
