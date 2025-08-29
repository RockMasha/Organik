import { useCallback, useState } from 'react'
import { showErrorToast } from '../helpers/toasts/showErrorToast'

type StartLoadingFn = <R>(
  callbackFn: () => Promise<R>
) => Promise<R | undefined>

function useLoading(startValue = false): [boolean, StartLoadingFn] {
  const [loading, setLoading] = useState<boolean>(startValue)

  const startLoading: StartLoadingFn = useCallback(async (callbackFn) => {
    try {
      setLoading(true)
      const result = await callbackFn()
      return result
    } catch {
      showErrorToast()
    } finally {
      setLoading(false)
    }
  }, [])

  return [loading, startLoading] as const
}

export default useLoading
