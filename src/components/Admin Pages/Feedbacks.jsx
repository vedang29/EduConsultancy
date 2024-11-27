import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../Utilities/Nav';
import { getFeedbacks, deleteFeedback } from '../../services/feedback-service';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import plus from '../../assets/plus.png';

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const fetchFeedbacks = async () => {
    try {
      const fetchedFeedbacks = await getFeedbacks();
      setFeedbacks(fetchedFeedbacks);
    } catch (error) {
      toast.error('Failed to fetch feedbacks');
    }
  };

  const handleDeleteFeedback = async (feedbackId) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this feedback?'
    );
    if (!confirmDelete) return;

    try {
      await deleteFeedback(feedbackId);
      setFeedbacks(feedbacks.filter((feedback) => feedback.feedbackId !== feedbackId));
      toast.success('Feedback deleted successfully');
    } catch (error) {
      toast.error('Failed to delete feedback');
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const filteredFeedbacks = feedbacks.filter((feedback) =>
    feedback.email.toLowerCase().includes(search.toLowerCase()) ||
    feedback.name.toLowerCase().includes(search.toLowerCase()) ||
    feedback.phone.toLowerCase().includes(search.toLowerCase())
  );

  const handleRowClick = (feedbackId) => {
    navigate(`/admin/feedbacks/${feedbackId}`);
  };

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

        {/* Plus Button */}
        <div
          className="bg-dark flex justify-center items-center p-3 rounded-full plushover"
          onClick={() => setShowForm(!showForm)}
        >
          <img
            src={plus}
            alt="Plus Icon"
            style={{ width: '20px', height: '20px' }}
          />
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-[black] bg-opacity-70 z-50 flex justify-center items-center">
          {/* Your form component goes here */}
        </div>
      )}

      {/* Feedbacks Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border-b">Feedback ID</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Message</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">User ID</th>
              <th className="py-2 px-4 border-b">Created At</th>
              <th className="py-2 px-4 border-b">Updated At</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFeedbacks.map((feedback) => (
              <tr
                key={feedback.feedbackId}
                onClick={() => handleRowClick(feedback.feedbackId)}
                className="cursor-pointer hover:bg-gray-200"
              >
                <td className="py-2 px-4 border-b">{feedback.feedbackId}</td>
                <td className="py-2 px-4 border-b">{feedback.email}</td>
                <td className="py-2 px-4 border-b">{feedback.name}</td>
                <td className="py-2 px-4 border-b">{feedback.message}</td>
                <td className="py-2 px-4 border-b">{feedback.phone}</td>
                <td className="py-2 px-4 border-b">{feedback.user?.userId || 'N/A'}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(feedback.createdAt).toLocaleString()}
                </td>
                <td className="py-2 px-4 border-b">
                  {new Date(feedback.updatedAt).toLocaleString()}
                </td>
                <td
                  className="py-2 px-4 border-b flex flex-col gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="bg-[red] text-white py-1 px-3 rounded-md"
                    onClick={() => handleDeleteFeedback(feedback.feedbackId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredFeedbacks.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  No feedbacks found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Feedbacks;
