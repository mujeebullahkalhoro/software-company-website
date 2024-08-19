import React from 'react'
import Header from '../components/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import './layout.css'
export default function layout() {
  return (
    <div className="layout">
    <Header />
    <main className="content">
      <Outlet />
    </main>
    <Footer />
  </div>
  )
}
