import React, { useState } from "react";
import { db, collection, addDoc } from "../firebase";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save data to Firebase Firestore
      const docRef = await addDoc(collection(db, "contacts"), formData);
      console.log("Document written with ID: ", docRef.id);

      // Clear the form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      alert("Your message has been submitted!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error submitting your message.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center
    p-6 mt-10
    "
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2 bg-lightgray w-full 
      p-10 rounded-sm gap-4
      max-w-4xl"
      >
        <div className="flex flex-col gap-2">
          <div className="space-y-8">
            <div className="font-bold text-3xl text-white">
              Let's Work Together
            </div>
          </div>
          <main className="my-auto flex flex-col gap-3">
            <div className="mail text-white">
              <div className="heading text-lg font-semibold">Mail</div>
              <div className="text">arhamwasif.92@gmail.com</div>
            </div>
            <div className="address text-white">
              <div className="heading text-lg font-semibold">Address</div>
              <div className="text">Lahore, Pakistan</div>
            </div>
            <div className="phone text-white">
              <div className="heading text-lg font-semibold">Phone</div>
              <div className="text">+923060064797</div>
            </div>
          </main>
        </div>
        {/* Row  2*/}
        <div className="bg-gray-50 gap-2 rounded-lg p-6 space-y-6 shadow-inner w-full">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name "
                className="border p-2 rounded-md w-full"
                required
              />
            </div>
            <div>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number "
                className="border rounded-md p-2 w-full"
                required
              />
            </div>
            <div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email "
                className="border p-2 w-full rounded-md"
                type="email"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Comments and Questions "
                className="w-full p-2 rounded-md"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-black p-2 rounded-md cursor-pointer border text-white hover:bg-slate-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
