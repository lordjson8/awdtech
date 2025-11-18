import Header from '@/components/shared/Header'
import Hero from '@/components/shared/Hero'
import React from 'react'

export default function Layout({children} : {children: React.ReactNode}) {
  return (
    <>
       <Header />
       {/* <Hero />  */}
       {children}
    </>
  )
}
