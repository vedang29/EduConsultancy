import React from 'react'
import Nav from './Utilities/Nav'

const Contact = () => {
    return (
        <div className='max-w-7xl h-screen mx-auto flex flex-col items-center'>
            <Nav />
            <div className='w-3/4'>
                <div className='font-semibold text-2xl mt-10'>Contact</div>
                <div className='leading-loose'>Get in touch with us to explore how we can support your institution's growth and success.
                    Reach out today for personalized consultancy services tailored to your needs.</div>

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
                                <div><label htmlFor="subject" className="font-semibold text-sm">Subject</label></div>
                                <div className="mb-4"><input type="text" id="subject" name="subject" placeholder="Your subject" className="p-2 rounded-lg text-sm bg-lightblue w-72 inputborder" required /></div>
                            </div>
                        </div>

                        <div><label htmlFor="message" className="font-semibold text-sm">Message</label></div>
                        <div className="mb-4"><input type="text" id="message" name="message" placeholder="Your message" className="p-2 rounded-lg text-sm bg-lightblue w-full h-48 inputborder" required /></div>
                    </form>
                </div>
                <button className="bg-dark text-white flex justify-center items-center p-3 rounded-xl w-[30%] btnhover">
                    Send Message
                </button>
            </div>
        </div>
    )
}

export default Contact