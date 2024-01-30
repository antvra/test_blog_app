'use client'

import queryClientConfiguration from '@/shared/services/queryClient'
import { useState } from 'react'
import {
  QueryClientProvider,
  QueryClient,
  QueryClientConfig,
} from 'react-query'

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () => new QueryClient(queryClientConfiguration as QueryClientConfig)
  )
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider
