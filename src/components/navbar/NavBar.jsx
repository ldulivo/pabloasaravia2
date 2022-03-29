import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='NavBar'>
        <Link to={'/'} >
            <p>Home</p>
        </Link>

        <Link to={'/aboutme'} >
            <p>About Me</p>
        </Link>

        <Link to={'/landingpage'} >
            <p>Landing Page</p>
        </Link>
    </nav>
  )
}
