import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function MainLayout({ children, content, contact }) {
  return (
    <>
      <Header />

      <>
        {
          children
        }
      </>

      <Footer content={content} contact={contact} />
    </>
  )
}
