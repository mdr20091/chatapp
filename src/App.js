import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.js';
import LoginForm from './components/LoginForm';

function App() {
  if (!localStorage.getItem('username') || localStorage.getItem(!'password')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="63505050-778f-4723-9710-aff7f775f6bf"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
