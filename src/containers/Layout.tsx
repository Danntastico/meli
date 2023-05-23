import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

export const Layout:React.FC = () => {
  return (
    <>
      <SearchBar/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}
