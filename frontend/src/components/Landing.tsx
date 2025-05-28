import { useEffect, useState } from 'react';

export const Landing = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const getMessage = async () => {
      try {
        const response = await fetch("http://localhost:5000");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data) {
          setMessage(data.message);
        }
      } catch (error) {
        console.error("Failed to fetch message:", error);
      }
    };

    getMessage();
  }, []);

  return (
    <div>
      <h2>Message from backend:</h2>
      <p>{message ? JSON.stringify(message) : "Loading..."}</p>
    </div>
  );
};

