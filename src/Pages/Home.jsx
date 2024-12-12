import React from 'react'
import Header from '../Components/Header'
import Content from '../Components/Content'
import gdgLogo from './../assets/gdgbg.svg';
import RecentWinner from '../Components/RecentWinner';
import GoogleCloudEvent from '@/Components/GoogleCloudEvent';
import Leads from '@/Components/Leads';
import About from '@/Components/About';
import Footer from '../Components/Footer';
import { Separator } from "@/components/ui/separator"
import Sponser from '../Components/sponsers';



function Home() {
  return (
    <div>
      <div className='bg-[url({gdglogo})]'>
        {/* Header navbar */}
        <Header />
        {/* content Heading */}
        <Content />
        {/* Recent Winner */}
        <RecentWinner/>
        <Separator className='border-4'/>
        {/* cloud events */}
        <GoogleCloudEvent/>
        {/* lead and faculty advicer */}
        <Leads/>
        {/* about */}
        <About/>
        <Separator/>
        {/* Sponsers */}
        <Sponser/>
        {/* Footer */}
        
        <Footer/>
      </div>
    </div>
  )
}

export default Home