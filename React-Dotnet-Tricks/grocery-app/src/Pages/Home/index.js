import React from 'react'
import CategoryList from '../../Components/CategoryList'
import Header from '../../Components/Header'
import Navbar from '../../Components/Navbar'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <CategoryList />
        </div>
    )
}
