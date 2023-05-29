import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './containers/Layout';
import Home from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { SearchResults } from './pages/SearchResults';

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
