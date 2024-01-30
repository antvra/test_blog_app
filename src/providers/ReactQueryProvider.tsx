'use client'

import queryClientConfiguration from '@/shared/services/queryClient'
import { useState } from 'react'
import type { ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () => new QueryClient(queryClientConfiguration)
  )
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider
