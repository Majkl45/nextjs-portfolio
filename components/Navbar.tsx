import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {
  interface NavItem {
    name: string,
    href: string,
    scroll: boolean
  }

  const [nav, setNav] = useState<boolean>(false)

  const handleOpen = () => {
    setNav(!nav)
  }

  const NAV_ITEMS: Array<NavItem> = [
    {
      name: "Home",
      href: "/",
      scroll: true
    },
    {
      name: "About Me",
      href: "#about",
      scroll: false
    },
    {
      name: "Skills",
      href: "#skills",
      scroll: false
    },
    {
      name: "Projects",
      href: "#projects",
      scroll: false
    },
    {
      name: "Contact",
      href: "#contact",
      scroll: false
    },
  ]
  
  return (
    <header className="md:fixed w-full top-0 h-16 p-4 bg-transparent backdrop-filter backdrop-blur-lg z-50">
      <nav className="flex items-center justify-between md:justify-around">
        <div className="mobile-content">
          <a href={'/'}>
            <p className='text-primary text-xl font-semibold'><span className="text-green">Michael Rohm</span></p>
          </a>
        </div>
        <ul className="md:flex gap-5 justify-center items-center hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link href={item.href} scroll={item.scroll} className='group text-xl font-semibold text-primary cursor-pointer transition-all duration-300 ease-in-out'>
                <span className="nav-hover">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="cursor-pointer text-primary md:hidden z-10 hover:text-green hover:scale-125" onClick={handleOpen}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && 
          (
            <ul className="md:hidden flex flex-col gap-5 justify-center items-center absolute top-0 left-0 w-full h-screen bg-background-img">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link onClick={handleOpen} href={item.href} scroll={item.scroll} className='group text-4xl font-semibold text-primary cursor-pointer transition-all duration-300 ease-in-out'>
                    <span className="nav-hover">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )
        }
      </nav>
    </header>
  );
}
 
export default Navbar;