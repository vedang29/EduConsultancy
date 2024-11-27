import React, { useState } from 'react';
import Nav from './Utilities/Nav';
import { getUserId, sendFeedbackMessage } from '../services/feedback-service'; // Importing feedback service
import { toast } from 'react-toastify'; // Importing toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSendFeedback = async (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    // Validate form fields
    if (!name || !email || !phone || !feedback) {
      toast.error('All fields are required');
      return; // Stop if validation fails
    }

    try {
      // Step 1: Fetch user ID from /api/auth/me
      const userId = await getUserId();

      // Step 2: Create the feedback object
      const feedbackData = {
        userId: userId,
        name: name,
        email: email,
        phone: phone,
        message: feedback,
      };

      // Step 3: Send the feedback to /api/feedbacks
      await sendFeedbackMessage(feedbackData);

      // Reset the form fields after sending the feedback
      setName('');
      setEmail('');
      setPhone('');
      setFeedback('');

      // Show a success toast
      toast.success('Feedback sent successfully!');
    } catch (error) {
      console.error('Error in sending feedback:', error);

      // Show an error toast
      toast.error('Failed to send feedback. Please try again later.');
    }
  };

  return (
    <div className='max-w-7xl h-screen mx-auto flex flex-col items-center'>
      <Nav />
      <div className='w-3/4'>
        <div className='font-semibold text-2xl mt-10'>Feedback</div>
        <div className='leading-loose'>
          We value your thoughts! Your feedback helps us improve and deliver better solutions tailored to your needs. Share your experience with us – we’re here to listen and grow together.
        </div>

        <div className='mt-10'>
          <form className="flex flex-col" onSubmit={handleSendFeedback}>
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
                <div><label htmlFor="phone" className="font-semibold text-sm">Phone</label></div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    className="p-2 rounded-lg text-sm bg-lightblue w-72 inputborder"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div><label htmlFor="feedback" className="font-semibold text-sm">Feedback</label></div>
            <div className="mb-4">
              <textarea
                id="message"
                name="feedback"
                placeholder="Your feedback"
                className="p-2 rounded-lg text-sm bg-lightblue w-full h-48 inputborder"
                required
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-dark text-white flex justify-center items-center p-3 rounded-xl w-[30%] btnhover"
            >
              Send Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
