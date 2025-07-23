import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/contact', formData);
    alert('Message sent!');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Your Name" className="w-full p-2 border" onChange={handleChange} />
        <input name="email" placeholder="Your Email" className="w-full p-2 border" onChange={handleChange} />
        <textarea name="message" placeholder="Message" className="w-full p-2 border" onChange={handleChange} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Send</button>
      </form>
    </div>
  );
}
export default Contact;
