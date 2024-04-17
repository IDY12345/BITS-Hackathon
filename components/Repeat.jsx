import React, { useState, useEffect } from 'react';

const Repeat = ({ word }) => {
  const [letters, setLetters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < word.length) {
        setLetters(prevLetters => [...prevLetters, word[currentIndex]]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setLetters([]);
          setCurrentIndex(0);
        }, 1000); // Adjust the delay before restarting the loop
      }
    }, 200); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, [word, currentIndex]);

  return (
    <div>
      {letters.map((letter, index) => (
        <span key={index} className='text-[#40E0D0]'>{letter}</span>
      ))}
    </div>
  );
};

export default Repeat
