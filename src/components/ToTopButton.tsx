import React, { useState } from 'react';
import '../styles/BackToTopButton.css'; // CSS for styling the button

function BackToTopButton () {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to check if the user has scrolled enough to display the button
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`back-to-top-button ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop}
    >
      {"Back to top"}
    </button>
  );
};

export default BackToTopButton;