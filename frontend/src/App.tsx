import { useEffect, useState } from 'react';
import "./App.css"

const MyComponent = () => {
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
      <h1>Message from backend:</h1>
      <p>{message ? JSON.stringify(message) : "Loading..."}</p>
    </div>
  );
};

export default MyComponent;
