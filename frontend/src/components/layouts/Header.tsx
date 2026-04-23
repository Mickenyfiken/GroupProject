import Button from '../ui/Button'
import { useLogout } from '../../hooks/authHooks'

const Header = () => {
  const { logoutMutation } = useLogout()

  return (
    <header className="sticky top-0 flex justify-end items-center p-2 gap-2">
      Header
      <Button variant="ghost" className="text-sm py-1 px-2" onClick={() => logoutMutation()}>
        Logga ut
      </Button>
    </header>
  )
}

export default Header
