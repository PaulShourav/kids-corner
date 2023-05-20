import React, { useEffect, useState } from 'react';
import Banner from './shared/Banner';
import ToyCard from './shared/ToyCard';

const Home = () => {
  const [tabChange,setTabChange]=useState('avengers')
  const [toys,setToys]=useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/toys/${tabChange}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setToys(data);
    })
   
  },[tabChange])
  console.log(toys);
    return (
        <>
        
        
      <section >
        <Banner></Banner>
      </section>
      <section className='my-container mt-32 mb-48'>
        <p className='font-bold text-3xl md:text-4xl text-center mb-8'>Shop by Category</p>
        <div className='flex justify-center'>
          <div className={`tab ${tabChange=='avengers'?"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ":""}`} onClick={()=>setTabChange('avengers')}>
          Avengers
          </div>
          <div className={`tab ${tabChange=='transformers'?"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ":""}`} onClick={()=>setTabChange('transformers')}>
          Transformers
          </div>
          <div className={`tab ${tabChange=='star wars'?"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ":""}`}  onClick={()=>setTabChange('star wars')}>
          Star wars
          </div>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
              toys?.map(toy=><ToyCard key={toy._id} toy={toy}></ToyCard>)
            }
        </div>
      </section>
        
        </>
    );
};

export default Home;