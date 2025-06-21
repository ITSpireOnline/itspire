// components/HeaderAndPopupWrapper.jsx (or .tsx if using TypeScript)
"use client"; // <--- THIS FILE MUST HAVE "use client"

import { useState } from 'react';
import Header from './header'; // Corrected casing to 'header' as in your original
import ContactFormPopup from './ContactFormPopup';

// If using TypeScript (.tsx file), add an interface like this:
// interface HeaderAndPopupWrapperProps {} // No props needed for this wrapper currently

export default function HeaderAndPopupWrapper() {
  const [showConsultPopup, setShowConsultPopup] = useState(false);

  // Function to open the popup
  const handleConsultClick = () => {
    alert("hii");
    setShowConsultPopup(true);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setShowConsultPopup(false);
  };

  return (
    <>
      {/* Render the Header component and pass the click handler */}
      <Header onConsultClick={handleConsultClick} />
      <ContactFormPopup
        isOpen={showConsultPopup}
        onClose={handleClosePopup}
      />
    </>
  );
}