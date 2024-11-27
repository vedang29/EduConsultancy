import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To access route params
import { getContactById } from '../../services/contact-service'; // Importing the service to get contact by ID
import Nav from '../Utilities/Nav';

const ContactDetails = () => {
    const { id } = useParams(); // Get the contact ID from the URL
    const [contact, setContact] = useState(null); // State to store contact details
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle error state

    // Fetch contact details on component mount
    useEffect(() => {
        const fetchContact = async () => {
            try {
                setLoading(true); // Set loading to true while fetching
                const fetchedContact = await getContactById(id); // Fetch the contact using the ID
                setContact(fetchedContact); // Set the fetched contact data to state
            } catch (error) {
                setError(error.message); // Set error message if fetching fails
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchContact();
    }, [id]); // Re-run the effect when the contact ID changes

    if (loading) return <div>Loading...</div>; // Show loading message while fetching
    if (error) return <div>Error: {error}</div>; // Show error message if there's an issue

    if (!contact) return <div>Contact not found</div>; // If contact data is not found

    return (
        <div className="max-w-7xl h-screen mx-auto flex flex-col gap-5">
            <Nav />
            <div className="flex justify-between items-center border-b-2 pb-5">
                <div className='flex flex-col gap-1'>
                    <div className="font-bold text-3xl mb-5">Contact Details</div>
                    <div><span className="font-semibold">Name : </span><span>{contact.name}</span></div>
                    <div><span className="font-semibold">Email : </span><span>{contact.email}</span></div>
                    <div><span className="font-semibold">User : </span><span> {contact.user.name} ({contact.user.email})</span></div>
                    <div><span className="font-semibold">Created At : </span><span>{new Date(contact.createdAt).toLocaleString()}</span></div>
                    <div><span className="font-semibold">updated At : </span><span> {new Date(contact.updatedAt).toLocaleString()}</span></div>
                </div>
            </div>

            {/* Contact details display */}
            <div className="space-y-4 mt-4 px-20">
                <div className='text-xl'>
                    <strong>Subject:</strong> {contact.subject}
                </div>
                <div className='text-xl'>
                    <strong>Message:</strong> {contact.message}
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
