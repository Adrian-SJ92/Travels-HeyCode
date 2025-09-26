import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserNavbar } from '../components/Navbars/UserNavbar'

export const UserLayouts = () => {
  return (
    <>
    <header>
      <UserNavbar/>
    </header>
    <main>

    <Outlet />
    </main>
    <footer>
      
    </footer>
    </>
  )
}
