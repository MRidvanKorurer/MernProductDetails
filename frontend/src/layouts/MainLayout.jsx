import React from 'react'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'

const MainLayout = ({children}) => {
  return (
    <div>
        <Header/>
            {children}
        <Footer/>
    </div>
  )
}

export default MainLayout