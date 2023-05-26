import { Layout } from './containers/Layout'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { ProductDetails } from './pages/ProductDetails'
import { SearchResults } from './pages/SearchResults'
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="items" element={<SearchResults />}/>
      <Route path="items/:id" element={<ProductDetails />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
