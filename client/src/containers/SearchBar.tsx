import { ChangeEvent, useEffect, useState } from "react"
import { Icon } from "../components/Icon"
import "/src/styles/components/searchbar.scss"
import { Link, useNavigate, useSearchParams } from "react-router-dom"

const SearchBar = () => {
  const navigate = useNavigate()
  
  const [ params ] = useSearchParams()
  const querySearchParam = params.get('query')

  const [query, setQuery] = useState<string>(querySearchParam || '')

  const handleSubmit = () => {
    navigate(`items?q=${query}`)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    setQuery(querySearchParam || '')
  }, [querySearchParam])

  return (
    <header className="topbar">
      <div className="topbar-content">
        <Link className="topbar-logo" to="/">
          <Icon name="logo_meli" width="50px" alt="main logo"/>
        </Link>
        <form className="topbar-search" onSubmit={handleSubmit}>
          <input 
            className='topbar-search-input' 
            value={query}
            name="query"
            onChange={handleInputChange} 
            placeholder="Nunca dejes de buscar"
          />
          <button className="topbar-search-button" type="submit">
            <Icon name="search" width="20px"/>
          </button>
        </form>
      </div>
    </header>
  )
}

export default SearchBar