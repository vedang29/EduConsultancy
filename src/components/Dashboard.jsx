import React from 'react'
import Nav from './Utilities/Nav'
import DPurple from './Dashboardlabels/DPurple'
import DOrange from './Dashboardlabels/DOrange'
import DGreen from './Dashboardlabels/DGreen'
import DRed from './Dashboardlabels/DRed'
import phone from "../assets/phone.png"
import email from "../assets/email.png"

const Dashboard = () => {
    return (
        <div className="max-w-7xl h-screen mx-auto flex flex-col gap-5">
            <Nav />
            <div className='font-semibold text-2xl mt-10'>
                Dashboard
            </div>
            
            <div className='flex gap-2'>
                <DPurple />
                <DOrange />
                <DGreen />
                <DRed />
            </div>

  
            <div className="mt-2 mb-4 "><input type="text" id="search" name="search" placeholder="What do you want to learn..." className="p-2 rounded-md text-sm bg-lightblue w-1/2 inputborder" required /></div>
 
            <div className='flex flex-col gap-5 boxshadow p-10'>
                <div className='font-semibold text-2xl'>User Details</div>
                <div className='flex items-center gap-2'>
                    <div><img src={phone} alt="Description" className="w-5 h-5" /></div>
                    <div className='font-roboto'>+91 123456789</div>
                </div>
                <div className='flex items-center gap-2'>
                    <div><img src={email} alt="Description" className="w-7 h-5" /></div>
                    <div>Example@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard