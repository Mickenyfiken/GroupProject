import Button from '../ui/Button'
import { useLogout, useInactivityLogout } from '../../hooks/authHooks'

const Header = () => {
  const { warningShown, countdown } = useInactivityLogout()
  const { logoutMutation } = useLogout()

  return (
    <header className="sticky top-0 flex justify-end items-center p-2 gap-2">
      Header
      {warningShown && (
        <p className="text-sm text-red-500">
          Due to inactivity you are being logged out in {countdown} sec
        </p>
      )}
      <Button variant="ghost" className="text-sm py-1 px-2" onClick={() => logoutMutation()}>
        Logga ut
      </Button>
    </header>
  )
}

export default Header
