import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFeedbackById } from '../../services/feedback-service';
import Nav from '../Utilities/Nav';

const FeedbackDetails = () => {
  const { id } = useParams();
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        setLoading(true);
        const fetchedFeedback = await getFeedbackById(id);
        setFeedback(fetchedFeedback);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!feedback) return <div>Feedback not found</div>;

  return (
    <div className="max-w-7xl h-screen mx-auto flex flex-col gap-5">
      <Nav />
      <div className="flex justify-between items-center border-b-2 pb-5">
        <div className="flex flex-col gap-1">
          <div className="font-bold text-3xl mb-5">Feedback Details</div>
          <div><span className="font-semibold">Name : </span>{feedback.name}</div>
          <div><span className="font-semibold">Email : </span>{feedback.email}</div>
          <div><span className="font-semibold">Phone : </span>{feedback.phone}</div>
          <div><span className="font-semibold">User : </span>{feedback.user.name} ({feedback.user.email})</div>
          <div><span className="font-semibold">Created At : </span>{new Date(feedback.createdAt).toLocaleString()}</div>
          <div><span className="font-semibold">Updated At : </span>{new Date(feedback.updatedAt).toLocaleString()}</div>
        </div>
      </div>

      {/* Feedback details display */}
      <div className="space-y-4 mt-4 px-20">
        <div className="text-xl">
          <strong>Message:</strong> {feedback.message}
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetails;
