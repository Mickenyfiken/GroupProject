import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { fetchMe, logOut, refreshAccessToken } from '../api/authApi'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'

export const useAuth = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
    retry: false,
    staleTime: Infinity,
  })
}

const TIMEOUT_MS = 120 * 1000
const WARNING_TIMEOUT_MS = 90 * 1000

export const useInactivityLogout = () => {
  const timer = useRef<number>(undefined)
  const navigate = useNavigate()

  const [warningShown, setWarningShown] = useState(false)
  const [countdown, setCountdown] = useState(TIMEOUT_MS - WARNING_TIMEOUT_MS / 1000)
  const warningTimer = useRef<number>(undefined)

  useEffect(() => {
    if (!warningShown) return

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [warningShown])

  useEffect(() => {
    const resetTimer = () => {
      clearTimeout(timer.current)

      clearTimeout(warningTimer.current)
      setWarningShown(false)
      setCountdown((TIMEOUT_MS - WARNING_TIMEOUT_MS) / 1000)

      warningTimer.current = setTimeout(() => {
        setWarningShown(true)
        setCountdown((TIMEOUT_MS - WARNING_TIMEOUT_MS) / 1000)
      }, WARNING_TIMEOUT_MS)

      timer.current = setTimeout(async () => {
        await logOut()
        navigate('/login')
      }, TIMEOUT_MS)
    }

    const bubbleEvents = ['keydown', 'click', 'mousedown', 'touchstart', 'wheel']
    const captureEvents = ['scroll']
    bubbleEvents.forEach((e) => window.addEventListener(e, resetTimer))
    captureEvents.forEach((e) => document.addEventListener(e, resetTimer, true))
    resetTimer()

    return () => {
      clearTimeout(timer.current)
      bubbleEvents.forEach((e) => window.removeEventListener(e, resetTimer))
      captureEvents.forEach((e) => document.removeEventListener(e, resetTimer, true))
    }
  }, [navigate])
  return { warningShown, countdown }
}

export const useTokenRefresh = () => {
  const lastRefresh = useRef<number>(0)
  const navigate = useNavigate()

  useEffect(() => {
    let refreshing = false
    const handleUserActivity = async () => {
      if (refreshing) return
      const now = Date.now()
      if (now - lastRefresh.current < 70_000) return
      refreshing = true
      try {
        await refreshAccessToken()
        lastRefresh.current = Date.now()
      } catch {
        await logOut()
        navigate('/login')
      } finally {
        refreshing = false
      }
    }

    const bubbleEvents = ['keydown', 'click', 'mousedown', 'touchstart', 'wheel']
    const captureEvents = ['scroll']
    bubbleEvents.forEach((e) => window.addEventListener(e, handleUserActivity))
    captureEvents.forEach((e) => document.addEventListener(e, handleUserActivity, true))

    return () => {
      bubbleEvents.forEach((e) => window.removeEventListener(e, handleUserActivity))
      captureEvents.forEach((e) => document.removeEventListener(e, handleUserActivity, true))
    }
  }, [navigate])
}

export const useLogout = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate: logoutMutation } = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      queryClient.clear()
      navigate('/login')
    },
  })

  return { logoutMutation }
}
