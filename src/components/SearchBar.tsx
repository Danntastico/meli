import { Icon } from "./Icon"
import "/src/styles/components/searchbar.scss"

const SearchBar = () => {
  const handleSubmit = () => {
    console.log('Hello!')
  }
  return (
    <header className="navbar">
      <a className="navbar-logo" href="/">
        <Icon name="logo_meli" width="50px" alt="main logo"/>
      </a>
      <form className="navbar-search" onSubmit={handleSubmit}>
        <input className='navbar-search-input' value='' placeholder="Nunca dejes de buscar"/>
        <button className="navbar-search-button" type="submit">
          <Icon name="search" width="20px"/>
        </button>
      </form>
    </header>
  )
}

export default SearchBar