import { Link } from 'react-router-dom'

export default function AboutMe() {
  return (
    <div>
        <h1>AboutMe</h1>
        <Link to={'/'}>
            <p>Back to Home</p>
        </Link>
    </div>
  )
}
