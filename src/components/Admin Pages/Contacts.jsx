import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom'; // Import navigation utilities
import Nav from '../Utilities/Nav';
import { getContacts, deleteContact } from '../../services/contact-service'; // Importing contact service
import { toast } from 'react-toastify'; // Importing toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import plus from '../../assets/plus.png';

const Contacts = () => {
  const [contacts, setContacts] = useState([]); // State to hold contacts
  const [search, setSearch] = useState(''); // State to hold search term
  const [showForm, setShowForm] = useState(false); // State for form visibility
  const navigate = useNavigate(); // For programmatic navigation

  // Function to fetch contacts
  const fetchContacts = async () => {
    try {
      const fetchedContacts = await getContacts(); // Fetch contacts from API
      setContacts(fetchedContacts); // Update state with contacts
    } catch (error) {
      toast.error('Failed to fetch contacts');
    }
  };

  // Function to handle delete
  const handleDeleteContact = async (contactId) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this contact?'
    );
    if (!confirmDelete) return;

    try {
      await deleteContact(contactId); // Call the delete contact API
      setContacts(contacts.filter((contact) => contact.contactId !== contactId)); // Remove contact from state
      toast.success('Contact deleted successfully');
    } catch (error) {
      toast.error('Failed to delete contact');
    }
  };

  // Handle Search
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // Fetch contacts when component mounts
  useEffect(() => {
    fetchContacts();
  }, []);

  // Filter contacts based on search query
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.email.toLowerCase().includes(search.toLowerCase()) ||
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.subject.toLowerCase().includes(search.toLowerCase())
  );

  // Handle row click navigation
  const handleRowClick = (contactId) => {
    navigate(`/admin/contacts/${contactId}`);
  };

  return (
    <div className="max-w-7xl h-screen mx-auto flex flex-col gap-5 relative">
      <Nav />
      <div className="font-bold text-3xl">Contacts Management</div>

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
        <div
          className="bg-dark flex justify-center items-center p-3 rounded-full plushover"
          onClick={() => setShowForm(!showForm)}
        >
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

      {/* Contacts Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border-b">Contact ID</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Message</th>
              <th className="py-2 px-4 border-b">Subject</th>
              <th className="py-2 px-4 border-b">User ID</th>
              <th className="py-2 px-4 border-b">Created At</th>
              <th className="py-2 px-4 border-b">Updated At</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact) => (
              <tr
                key={contact.contactId}
                onClick={() => handleRowClick(contact.contactId)} // Navigate on row click
                className="cursor-pointer hover:bg-gray-200"
              >
                <td className="py-2 px-4 border-b">{contact.contactId}</td>
                <td className="py-2 px-4 border-b">{contact.email}</td>
                <td className="py-2 px-4 border-b">{contact.name}</td>
                <td className="py-2 px-4 border-b">{contact.message}</td>
                <td className="py-2 px-4 border-b">{contact.subject}</td>
                <td className="py-2 px-4 border-b">{contact.user?.userId || 'N/A'}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(contact.createdAt).toLocaleString()}
                </td>
                <td className="py-2 px-4 border-b">
                  {new Date(contact.updatedAt).toLocaleString()}
                </td>
                <td
                  className="py-2 px-4 border-b flex flex-col gap-2"
                  onClick={(e) => e.stopPropagation()} // Prevent navigation on button click
                >
                  <button
                    className="bg-[red] text-white py-1 px-3 rounded-md"
                    onClick={() => handleDeleteContact(contact.contactId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredContacts.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  No contacts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
