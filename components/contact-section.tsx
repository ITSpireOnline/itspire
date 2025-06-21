"use client";

import { useState } from "react";
import type React from "react"; // Explicitly importing React type for clarity
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/firebase/firebaseConfig"; // Your Firestore instance, ensure this path is correct
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Loader2 } from "lucide-react"; // Assumes lucide-react is installed for the loading spinner

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Using string | null to store the message (success or error) for display
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false); // To control styling (e.g., green for success, red for error)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    setIsSubmitting(true); // Start submission process
    setSubmitMessage(null); // Clear any previous messages
    setIsError(false); // Reset error state

    try {
      // --- Client-side Validation ---
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error("Please fill in all required fields (Full Name, Email Address, Message).");
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        throw new Error("Please enter a valid email address.");
      }

      // If phone is marked required in JSX, it must be present and valid
      if (!formData.phone.trim() || !/^\+?[0-9\s-]{7,15}$/.test(formData.phone.trim())) {
        throw new Error("Please enter a valid phone number.");
      }
      // If phone is optional, change the <Input type="tel"> to not have 'required'
      // and update this validation to: `if (formData.phone.trim() && !/^\+?[0-9\s-]{7,15}$/.test(formData.phone.trim()))`

      // --- Firestore Submission ---
      const consultationsCollectionRef = collection(db, "consultations");

      await addDoc(consultationsCollectionRef, {
        ...formData,
        timestamp: serverTimestamp(), // Use Firestore's server timestamp
      });

      // --- Success Feedback ---
      setSubmitMessage("Your request has been sent successfully! We'll get back to you soon.");
      setIsError(false); // Set to false to indicate success
      setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form fields

      // Optionally, clear the success message after a few seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000); // Message disappears after 5 seconds

    } catch (error: any) { // Explicitly type error as 'any' for its 'message' property
      console.error("Error submitting form to Firestore:", error);
      // --- Error Feedback ---
      setSubmitMessage(`Failed to send your request: ${error.message || "Unknown error"}. Please try again.`);
      setIsError(true); // Set to true to indicate an error
    } finally {
      setIsSubmitting(false); // Always stop submission state
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Clear any submission messages when the user starts typing again
    if (submitMessage) {
      setSubmitMessage(null);
      setIsError(false);
    }
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="flex justify-center mt-10 lg:mt-0">
            <Image
              src="/customer-support-team.jpg"
              alt="Customer Support Team"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl object-cover"
              priority
            />
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Let’s Talk
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl">
              Fill out the form and our team will connect with you shortly to understand your needs.
            </p>

            <Card className="shadow-2xl border border-gray-200">
              <CardContent className="p-8 md:p-10 bg-white rounded-2xl space-y-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full Name*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="text-base"
                  />
                  <Input
                    type="tel" // Changed to "tel" for better mobile keyboard experience
                    name="phone"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleChange}
                    required // If you want this to be optional, remove 'required' here
                    className="text-base"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="text-base"
                  />
                  <Textarea
                    name="message"
                    placeholder="Tell us more about your project*"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="text-base"
                  />

                  {/* Dynamic Submission Message */}
                  {submitMessage && (
                    <div
                      className={`p-3 rounded-md text-sm ${
                        isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                      }`}
                      role="alert" // Added for accessibility
                    >
                      {submitMessage}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2"
                    disabled={isSubmitting} // Disable button while submitting
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Request" // This text remains constant unless submitting
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}