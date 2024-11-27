import React, { useState } from 'react';
import Nav from './Utilities/Nav';
import { getUserId, sendContactMessage } from '../services/contact-service'; // Importing contact service
import { toast } from 'react-toastify'; // Importing toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = async (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    // Validate form fields
    if (!name || !email || !subject || !message) {
      toast.error('All fields are required');
      return; 
    }

    try {
      // Step 1: Fetch user ID from /api/auth/me
      const userId = await getUserId();

      // Step 2: Create the message object
      const messageData = {
        userId: userId,
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      // Step 3: Send the message to /api/contacts
      await sendContactMessage(messageData);

      // Reset the form fields after sending the message
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      // Show a success toast
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('Error in sending message:', error);

      // Show an error toast
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className='max-w-7xl h-screen mx-auto flex flex-col items-center'>
      <Nav />
      <div className='w-3/4'>
        <div className='font-semibold text-2xl mt-10'>Contact</div>
        <div className='leading-loose'>
          Get in touch with us to explore how we can support your institution's growth and success.
          Reach out today for personalized consultancy services tailored to your needs.
        </div>

        <div className='mt-10'>
          <form className="flex flex-col" onSubmit={handleSendMessage}>
            <div className='flex justify-between items-center'>
              <div>
                <div><label htmlFor="name" className="font-semibold text-sm">Name</label></div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="p-2 rounded-lg text-sm bg-lightblue w-72 inputborder"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div><label htmlFor="email" className="font-semibold text-sm">Email</label></div>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Example@gmail.com"
                    className="p-2 rounded-lg text-sm bg-lightblue w-72 inputborder"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div><label htmlFor="subject" className="font-semibold text-sm">Subject</label></div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Your subject"
                    className="p-2 rounded-lg text-sm bg-lightblue w-72 inputborder"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div><label htmlFor="message" className="font-semibold text-sm">Message</label></div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                className="p-2 rounded-lg text-sm bg-lightblue w-full h-48 inputborder"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-dark text-white flex justify-center items-center p-3 rounded-xl w-[30%] btnhover"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>


    </div>
  );
};

export default Contact;
