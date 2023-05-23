'use client'

import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'
type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
