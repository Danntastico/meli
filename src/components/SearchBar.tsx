import "/src/styles/components/searchbar.scss"

const SearchBar = () => {
  const handleSubmit = () => {
    console.log('Hello!')
  }
  return (
    <header className="navbar">
      <a className="navbar-logo" href="/">
        <img src="src/assets/logo_meli.png" alt="main logo"/> {/*TODO*/}
      </a>
      <form className="navbar-search" onSubmit={handleSubmit}>
        <input className='navbar-search-input' value='' placeholder="Nunca dejes de buscar"/>
        <button className="navbar-search-button" type="submit">
          <img src='src/assets/search.png' alt="search" /> {/*TODO*/}
        </button>
      </form>
    </header>
  )
}

export default SearchBar