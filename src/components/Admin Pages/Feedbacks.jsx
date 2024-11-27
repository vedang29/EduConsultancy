import React, { useState, useEffect } from 'react';
import Nav from '../Utilities/Nav';
import { getFeedbacks, deleteFeedback } from '../../services/feedback-service'; // Updated service import
import { toast } from 'react-toastify'; // Importing toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import plus from '../../assets/plus.png';

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]); // State to hold feedbacks
  const [search, setSearch] = useState(''); // State to hold search term
  const [showForm, setShowForm] = useState(false); // State for form visibility

  // Function to fetch feedbacks
  const fetchFeedbacks = async () => {
    try {
      const fetchedFeedbacks = await getFeedbacks(); // Fetch feedbacks from API
      setFeedbacks(fetchedFeedbacks); // Update state with feedbacks
    } catch (error) {
      toast.error('Failed to fetch feedbacks');
    }
  };

  // Function to handle delete
  const handleDeleteFeedback = async (feedbackId) => {
    try {
      await deleteFeedback(feedbackId); // Call the delete feedback API
      setFeedbacks(feedbacks.filter(feedback => feedback.feedbackId !== feedbackId)); // Remove feedback from state
      toast.success('Feedback deleted successfully');
    } catch (error) {
      toast.error('Failed to delete feedback');
    }
  };

  // Handle Search
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // Fetch feedbacks when component mounts
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Filter feedbacks based on search query
  const filteredFeedbacks = feedbacks.filter(feedback =>
    feedback.email.toLowerCase().includes(search.toLowerCase()) ||
    feedback.name.toLowerCase().includes(search.toLowerCase()) ||
    feedback.phone.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl h-screen mx-auto flex flex-col gap-5 relative">
      <Nav />
      <div className="font-bold text-3xl">Feedbacks Management</div>

      {/* Search Bar */}
      <div className="flex justify-between items-center">
        <div className="mt-2 mb-4 flex justify-center items-center w-1/2">
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search anything here..."
            className="p-2 rounded-md text-sm bg-lightblue w-full inputborder"
            required
          />
        </div>

        {/* Plus Button to Toggle Form */}
        <div className="bg-dark flex justify-center items-center p-3 rounded-full plushover" onClick={() => setShowForm(!showForm)}>
          <img
            src={plus} // Update with actual plus icon path
            alt="Plus Icon"
            style={{ width: '20px', height: '20px' }}
          />
        </div>
      </div>

      {/* Render Form based on showForm state */}
      {showForm && (
        <div className="fixed inset-0 bg-[black] bg-opacity-70 z-50 flex justify-center items-center">
          {/* Your Blogform Component or other form can go here */}
        </div>
      )}

      {/* Feedbacks Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Feedback ID</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Message</th>
              <th className="py-2 px-4 border-b text-left">Phone</th>
              <th className="py-2 px-4 border-b text-left">User ID</th>
              <th className="py-2 px-4 border-b text-left">Created At</th>
              <th className="py-2 px-4 border-b text-left">Updated At</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFeedbacks.map(feedback => (
              <tr key={feedback.feedbackId}>
                <td className="py-2 px-4 border-b">{feedback.feedbackId}</td>
                <td className="py-2 px-4 border-b">{feedback.email}</td>
                <td className="py-2 px-4 border-b">{feedback.name}</td>
                <td className="py-2 px-4 border-b">{feedback.message}</td>
                <td className="py-2 px-4 border-b">{feedback.phone}</td>
                <td className="py-2 px-4 border-b">{feedback.user.userId}</td>
                <td className="py-2 px-4 border-b">{new Date(feedback.createdAt).toLocaleString()}</td>
                <td className="py-2 px-4 border-b">{new Date(feedback.updatedAt).toLocaleString()}</td>
                <td className="py-2 px-4 border-b flex flex-col gap-2">
                  <button
                    className="bg-[red] text-white py-1 px-3 rounded-md"
                    onClick={() => handleDeleteFeedback(feedback.feedbackId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Feedbacks;
