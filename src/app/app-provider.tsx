import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@src/shared/api/query-client'

import { AppRouter } from './providers/router'

export const AppProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  )
}
