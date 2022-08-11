import './main.css'

import Home from '@/pages/home'
import History from '@/pages/history'
import Settings from '@/pages/settings'
import Layout from '@/pages/layout'
import Navbar from '@/components/navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function app() {
  return (
    <Router>
      <Layout>
        <div className="flex justify-center p-8">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </Layout>
    </Router>
  )
}

export default app
