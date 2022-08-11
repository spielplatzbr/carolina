import { NavLink } from 'react-router-dom'

const PAGES = [
  { id: 1, path: '/', label: 'home' },
  { id: 2, path: '/history', label: 'history' },
  { id: 3, path: '/settings', label: 'settings' }
]

const Navbar = () => {
  const activeClassName =
    '!border-r-2 !border-b-2 !ml-1 !mt-1 !border-opacity-80'

  const className = `bg-white border-gray-500 border-r-4 border-b-4 p-2 
    focus:border-r-0 focus:border-b-0 focus:ml-1 focus:mt-1
    active:border-r-0 active:border-b-0 active:ml-1 active:mt-1
    hover:border-r-0 hover:border-b-0 hover:ml-1 hover:mt-1`

  return (
    <div className="flex flex-wrap">
      {PAGES.map((item) => (
        <div className="m-2" key={item.id}>
          <NavLink
            to={item.path}
            className={({ isActive }) => {
              const classes = [className]
              if (isActive) classes.push(activeClassName)
              return classes.join(' ')
            }}
          >
            <span>{item.label}</span>
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default Navbar
