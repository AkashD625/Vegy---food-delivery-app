import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header';
import ExploreMenu from '../../components/Navbar/ExploreMenu/ExploreMenu';

function Home() {


  const [category,setCategory] = useState("All");
  return (
   <>
   <Header/>
   <ExploreMenu category={category} setCategory={setCategory}/>
   </>
  )
}

export default Home;
