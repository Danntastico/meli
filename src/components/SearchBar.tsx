import { Icon } from "./Icon"
import "/src/styles/components/searchbar.scss"

const SearchBar = () => {
  const handleSubmit = () => {
    console.log('Hello!')
  }
  return (
    <header className="topbar">
      <div className="topbar-content">
        <a className="topbar-logo" href="/">
          <Icon name="logo_meli" width="50px" alt="main logo"/>
        </a>
        <form className="topbar-search" onSubmit={handleSubmit}>
          <input className='topbar-search-input' value='' placeholder="Nunca dejes de buscar"/>
          <button className="topbar-search-button" type="submit">
            <Icon name="search" width="20px"/>
          </button>
        </form>
      </div>
    </header>
  )
}

export default SearchBar