import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{margin: 'auto', width: '100%'}}>
      Home
      <Link to='/results'>Results</Link>
      <Link to='/item'>Item</Link>
    </div>
  )
}

export default Home