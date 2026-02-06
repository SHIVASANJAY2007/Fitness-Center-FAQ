import { useState, useEffect, useRef } from 'react';
import gymData from '../data/gymData';
import { normalize } from '../utils/normalize';
import { findBestMatch } from '../utils/matcher';
import { askGemini } from '../api/gemini';
import { SendIcon, RobotIcon } from './Icons';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "🏋️ Welcome to Octane Fitness FAQ Bot! Ask me about facilities, programs, memberships, or anything else." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  async function handleSend() {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(m => [...m, { from: "user", text: userMsg }]);
    setInput("");
    setIsLoading(true);

    try {
      const q = normalize(userMsg);
      let answer = null;
      // Try to find exact match in facilities or programs
      answer =
        findBestMatch(q, gymData.facilities) ||
        findBestMatch(q, gymData.programs);

      if (answer) {
        setMessages(m => [
          ...m,
          {
            from: "bot",
            text: `${answer.name}\n${answer.description}`
          }
        ]);
      } else {
        // Use Gemini for more complex questions
        const aiReply = await askGemini(userMsg);
        setMessages(m => [...m, { from: "bot", text: aiReply }]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages(m => [
        ...m,
        { from: "bot", text: "Sorry, I encountered an error. Please try again or contact support." }
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      <div style={{ padding: '20px', borderBottom: '1px solid var(--border)', background: 'var(--bg-card)' }}>
        <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text-main)' }}>🏋️ Octane Fitness Example</h2>
      </div>

      <div className="chat-window">
        {messages.map((m, i) => (
          <div key={i} className={`message ${m.from}`}>
            {m.from === 'bot' && (
              <div className="bot-icon">
                <RobotIcon />
              </div>
            )}
            <div className="msg-content">
              <p>{m.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message bot">
            <div className="bot-icon">
              <RobotIcon />
            </div>
            <div className="msg-content">
              <div className="typing-indicator">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-area">
        <input
          type="text"
          className="input-field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask a question..."
          disabled={isLoading}
        />
        <button className="send-btn" onClick={handleSend} disabled={isLoading}>
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
