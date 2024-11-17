import React from 'react'
import Nav from './Utilities/Nav'

const Feedback = () => {
    return (
        <div className='max-w-7xl h-screen mx-auto flex flex-col items-center'>
            <Nav />
            <div className='w-3/4'>
                <div className='font-semibold text-2xl mt-10'>Feedback</div>
                <div className='leading-loose'>We value your thoughts! Your feedback helps us improve and deliver better solutions tailored to your needs.
                    Share your experience with us – we’re here to listen and grow together.</div>

                <div className='mt-10'>
                    <form className="flex flex-col">
                        <div className='flex justify-between items-center'>
                            <div>
                                <div><label htmlFor="name" className="font-semibold text-sm">Name</label></div>
                                <div className="mb-4"><input type="text" id="name" name="name" placeholder="Your name" className="p-2 rounded-lg text-sm bg-lightblue w-72 inputborder" required /></div>

                            </div>
                            <div>
                                <div><label htmlFor="email" className="font-semibold text-sm">Email</label></div>
                                <div className="mb-4"><input type="text" id="email" name="email" placeholder="Example@gmail.com" className="p-2 rounded-lg text-sm bg-lightblue w-72 inputborder" required /></div>

                            </div>
                            <div>
                                <div><label htmlFor="subject" className="font-semibold text-sm">Phone</label></div>
                                <div className="mb-4"><input type="text" id="phone" name="phone" placeholder="Phone number" className="p-2 rounded-lg text-sm bg-lightblue w-72 inputborder" required /></div>
                            </div>
                        </div>

                        <div><label htmlFor="feedback" className="font-semibold text-sm">Feedback</label></div>
                        <div className="mb-4"><input type="text" id="feedback" name="feedback" placeholder="Your Feedback" className="p-2 rounded-lg text-sm bg-lightblue w-full h-48 inputborder" required /></div>
                    </form>
                </div>

                <button className="bg-dark text-white flex justify-center items-center p-3 rounded-xl w-[30%] btnhover">
                    Send Feedback
                </button>
            </div>
        </div>
    )
}

export default Feedback