import { useSearchParams } from 'react-router-dom'
import PacmanLoader from "react-spinners/PacmanLoader"
import { getItemsBySearchQuery } from 'src/api'
import { Breadcrumb } from 'src/components/Breadcrumb'
import { SearchResultItem } from 'src/containers/SearchResultItem'
import { useFetch } from 'src/hooks/useFetch'
import { GetItemsBySearchQueryResponse } from 'src/types/api'
import { FetchFn } from 'src/types/helpers'
import '/src/styles/pages/search-results.scss'

export const SearchResults = () => {
  const [ params ] = useSearchParams()
  const query = params.get('query')
  const { data, loading } = useFetch<GetItemsBySearchQueryResponse>(getItemsBySearchQuery as FetchFn, query)
  
  const breadcrumbs = data?.avaible_category_filter ?? data?.categories

  if(loading) {
    return  <>
      <PacmanLoader color='#FFE600' style={{top: '50%', left: '50%', position: 'absolute'}}/>
    </>
  }
  
  return (
    <>      
      {!loading && (
        <Breadcrumb>
          {
            breadcrumbs?.slice(0, 3).reverse().map((b, ix, arr) => (
              <Breadcrumb.Item key={b} isActive={ix === arr.length - 1}>
                {b}
              </Breadcrumb.Item>
            ))
          }
        </Breadcrumb>
      )}
      <div className='search-results-container'>
        {data && data.items.slice(0, 10).map(item => (
          <SearchResultItem
            imageUrl={item.picture}
            isShipped={item.free_shipping}
            location={item.location}
            name={item.title}
            price={item.price.amount}
            currency={item.price.currency}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
    </>
  )
}
