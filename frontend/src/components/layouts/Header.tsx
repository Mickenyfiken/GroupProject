import Button from '../ui/Button'
import { useLogout } from '../../hooks/authHooks'

const Header = () => {
  const { logoutMutation } = useLogout()

  return (
    <header className="sticky top-0 ">
      <div className="flex items-center justify-end gap-2 p-2">
        <Button variant="ghost" className="px-2 py-1 text-sm" onClick={() => logoutMutation()}>
          Logga ut
        </Button>
      </div>
    </header>
  )
}

export default Header
