import { SearchResultItem } from '../containers/SearchResultItem'
import { Breadcrumb } from '../components/Breadcrumb'
import '/src/styles/pages/search-results.scss'
import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { getItemsBySearchQuery } from '../api'
import { GetItemBySearchQueryResponse } from '../types/api'
import { FetchFn } from '../types/helpers'

export const SearchResults = () => {
  const [ params ] = useSearchParams()
  const query = params.get('query')
  const { data, loading } = useFetch<GetItemBySearchQueryResponse>(getItemsBySearchQuery as FetchFn, query)
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
