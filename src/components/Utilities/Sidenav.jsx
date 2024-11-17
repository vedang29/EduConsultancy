import React from 'react'
import Red from '../Labels/Red'
import Purple from '../Labels/Purple'
import Orange from '../Labels/Orange'
import s1 from '../../assets/s1image.png'
import s2 from '../../assets/s2image.png'
import s3 from '../../assets/s3image.png'
import Green from '../Labels/Green'


const Sidenav = () => {
  return (
    <div className='w-[30%] h-full sidenav mt-6 p-6 transform scale-[0.95] rounded-2xl'>
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

    <div className='flex flex-col gap-4 mt-10'>
      <div className='card rounded-xl flex justify-between items-center'>
        <div className='bg-black w-24 h-24 rounded-xl'>
          <img src={s1} alt="Description" className="w-full h-full object-cover" />
        </div>
        <div className='w-64 mx-1'>
          <div className='font-semibold line-clamp-2 text-sm ml-4'>Trends in Higher Education that affects students like you</div>
          <div className='flex w-full justify-around mt-4'>
            <div className='bg-grey px-4 py-1 text-sm rounded-sm flex justify-center items-center font-semibold'>Jan 1,2020</div>
            <div><Red /></div>
          </div>
        </div>
      </div>

      <div className='card rounded-xl flex justify-between items-center'>
        <div className='bg-black w-24 h-24 rounded-xl'>
          <img src={s2} alt="Description" className="w-full h-full object-cover" />
        </div>
        <div className='w-64 mx-1'>
          <div className='font-semibold line-clamp-2 text-sm ml-4'>Trends in Higher Education that affects students like you</div>
          <div className='flex w-full justify-around mt-4'>
            <div className='bg-grey px-4 py-1 text-sm rounded-sm flex justify-center items-center font-semibold'>Jan 1,2020</div>
            <div><Green /></div>
          </div>
        </div>
      </div>

      <div className='card rounded-xl flex justify-between items-center'>
        <div className='bg-black w-24 h-24 rounded-xl'>
          <img src={s3} alt="Description" className="w-full h-full object-cover" />
        </div>
        <div className='w-64 mx-1'>
          <div className='font-semibold line-clamp-2 text-sm ml-4'>Trends in Higher Education that affects students like you</div>
          <div className='flex w-full justify-around mt-4'>
            <div className='bg-grey px-4 py-1 text-sm rounded-sm flex justify-center items-center font-semibold'>Jan 1,2020</div>
            <div><Purple /></div>
          </div>
        </div>
      </div>
    </div>


  </div>
  )
}

export default Sidenav