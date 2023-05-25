import { Layout } from './containers/Layout'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom';
import { ProductDetails } from './pages/ProductDetails'
import { SearchResults } from './pages/SearchResults'
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="results" element={<SearchResults />} />
      <Route path="item" element={<ProductDetails />} />
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
