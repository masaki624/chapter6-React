//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import React from 'react';
import posts from './data/posts';

export default function App() {
  
  return (
    <>
      <div>
        <header className="bg-black text-white">
          <nav className="flex justify-between items-center p-4 py-6">
            <a href="/">BLOG</a>
            <a href="/contact">お問い合わせ</a>
          </nav>
        </header>
        
        <main className="max-w-2xl mx-auto px-6 pt-20 pb-32">
          <ul className="space-y-16">
            {posts.map((post) => (
              <li key={post.id}>
                <article className="bg-white border border-gray-200 p-12 shadow-sm transition-all hover:shadow-md">
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-[10px] text-gray-400 tracking-widest font-mono uppercase">
                      {post.createdAt.slice(0, 10).replace(/-/g, '/')}
                    </span>
                    <div className="flex gap-2">
                      {post.categories.map((cat) => (
                        <span key={cat} className="text-[9px] bg-black text-white px-2 py-0.5 tracking-tighter uppercase">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='text-center'>
                    <h2 className='text-2xl font-semibold mb-6 tracking-tight'>
                      <a href={`/post/${post.id}`} className='hover:text-gray-400 transitio'>
                        {post.title}
                      </a>
                    </h2>

                    <hr className="w-8 mx-auto border-gray-200 mb-8" />
                    <div className="text-gray-500 text-sm leading-loose line-clamp-2 text-left" dangerouslySetInnerHTML={{ __html: post.content }}>

                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </main>
      </div>
       
    </>
  )
}