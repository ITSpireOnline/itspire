// components/ContactFormPopup.jsx
"use client";

import { useState } from "react";
// Import Firestore functions: collection, addDoc, serverTimestamp
import { db } from "@/firebase/firebaseConfig"; // Your Firestore instance
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Loader2 } from "lucide-react";

export default function ContactFormPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null); 

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(null);

    try {
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields (Name, Email, Message).");
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        throw new Error("Please enter a valid email address.");
      }
        if (formData.phone && !/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
        throw new Error("Please enter a valid phone number (optional).");
      }
      const consultationsCollectionRef = collection(db, "consultations");

      // Add a new document to the 'consultations' collection
      await addDoc(consultationsCollectionRef, {
        ...formData,
        timestamp: serverTimestamp(), 
      });

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" }); 
      setTimeout(() => {
        onClose(); 
      }, 1500);
    } catch (error) {
      console.error("Error submitting form to Firestore:", error);
      setSubmitSuccess(false);
      alert("Failed to send your request. Please try again. Error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6 animate-fade-in-up">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </Button>

        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Consult Our Team</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Fill out the form below and we'll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone (Optional)
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g., +91 9876543210"
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or query..."
              rows={4}
              required
              className="w-full resize-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : submitSuccess ? (
              "Sent Successfully!"
            ) : (
              "Send Request"
            )}
          </Button>
        </form>

        {submitSuccess === true && (
          <div className="mt-4 text-center text-green-600 font-semibold">
            Your request has been sent!
          </div>
        )}
        {submitSuccess === false && (
          <div className="mt-4 text-center text-red-600 font-semibold">
            Failed to send request.
          </div>
        )}
      </div>
    </div>
  );
}