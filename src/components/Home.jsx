import React from 'react'
import Navbar from './Navbar'
import Red from './Labels/Red'
import Purple from './Labels/Purple'
import Green from './Labels/Green'
import Orange from './Labels/Orange'

const Home = () => {
  return (
    <div className="max-w-7xl h-screen mx-auto">
      <Navbar />
      <div className='flex'>
        <div className='w-3/4 bg-red-300'>
          main
        </div>


        <div className='w-[30%] bg-green-200 sidenav mt-6 p-6'>
          <div className='border-b-2'>
            <div><label htmlFor="search" className="font-semibold text-2xl">Search</label></div>
            <div className="mt-2 mb-4 "><input type="text" id="search" name="search" placeholder="What do you want to learn..." className="p-2 rounded-md text-sm bg-lightblue w-full inputborder" required /></div>
          </div>

          <div className='mt-5'>
            <div className='font-semibold text-2xl'>Categories</div>
            <div className='flex flex-col justify-evenly h-48'>
              <Purple />
              <Orange />
              <Green />
              <Red />
            </div>
          </div>

          <div>
            <div className='card p-3 rounded-lg'>
              <div>image</div>
              <div>
                <div className='font-semibold line-clamp-2'>Trends in Higher Education that affects students like you</div>
                <div className='flex w-full justify-between mt-4'>
                  <div className='bg-grey w-24 p-1 rounded-lg flex justify-center items-center'>Jan 1,2020</div>
                  <div><Red /></div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>

  )
}

export default Home