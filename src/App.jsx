import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AgriLandingPage from './AgriLandingPage.jsx'
import Blog from './components/Blog/Blog.jsx'
import BlogPost from './components/Blog/BlogPost.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AgriLandingPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}
