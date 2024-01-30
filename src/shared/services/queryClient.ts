import type { QueryClientConfig } from 'react-query'
import axiosInstance from './service'

const pathSeparator = '/'

const queryClientConfiguration = {
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }: { queryKey: string[] }) =>
        axiosInstance
          .get(queryKey.join(pathSeparator))
          .then(({ data }) => data),
    },
  },
}

export default queryClientConfiguration as QueryClientConfig
