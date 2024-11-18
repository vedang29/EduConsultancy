import React from 'react'
import m1 from '../assets/m1.png'
import m2 from '../assets/m2.png'
import m3 from '../assets/m3.png'
import Nav from './Utilities/Nav'
import Sidenav from './Utilities/Sidenav'
import Purple from './Labels/Purple'
import userimg from '../assets/userimg.png'
import view from '../assets/view.png'
import Green from './Labels/Green'
import Red from './Labels/Red'

const Blogs = () => {
    return (
        <div className="max-w-7xl h-screen mx-auto">

            <Nav />
            <div className='flex'>
                <div className='w-3/4'>
                    <div className='font-semibold text-2xl mt-10'>
                        Blogs
                    </div>
                    <div className='mt-6'>

                        <div className='pcard flex rounded-xl items-center gap-10'>
                            <div>
                                <img src={m1} alt="Description" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <div><Purple/></div>
                                <div className='font-semibold line-clamp-2 text-md'>Trends in Higher Education that affects students like you</div>
                                <div className='flex justify-between'>
                                    <div className='flex justify-center items-center gap-2'>
                                        <div><img src={userimg} alt="Description" className="w-8 h-8 object-cover" /></div>
                                        <div className='font-semibold'>Kevin Gilbert</div>
                                    </div>
                                    <div className='bg-grey px-4 py-1 text-sm rounded-sm flex justify-center items-center font-semibold'>Jan 1,2020</div>
                                    <div className='bg-grey px-4 py-1 text-sm rounded-sm flex justify-center items-center font-semibold'>12 Comments</div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div><img src={view} alt="Description" className="w-5 h-5 object-cover" /></div>
                                    <div className='font-semibold'>265.7K students</div>
                                </div>
                                
                            </div>
                        </div>
                        <div className='pcard flex rounded-xl items-center gap-10'>
                            <div>
                                <img src={m2} alt="Description" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <div><Red/></div>
                                <div className='font-semibold line-clamp-2 text-md'>The Future of Online Learning: What You Need to Know</div>
                                <div className='flex justify-between'>
                                    <div className='flex justify-center items-center gap-2'>
                                        <div><img src={userimg} alt="Description" className="w-8 h-8 object-cover" /></div>
                                        <div className='font-semibold'>Alex Johnson</div>
                                    </div>
                                    <div className='bg-grey px-4 py-1 text-sm rounded-sm flex justify-center items-center font-semibold'>Mar 15, 2023</div>
                                    <div className='bg-grey px-4 py-1 text-sm rounded-sm flex justify-center items-center font-semibold'>8 Comments</div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div><img src={view} alt="Description" className="w-5 h-5 object-cover" /></div>
                                    <div className='font-semibold'>178.4K students</div>
                                </div>
                                
                            </div>
                        </div>
                        <div className='pcard flex rounded-xl items-center gap-10'>
                            <div>
                                <img src={m3} alt="Description" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <div><Green/></div>
                                <div className='font-semibold line-clamp-2 text-md'>Breaking Down the Latest College Admission Trends</div>
                                <div className='flex justify-between'>
                                    <div className='flex justify-center items-center gap-2'>
                                        <div><img src={userimg} alt="Description" className="w-8 h-8 object-cover" /></div>
                                        <div className='font-semibold'>Samantha Lee</div>
                                    </div>
                                    <div className='bg-grey px-4 py-1 text-sm rounded-sm flex justify-center items-center font-semibold'>Feb 20, 2022</div>
                                    <div className='bg-grey px-4 py-1 text-sm rounded-sm flex justify-center items-center font-semibold'>25 Comments</div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div><img src={view} alt="Description" className="w-5 h-5 object-cover" /></div>
                                    <div className='font-semibold'>315.2K students</div>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
                <Sidenav />
            </div>
        </div>
    )
}

export default Blogs