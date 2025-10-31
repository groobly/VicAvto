
export interface ContactSubmission {
  name: string;
  subject: string;
  phone: string;
  timestamp: string;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}
