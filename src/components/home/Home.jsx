import React, { useEffect, useState } from 'react'

import Header from '../common/Header'
import Banner from './Banner'
import Featured from './Featured'
import Footer from '../common/Footer'

const Home = () => {

  return (
    <>
      <Header />
      <Banner />
      <Featured />
      <Footer />
    </>

  )
}

export default Home