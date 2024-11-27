import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { getContactById } from '../../services/contact-service';
import Nav from '../Utilities/Nav';

const ContactDetails = () => {
    const { id } = useParams(); 
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 


    useEffect(() => {
        const fetchContact = async () => {
            try {
                setLoading(true); 
                const fetchedContact = await getContactById(id);
                setContact(fetchedContact); 
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false); 
            }
        };

        fetchContact();
    }, [id]); 

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>; 

    if (!contact) return <div>Contact not found</div>; 

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
