'use client'

import type { AppStore } from '@/lib/services/redux'
import { Provider } from 'react-redux'
import { makeStore } from '@/lib/services/redux'
import { useRef } from 'react'

export const ReduxStoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>()

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
