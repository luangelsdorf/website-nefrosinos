import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function MainLayout({ children, content }) {
  return (
    <>
      <Header />

      <div id="LAYOUT__MAIN">
        {
          children
        }
      </div>

      <Footer content={content} contact />
    </>
  )
}
