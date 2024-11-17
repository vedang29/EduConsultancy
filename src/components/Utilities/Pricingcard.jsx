import React from 'react'
import check from '../../assets/check.png'
import cross from '../../assets/cross.png'
const Pricingcard = () => {
    return (
        <div className='flex'>
            <div className='pricingcard flex flex-col gap-10 rounded-3xl'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <div className='font-semibold text-2xl'>Free</div>
                    <div className='font-bold font-roboto text-5xl'>$0</div>
                    <div className='text-md'>per month</div>
                    <div>
                        <button className="bg-orange btnhover text-white  w-40 font-bold py-2 px-4 rounded-lg">
                            Create Account
                        </button>
                    </div>
                </div>
                <div className='leading-loose'>
                    Let top creative talent come to you by posting your job listing on #1 Design Jobs Board.
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2'>
                        <div><img src={check} alt="Description" className="w-5 h-5" /></div>
                        <div className='font-semibold'>Online Guidance</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div><img src={check} alt="Description" className="w-5 h-5" /></div>
                        <div className='font-semibold'>Online Doubt Clear</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div><img src={cross} alt="Description" className="w-5 h-5" /></div>
                        <div className='font-semibold'>No Pro Benefits</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div><img src={cross} alt="Description" className="w-5 h-5" /></div>
                        <div className='font-semibold'>No Premium Benefits</div>
                    </div>
                </div>
            </div>

            <div className='pricingcard flex flex-col gap-10 rounded-3xl'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <div className='font-semibold text-2xl'>Java Core</div>
                    <div className='font-bold font-roboto text-5xl'>$200</div>
                    <div className='text-md'>per month</div>
                    <div>
                        <button className="bg-orange btnhover text-white  w-40 font-bold py-2 px-4 rounded-lg">
                            Create Account
                        </button>
                    </div>
                </div>
                <div className='leading-loose'>
                Easily search and recruit available designers for hire based on your ideal qualifications.
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2'>
                        <div><img src={check} alt="Description" className="w-5 h-5" /></div>
                        <div className='font-semibold'>J2SE Individual Tutor</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div><img src={check} alt="Description" className="w-5 h-5" /></div>
                        <div className='font-semibold'>Individual Tutor For each Subject</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div><img src={check} alt="Description" className="w-5 h-5" /></div>
                        <div className='font-semibold'>Weekly Motivational Lecture</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div><img src={cross} alt="Description" className="w-5 h-5" /></div>
                        <div className='font-semibold'>No Offline Content</div>
                    </div>
                </div>
            </div>

            <div className='pricingcard flex flex-col gap-10 rounded-3xl  bg-[#060432] text-white'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <div className='font-semibold text-2xl'>Java Core & Advance</div>
                    <div className='font-bold font-roboto text-5xl'>$250</div>
                    <div className='text-md'>per month</div>
                    <div>
                        <button className="bg-orange btnhover text-white  w-40 font-bold py-2 px-4 rounded-lg">
                            Create Account
                        </button>
                    </div>
                </div>
                <div className='leading-loose'>
                    Get your roles filled faster with unlimited access to Dribbble's Job Board and Designer search.
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2'>
                        <div><img src={check} alt="Description" className="w-5 h-5" /></div>
                        <div className='font-semibold'>J2SE & J2EE Individual Tutor</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div><img src={check} alt="Description" className="w-5 h-5" /></div>
                        <div className='font-semibold'>Individual Tutor For each Subject</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div><img src={check} alt="Description" className="w-5 h-5" /></div>
                        <div className='font-semibold'>Weekly Motivational Lecture</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div><img src={cross} alt="Description" className="w-5 h-5" /></div>
                        <div className='font-semibold'>No Offline Content</div>
                    </div>
                </div>
            </div>



            <div className='pricingcard flex flex-col gap-10 rounded-3xl bg-[#060432] text-white'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <div className='font-semibold text-2xl'>Premium</div>
                    <div className='font-bold font-roboto text-5xl'>$450</div>
                    <div className='text-md'>per month</div>
                    <div>
                        <button className="bg-orange btnhover text-white  w-40 font-bold py-2 px-4 rounded-lg">
                            Create Account
                        </button>
                    </div>
                </div>
                <div className='leading-loose'>
                Get your roles filled faster with unlimited access to Dribbble's Job Board and Designer search.
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2'>
                        <div><img src={check} alt="Description" className="w-5 h-5" /></div>
                        <div className='font-semibold'>All Pro Benfits</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div><img src={check} alt="Description" className="w-5 h-5" /></div>
                        <div className='font-semibold'>Offline Contents Available</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div><img src={cross} alt="Description" className="w-5 h-5" /></div>
                        <div className='font-semibold'>24/7 Doubt Clear</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div><img src={cross} alt="Description" className="w-5 h-5" /></div>
                        <div className='font-semibold'>Daily Motivational Lecture</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricingcard