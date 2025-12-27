import { keepPreviousData, QueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

const RETRY_COUNT = 2
const RETRY_DELAY = 500

const checkRetry = (retryIndex: number, error: unknown) =>
  retryIndex < RETRY_COUNT && (error as AxiosError).response?.status === 401

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: checkRetry,
      retryDelay: RETRY_DELAY,
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      placeholderData: keepPreviousData,
    },
    mutations: {
      retry: checkRetry,
      retryDelay: RETRY_DELAY,
    },
  },
})
