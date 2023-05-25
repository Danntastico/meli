import { SearchResultItem } from '../components/SearchResultItem'
import { Breadcrumb } from '../components/Breadcrumb'
import '/src/styles/pages/search-results.scss'

export const SearchResults = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item> Electrónica, Audio y Video </Breadcrumb.Item>
        <Breadcrumb.Item> iPod </Breadcrumb.Item>
        <Breadcrumb.Item> Reproductores </Breadcrumb.Item>
        <Breadcrumb.Item> iPod touch </Breadcrumb.Item>
        <Breadcrumb.Item isActive> 32GB </Breadcrumb.Item>
      </Breadcrumb>
      <div className='search-results-container'>
        <SearchResultItem 
          imageUrl='https://http2.mlstatic.com/D_NQ_NP_881317-MLA45730875178_042021-V.webp'
          isShipped
          location='Bogotá'
          price='$1980'
          name='Apple ipod TOuch 5g 16gb Negro Igual A Nuevo Completo Unico!'
        />
        <SearchResultItem 
          imageUrl='https://http2.mlstatic.com/D_NQ_NP_881317-MLA45730875178_042021-V.webp'
          isShipped
          location='Bogotá'
          price='$1980'
          name='Apple ipod TOuch 5g 16gb Negro Igual A Nuevo Completo Unico!'
        />
        <SearchResultItem 
          imageUrl='https://http2.mlstatic.com/D_NQ_NP_881317-MLA45730875178_042021-V.webp'
          isShipped
          location='Bogotá'
          price='$1980'
          name='Apple ipod TOuch 5g 16gb Negro Igual A Nuevo Completo Unico!'
        />
        <SearchResultItem
          imageUrl='https://http2.mlstatic.com/D_NQ_NP_881317-MLA45730875178_042021-V.webp'
          isShipped
          location='Bogotá'
          price='$1980'
          name='Apple ipod TOuch 5g 16gb Negro Igual A Nuevo Completo Unico!'
        />
      </div>
    </>
  )
}
