import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { logOut } from '../../api/authApi'
import { useInactivityLogout } from '../../hooks/authHooks'
import Button from '../ui/Button'

const Header = () => {
  const { warningShown, countdown } = useInactivityLogout()
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate: logoutMutation } = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      queryClient.clear()
      navigate('/login')
    },
  })

  return (
    <header className="sticky top-0 flex items-center justify-end gap-2 p-2">
      {warningShown && (
        <p className="text-sm text-red-500">
          Due to inactivity you are being logged out in {countdown} sec
        </p>
      )}
      <Button variant="ghost" className="px-2 py-1 text-sm" onClick={() => logoutMutation()}>
        Logga ut
      </Button>
    </header>
  )
}

export default Header
