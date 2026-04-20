import { useQuery } from '@tanstack/react-query'
import { fetchMe, logOut } from '../api/authApi'
import { useEffect, useRef } from 'react'
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

export const useInactivityLogout = () => {
  const timer = useRef<number>(undefined)
  const navigate = useNavigate()

  useEffect(() => {
    const resetTimer = () => {
      clearTimeout(timer.current)
      timer.current = setTimeout(async () => {
        await logOut()
        navigate('/login')
      }, TIMEOUT_MS)
    }

    const events = ['mousemove', 'keydown', 'click', 'scroll']
    events.forEach((e) => window.addEventListener(e, resetTimer))
    resetTimer()

    return () => {
      clearTimeout(timer.current)
      events.forEach((e) => window.removeEventListener(e, resetTimer))
    }
  }, [navigate])
}
