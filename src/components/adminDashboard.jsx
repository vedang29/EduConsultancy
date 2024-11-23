import React from 'react'
import Nav from './Utilities/Nav'
import Purple from './Adminlabels/Purple'
import Orange from './Adminlabels/Orange'
import Green from './Adminlabels/Green'
import Red from './Adminlabels/Red'

const adminDashboard = () => {
    return (
        <div className="max-w-7xl h-screen mx-auto flex flex-col gap-5">
            <Nav />
            <div className='flex justify-between items-center border-b-2 pb-5'>
                <div>
                    <div className='font-bold text-3xl'>Admin Dashboard</div>
                    <div><span className='font-semibold'>Welcome Back : </span><span>John Smith</span></div>
                    <div><span className='font-semibold'>Logged in as : </span><span>JohnSmith@gmail.com</span></div>
                    <div><span className='font-semibold'>Account Level : </span><span>ADMIN</span></div>
                    <div><span className='font-semibold'>Username : </span><span>Admin_01</span></div>
                </div>
                <div className='sidenav w-[50%] p-10'>
                    <div className='font-bold text-3xl'>Quick Global Search</div>
                    <div>
                        <div className="mt-2 mb-4 "><input type="text" id="search" name="search" placeholder="Search anything here..." className="p-2 rounded-md text-sm bg-lightblue w-full inputborder" required /></div>
                    </div>
                </div>
            </div>

            <div className='flex gap-5'>
                <Purple />
                <Orange />
                <Green />
                <Red />
            </div>
            <div className='line'></div>
            <div className='font-bold text-3xl'>
                Quick Links
            </div>
            <div className='grid grid-cols-4 gap-10 mt-5'>
                <div className=' flex justify-center items-center gap-10 p-4 qbtn'>
                    <div className='font-semibold text-lg'>Users Management</div>
                </div>
                <div className='flex justify-center items-center gap-10 p-4 qbtn'>
                    <div className='font-semibold text-lg'>Products</div>
                </div>
                <div className='flex justify-center items-center gap-10 p-4 qbtn'>
                    <div className='font-semibold text-lg'>Subscriptions</div>
                </div>
                <div className='flex justify-center items-center gap-10 p-4 qbtn'>
                    <div className='font-semibold text-lg'>Blogs</div>
                </div>
                <div className='flex justify-center items-center gap-10 p-4 qbtn'>
                    <div className='font-semibold text-lg'>Comments</div>
                </div>
                <div className='flex justify-center items-center gap-10 p-4 qbtn'>
                    <div className='font-semibold text-lg'>Feedback</div>
                </div>
            </div>

        </div>
    )
}

export default adminDashboard