import React, { useEffect, useState } from 'react';
import Banner from './shared/Banner';
import ToyCard from './shared/ToyCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const [tabChange, setTabChange] = useState('avengers')
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`https://kids-corner-server.vercel.app/toys/${tabChange}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setToys(data);
      })

  }, [tabChange])
  console.log(toys);
  return (
    <>
      <section >
        <Banner></Banner>
      </section>
      <section className='my-container my-28'>
        <div className='flex flex-col md:flex-row gap-7'>

          <div className='basis-2/3  h-96 flex flex-col md:flex-row justify-between items-center bg-green-300 rounded-2xl  shadow-inner drop-shadow-2xl'>
            <div className='basis-2/5 md:ps-6 p-6'>
              <p className='font-bold text-2xl md:text-3xl'>Popular marvel Toys</p>
              <p className='my-2'>Interesting Features Is Rich And Colorful, Each Button To Bring A Surprise To The Baby Introduction To Give Your Child Learn In Advance.</p>
              <button className='btn btn-sm btn-secondary'>Shop <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='ms-2' beat /></button>
            </div>
            <div className='flex items-center h-full'>
              <img src="images/gallery1.png" alt="" className='w-96 h-64' />
            </div>
          </div>
          <div className='basis-2/6'>
            <div className='flex flex-col gap-8'>
            <div className='h-44 flex justify-between items-center bg-green-300 rounded-2xl shadow-inner drop-shadow-2xl'>
              <img src="images/avengers-3.png" alt="" className='w-64 h-48' />
              <div className='me-3'>
              <p className='font-bold text-xl mb-1'>UNIQUE DESIGN</p>
              <button className='btn btn-sm btn-secondary'>Shop <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='ms-2' beat /></button>
              </div>
              
            </div>
            <div className='h-44 flex justify-between items-center bg-violet-300 rounded-2xl shadow-inner drop-shadow-2xl'>
              <img src="images/avengers-2.png" alt=""  className='w-64 h-52'/>
              <div className='me-3'>
              <p className='font-bold text-xl mb-1'>Spider Men</p>
              <button className='btn btn-sm btn-secondary'>Shop <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='ms-2' beat /></button>
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </section>
      <section className='my-container mt-32 mb-48'>
        <p className='font-bold text-3xl md:text-4xl text-center mb-8'>Shop by Category</p>
        <div className='flex justify-center '>
          <div className={`tab-item  ${tabChange == 'avengers' ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 " : ""}`} onClick={() => setTabChange('avengers')}>
            Avengers
          </div>
          <div className={`tab-item ${tabChange == 'transformers' ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 " : ""}`} onClick={() => setTabChange('transformers')}>
            Transformers
          </div>
          <div className={`tab-item border-e-2 border-indigo-500 ${tabChange == 'star wars' ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 " : ""}`} onClick={() => setTabChange('star wars')}>
            Star wars
          </div>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            toys?.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
          }
        </div>
      </section>
      <section className='my-32 my-container'>
        <div className='grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

          <div className='text-center p-6 border-2 rounded-md border-green-900'>
            <FontAwesomeIcon icon="fa-solid fa-car" beatFade className='mb-6 text-6xl text-green-700' />
            
            <p className='text-2xl font-bold mb-4'>FREE SHIPPING </p>
            <p>On All Order.</p>
          </div>
          <div className='text-center p-6 border-2 rounded-md border-green-900'>
            <FontAwesomeIcon icon="fa-solid fa-bicycle" beatFade className='mb-6 text-6xl text-green-700' />
            <p className='text-2xl font-bold mb-4'>FREE RETURN</p>
            <p>Money Back Guarantee
            </p>
          </div>
          <div className='text-center p-6 border-2 rounded-md border-green-900'>
            <FontAwesomeIcon icon="fa-regular fa-clock" beatFade className='mb-6 text-6xl text-green-700' />
            <p className='text-2xl font-bold mb-4'>24/7 SUPPORTS </p>
            <p>We Support Online 24 Hrs</p>
          </div>
          <div className='text-center p-6 border-2 rounded-md border-green-900'>
            <FontAwesomeIcon icon="fa-solid fa-bag-shopping" beatFade className='mb-6 text-6xl text-green-700' />
            
            <p className='text-2xl font-bold mb-4'>RECIEVE GIFT CARD</p>
            <p>All Over Oder $50</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;