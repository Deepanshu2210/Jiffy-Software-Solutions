import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToAI, startChat } from '../services/geminiService';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hello! How can I help you with JIFFY Software Solutions today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startChat();
  }, []);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const botResponse = await sendMessageToAI(input);
      const botMessage: Message = { text: botResponse, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
       const errorMessage: Message = { text: "Sorry, something went wrong.", sender: 'bot' };
       setMessages(prev => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-secondary transition-transform transform hover:scale-110 z-50 no-capture no-print"
        aria-label="Toggle Chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-[60vh] bg-white rounded-lg shadow-2xl flex flex-col z-50 animate-fade-in-up no-capture no-print">
          <header className="bg-primary text-white p-4 flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold">JIFFY Assistant</h3>
            <button onClick={toggleChat} className="text-white">&times;</button>
          </header>

          <div className="flex-1 p-4 overflow-y-auto bg-light">
            {messages.map((msg, index) => (
              <div key={index} className={`flex my-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg px-3 py-2 max-w-[80%] ${msg.sender === 'user' ? 'bg-accent text-white' : 'bg-gray-200 text-dark'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
             {isLoading && (
                <div className="flex justify-start my-2">
                    <div className="rounded-lg px-3 py-2 bg-gray-200 text-dark">
                        <div className="flex items-center space-x-1">
                            <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></span>
                        </div>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                placeholder="Ask something..."
                className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent"
                disabled={isLoading}
              />
              <button onClick={handleSend} disabled={isLoading} className="bg-primary text-white px-4 rounded-r-md hover:bg-secondary disabled:bg-gray-400">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;