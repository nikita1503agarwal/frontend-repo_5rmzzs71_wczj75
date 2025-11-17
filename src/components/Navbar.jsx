import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50'}`

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="GBU" className="h-8 w-8 object-contain" onError={(e)=>{e.currentTarget.style.display='none'}} />
            <span className="font-bold text-lg text-blue-700">GBU Sports</span>
          </Link>
          <nav className="flex items-center gap-2">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/gym" className={navClass}>Gym</NavLink>
            <NavLink to="/cricket" className={navClass}>Cricket</NavLink>
            <NavLink to="/indoor" className={navClass}>Indoor</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
