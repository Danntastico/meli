import SearchBar from './components/SearchBar'
import { Layout } from './containers/Layout'
import { SearchResults } from './pages/SearchResults'

function App() {
  return (
    <>
      <SearchBar/>
      <Layout>
        <SearchResults/>
      </Layout>
    </>
  )
}

export default App
