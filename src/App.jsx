import React from 'react';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import TopPage from './pages/TopPage';
import DetailPage from './pages/DetailPage';

export default function App() {
  
  return (
    <BrowserRouter>
      <div>
        <header className="bg-black text-white">
          <nav className="flex justify-between items-center p-4 py-6">
            <a href="/">BLOG</a>
            <a href="/contact">お問い合わせ</a>
          </nav>
        </header>
        
        <main className="max-w-2xl mx-auto px-6 pt-20 pb-32">
          <Routes>
            <Route path='/' element={<TopPage />} />
            <Route path='post/:id' element={<DetailPage />} />
          </Routes>
          
        </main>
      </div>       
    </BrowserRouter>
  );
}