import React from 'react'
// import Navbar from './Navbar'
import Red from './Labels/Red'
import Purple from './Labels/Purple'
import Green from './Labels/Green'
import Orange from './Labels/Orange'
import s1 from '../assets/s1image.png'
import s2 from '../assets/s2image.png'
import s3 from '../assets/s3image.png'
import s4 from '../assets/s4image.png'
import m1 from '../assets/m1.png'
import m2 from '../assets/m2.png'
import m3 from '../assets/m3.png'
import m4 from '../assets/m4.png'
import m5 from '../assets/m5.png'
import m6 from '../assets/m6.png'
import star from '../assets/star.png'
import Nav from './Nav'

const Home = () => {
  return (
    <div className="max-w-7xl h-screen mx-auto">
      <Nav />
      <div className='flex'>
        <div className='w-3/4'>
          <div className='font-semibold text-2xl mt-10'>
            Products
          </div>

          <div className="flex flex-wrap gap-6 mt-6">
        {/* Card 1 */}
        <div className="pcard w-full sm:w-[270px] flex flex-col gap-2 rounded-2xl">
          <div>
            <img src={m1} alt="Description" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="flex justify-between items-center px-4 mt-4">
            <Green />
            <div className="font-bold text-lg text-orange">$57</div>
          </div>
          <div className="font-semibold line-clamp-2 text-sm px-4">
            Machine Learning A-Z™: Hands-On Python & R In Data...
          </div>
          <div className="line"></div>
          <div className="flex justify-between items-center px-4 mb-3">
            <div className="flex justify-center items-center gap-1">
              <img src={star} alt="Description" className="w-4 h-4 rounded-xl" />
              <div className="font-semibold">5.0</div>
            </div>
            <div className="flex justify-center items-center gap-1">
              <div className="font-semibold">267.5K</div>
              <div>Students</div>
            </div>
          </div>
        </div>


        <div className="pcard w-full sm:w-[270px] flex flex-col gap-2 rounded-2xl">
          <div>
            <img src={m2} alt="Description" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="flex justify-between items-center px-4 mt-4">
            <Green />
            <div className="font-bold text-lg text-orange">$57</div>
          </div>
          <div className="font-semibold line-clamp-2 text-sm px-4">
            Machine Learning A-Z™: Hands-On Python & R In Data...
          </div>
          <div className="line"></div>
          <div className="flex justify-between items-center px-4 mb-3">
            <div className="flex justify-center items-center gap-1">
              <img src={star} alt="Description" className="w-4 h-4 rounded-xl" />
              <div className="font-semibold">5.0</div>
            </div>
            <div className="flex justify-center items-center gap-1">
              <div className="font-semibold">267.5K</div>
              <div>Students</div>
            </div>
          </div>
        </div>


        <div className="pcard w-full sm:w-[270px] flex flex-col gap-2 rounded-2xl">
          <div>
            <img src={m3} alt="Description" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="flex justify-between items-center px-4 mt-4">
            <Green />
            <div className="font-bold text-lg text-orange">$57</div>
          </div>
          <div className="font-semibold line-clamp-2 text-sm px-4">
            Machine Learning A-Z™: Hands-On Python & R In Data...
          </div>
          <div className="line"></div>
          <div className="flex justify-between items-center px-4 mb-3">
            <div className="flex justify-center items-center gap-1">
              <img src={star} alt="Description" className="w-4 h-4 rounded-xl" />
              <div className="font-semibold">5.0</div>
            </div>
            <div className="flex justify-center items-center gap-1">
              <div className="font-semibold">267.5K</div>
              <div>Students</div>
            </div>
          </div>
        </div>

         {/* Card 1 */}
         <div className="pcard w-full sm:w-[270px] flex flex-col gap-2 rounded-2xl">
          <div>
            <img src={m4} alt="Description" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="flex justify-between items-center px-4 mt-4">
            <Green />
            <div className="font-bold text-lg text-orange">$57</div>
          </div>
          <div className="font-semibold line-clamp-2 text-sm px-4">
            Machine Learning A-Z™: Hands-On Python & R In Data...
          </div>
          <div className="line"></div>
          <div className="flex justify-between items-center px-4 mb-3">
            <div className="flex justify-center items-center gap-1">
              <img src={star} alt="Description" className="w-4 h-4 rounded-xl" />
              <div className="font-semibold">5.0</div>
            </div>
            <div className="flex justify-center items-center gap-1">
              <div className="font-semibold">267.5K</div>
              <div>Students</div>
            </div>
          </div>
        </div>


        <div className="pcard w-full sm:w-[270px] flex flex-col gap-2 rounded-2xl">
          <div>
            <img src={m5} alt="Description" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="flex justify-between items-center px-4 mt-4">
            <Green />
            <div className="font-bold text-lg text-orange">$57</div>
          </div>
          <div className="font-semibold line-clamp-2 text-sm px-4">
            Machine Learning A-Z™: Hands-On Python & R In Data...
          </div>
          <div className="line"></div>
          <div className="flex justify-between items-center px-4 mb-3">
            <div className="flex justify-center items-center gap-1">
              <img src={star} alt="Description" className="w-4 h-4 rounded-xl" />
              <div className="font-semibold">5.0</div>
            </div>
            <div className="flex justify-center items-center gap-1">
              <div className="font-semibold">267.5K</div>
              <div>Students</div>
            </div>
          </div>
        </div>


        <div className="pcard w-full sm:w-[270px] flex flex-col gap-2 rounded-2xl">
          <div>
            <img src={m6} alt="Description" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="flex justify-between items-center px-4 mt-4">
            <Green />
            <div className="font-bold text-lg text-orange">$57</div>
          </div>
          <div className="font-semibold line-clamp-2 text-sm px-4">
            Machine Learning A-Z™: Hands-On Python & R In Data...
          </div>
          <div className="line"></div>
          <div className="flex justify-between items-center px-4 mb-3">
            <div className="flex justify-center items-center gap-1">
              <img src={star} alt="Description" className="w-4 h-4 rounded-xl" />
              <div className="font-semibold">5.0</div>
            </div>
            <div className="flex justify-center items-center gap-1">
              <div className="font-semibold">267.5K</div>
              <div>Students</div>
            </div>
          </div>
        </div>
      </div>
    </div>




        <div className='w-[30%] sidenav mt-6 p-6 transform scale-[1]'>
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

          <div className='flex flex-col gap-4'>
            <div className='card rounded-xl flex justify-between items-center'>
              <div className='bg-black w-24 h-24 rounded-xl'>
                <img src={s1} alt="Description" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className='w-64 mx-1'>
                <div className='font-semibold line-clamp-2 text-sm'>Trends in Higher Education that affects students like you</div>
                <div className='flex w-full justify-between mt-4'>
                  <div className='bg-grey px-4 py-1 text-sm rounded-sm flex justify-center items-center font-semibold'>Jan 1,2020</div>
                  <div><Red /></div>
                </div>
              </div>
            </div>

            <div className='card rounded-xl flex justify-between items-center'>
              <div className='bg-black w-24 h-24 rounded-xl'>
                <img src={s2} alt="Description" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className='w-64 mx-1'>
                <div className='font-semibold line-clamp-2 text-sm'>Trends in Higher Education that affects students like you</div>
                <div className='flex w-full justify-between mt-4'>
                  <div className='bg-grey px-4 py-1 text-sm rounded-sm flex justify-center items-center font-semibold'>Jan 1,2020</div>
                  <div><Green /></div>
                </div>
              </div>
            </div>

            <div className='card rounded-xl flex justify-between items-center'>
              <div className='bg-black w-24 h-24 rounded-xl'>
                <img src={s3} alt="Description" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className='w-64 mx-1'>
                <div className='font-semibold line-clamp-2 text-sm'>Trends in Higher Education that affects students like you</div>
                <div className='flex w-full justify-between mt-4'>
                  <div className='bg-grey px-4 py-1 text-sm rounded-sm flex justify-center items-center font-semibold'>Jan 1,2020</div>
                  <div><Purple /></div>
                </div>
              </div>
            </div>

            <div className='card rounded-xl flex justify-between items-center'>
              <div className='bg-black w-24 h-24 rounded-xl'>
                <img src={s4} alt="Description" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className='w-64 mx-1'>
                <div className='font-semibold line-clamp-2 text-sm'>Trends in Higher Education that affects students like you</div>
                <div className='flex w-full justify-between mt-4'>
                  <div className='bg-grey px-4 py-1 text-sm rounded-sm flex justify-center items-center font-semibold'>Jan 1,2020</div>
                  <div><Red /></div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div >

  )
}

export default Home