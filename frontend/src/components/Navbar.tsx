import { NavLink } from 'react-router'

const links = [
  { name: 'Nyheter', href: '/nyheter' },
  { name: 'Kampanjer', href: '/kampanjer' },
  { name: 'Butiksservice', href: '/butiksservice' },
  { name: 'Ordercentral', href: '/ordercentral' },
  { name: 'Leverantörer', href: '/leverantorer' },
  { name: 'Kontakter', href: '/kontakter' },
]

const Navbar = () => {
  return (
    <aside className="w-52 h-screen bg-slate-800 text-slate-200 flex flex-col shrink-0 shadow-xl">
      <div className="px-6 py-8 border-b border-slate-600">
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          Sport<span className="text-orange-400">son</span>
        </h1>
      </div>

      <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive ? 'bg-orange-400 text-white' : 'hover:bg-orange-400 hover:text-white'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <div className="px-3 py-4 border-t border-slate-600">
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-center ${
              isActive
                ? 'bg-orange-400 text-white'
                : 'bg-slate-700 hover:bg-orange-400 hover:text-white'
            }`
          }
        >
          Support
        </NavLink>
      </div>
    </aside>
  )
}

export default Navbar
