import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import type { ChatMessage } from '../types';

const RobotIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V5m0 14v-1m-7-5h14a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2z" /></svg>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);


const AIChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    
    useEffect(() => {
        if(isOpen && messages.length === 0) {
            setTimeout(() => {
                setMessages([{ sender: 'ai', text: 'Здравствуйте! Я — ваш ИИ-консультант по ремонту трансмиссий. Чем могу помочь?'}])
            }, 300);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const handleSend = async () => {
        if (input.trim() === '' || isLoading) return;

        const userMessage = input;
        setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
        setInput('');
        setIsLoading(true);

        const aiResponse = await getAIResponse(userMessage);
        
        setMessages(prev => [...prev, { sender: 'ai', text: aiResponse }]);
        setIsLoading(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 gold-gradient w-20 h-20 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 z-50 hover:brightness-110"
                aria-label="Открыть чат с ИИ-консультантом"
            >
                <ChatIcon />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-[fadeIn_0.3s_ease-out]">
                    <div className="bg-[#121212] w-full max-w-lg h-[90vh] max-h-[700px] rounded-2xl shadow-2xl flex flex-col border border-gray-800">
                        <header className="p-4 border-b border-gray-800 flex justify-between items-center flex-shrink-0">
                            <div>
                                <h3 className="text-2xl font-bold gold-text font-brand-heading">ИИ-Консультант</h3>
                                <p className="text-xs text-gray-400">На базе Gemini AI</p>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white text-3xl">&times;</button>
                        </header>

                        <div className="flex-1 p-4 overflow-y-auto">
                            <div className="space-y-4">
                                {messages.map((msg, index) => (
                                    <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        {msg.sender === 'ai' && <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-black flex-shrink-0"><RobotIcon /></div>}
                                        <div className={`max-w-xs md:max-w-md p-3 rounded-2xl ${msg.sender === 'user' ? 'gold-gradient rounded-br-none' : 'bg-gray-800 text-gray-200 rounded-bl-none'}`}>
                                            <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex items-start gap-3 justify-start">
                                        <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-black flex-shrink-0"><RobotIcon /></div>
                                        <div className="max-w-xs p-3 rounded-2xl bg-gray-800 text-gray-200 rounded-bl-none">
                                            <div className="flex items-center space-x-1">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        <footer className="p-4 border-t border-gray-800 flex-shrink-0">
                            <div className="flex items-center bg-[#0a0a0a] rounded-full border border-gray-800 focus-within:border-gold-border transition-colors">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Опишите вашу проблему..."
                                    className="flex-1 bg-transparent px-5 py-3 text-gray-200 focus:outline-none"
                                    disabled={isLoading}
                                />
                                <button onClick={handleSend} disabled={isLoading} className="gold-gradient text-black p-2.5 rounded-full m-1 hover:brightness-110 disabled:bg-gray-600 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                </button>
                            </div>
                        </footer>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIChat;