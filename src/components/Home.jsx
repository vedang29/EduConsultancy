import React from 'react'
import Green from './Labels/Green'
import m1 from '../assets/m1.png'
import m2 from '../assets/m2.png'
import m3 from '../assets/m3.png'
import m4 from '../assets/m4.png'
import m5 from '../assets/m5.png'
import m6 from '../assets/m6.png'
import star from '../assets/star.png'
import Nav from './Utilities/Nav'
import Sidenav from './Utilities/Sidenav'

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




   <Sidenav/>


      </div>
    </div >

  )
}

export default Home