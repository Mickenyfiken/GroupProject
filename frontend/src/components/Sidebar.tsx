import { useState } from 'react'
import { NavLink } from 'react-router'
import sportsonLogo from '../assets/sportson-logo.svg'
import clsx from 'clsx'

const stores = ['Sportson Göteborg', 'Sportson Stockholm', 'Sportson Malmö', 'Sportson Uppsala']

const links = [
  {
    name: 'Nyheter',
    href: '/nyheter',
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 2v6h6" />
      </svg>
    ),
  },
  {
    name: 'Kampanjer',
    href: '/kampanjer',
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
    ),
  },
  {
    name: 'Butiksservice',
    href: '/butiksservice',
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    name: 'Hantera Order',
    href: '/ordercentral',
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    name: 'Leverantörer',
    href: '/leverantorer',
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    name: 'Kontakter',
    href: '/kontakter',
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
]

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [storeOpen, setStoreOpen] = useState(false)

  return (
    <aside
      className={clsx(
        'bg-gray-900 min-w-[60px]  row-span-2 sticky top-0 h-screen text-white transition-all duration-300',
        isOpen && 'w-56',
      )}
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
    >
      <div className={clsx(!isOpen && 'w-0', 'flex-col shrink-0  shadow-xl', !isOpen && 'hidden')}>
        <div
          className={clsx('px-4 py-4', isOpen && 'border-b border-gray-700', !isOpen && 'hidden')}
        >
          <img src={sportsonLogo} alt="Sportson" className="w-auto h-8" />
        </div>

        <nav className="flex flex-col flex-1 gap-1 px-3 py-4 overflow-y-auto">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive ? 'bg-surface-yellow text-gray-900' : 'text-white hover:bg-gray-700'
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div
          className={clsx(
            'px-3 pt-3 pb-3',
            isOpen && 'border-t border-gray-700',
            !isOpen && 'hidden',
          )}
        >
          <button
            onClick={() => setStoreOpen((prev) => !prev)}
            className="flex items-center justify-between w-full px-3 py-2 text-sm font-bold text-gray-300 transition-colors rounded-lg hover:bg-gray-700"
          >
            <span className="whitespace-nowrap">MIN BUTIK</span>
            <svg
              className={`w-4 h-4 transition-transform ${storeOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {storeOpen && (
            <ul className="mt-1 ml-2 flex flex-col gap-0.5">
              {stores.map((store) => (
                <li key={store}>
                  <button className="w-full text-left px-3 py-1.5 rounded text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors whitespace-nowrap">
                    {store}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={clsx('px-3 pb-4', !isOpen && 'hidden')}>
          <NavLink
            to="/support"
            className="block px-4 py-2 text-sm font-bold text-center text-gray-900 transition-all rounded-lg bg-surface-yellow hover:brightness-110 whitespace-nowrap"
          >
            HK-HJÄLP
          </NavLink>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
