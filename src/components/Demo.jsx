import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Demo = () => {
  const [messages, setMessages] = useState([
    { role: 'system', text: 'Salam! I am your Kashmiri AI assistant. Ask me anything about Kashmir, its culture, or language.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'system', text: 'This is a demo response. The actual model would generate Kashmiri text here.' }]);
    }, 1000);
  };

  return (
    <section className="py-20 bg-kashmiri-paper relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-kashmiri-wood mb-4">Experience the Magic</h2>
            <p className="text-gray-600">Interact with the model in a traditional setting.</p>
          </div>

          {/* Window/Dab Frame */}
          <div className="relative bg-kashmiri-wood p-4 rounded-t-full rounded-b-lg shadow-2xl border-4 border-kashmiri-wood">
            {/* Intricate Lattice Work (Pinjra) Top */}
            <div 
              className="absolute top-0 left-0 right-0 h-16 opacity-20 rounded-t-full pointer-events-none bg-repeat"
              style={{ backgroundImage: "url('/images/pattern.png')", backgroundSize: '200px' }}
            />

            {/* Inner Window Area */}
            <div className="bg-white rounded-lg overflow-hidden h-[500px] flex flex-col relative z-10">
              
              {/* Chat Area */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-kashmiri-saffron text-white rounded-tr-none' 
                        : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-gray-100 flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message in English or Kashmiri..."
                  className="flex-1 px-6 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-kashmiri-saffron/50 transition-all"
                />
                <button 
                  onClick={handleSend}
                  className="bg-kashmiri-chinar text-white p-3 rounded-full hover:bg-red-800 transition-colors shadow-lg hover:shadow-xl active:scale-95"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
