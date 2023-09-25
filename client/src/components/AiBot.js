import React, { useState, useEffect } from "react";

function AiBot() {
  const [conversation, setConversation] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Greeting from the AI when the component mounts
    const initialGreeting = {
      content: "How can I be of assistance?",
      role: 'chatbot',
    };
    setConversation([initialGreeting]);
  }, []);

  const sendMessage = () => {
    if (input.trim() !== '') {
      const userMessage = {
        content: input,
        role: 'user',
      };

      setConversation([...conversation, userMessage]);

      // Simulate a response from the chatbot (you can replace this with your own logic)
      setTimeout(() => {
        const chatbotResponse = {
          content: 'This is a response from the chatbot.',
          role: 'chatbot',
        };
        setConversation([...conversation, chatbotResponse]);
      }, 1000);

      setInput('');
    }
  };

  return (
    <div className="fixed bottom-0 right-0 mb-8 mr-8 w-96">
      <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-300">
        <div className="chatbot-header bg-blue-500 text-white py-2 px-4 rounded-t-lg">
          Chatbot
        </div>
        <div className="chatbot-messages p-4 border-b">
          {conversation.map((message, index) => (
            <div
              key={index}
              className={`message p-2 my-1 ${
                message.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'
              } rounded-lg`}
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="chatbot-input flex p-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-full p-2 border"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-full ml-2 hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default AiBot;