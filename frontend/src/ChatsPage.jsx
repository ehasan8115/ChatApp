import { PrettyChatWindow } from 'react-chat-engine-pretty';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ChatsPage = (props) => {
  const [chatToken, setChatToken] = useState(undefined);

  useEffect(() => {
    axios.get(
      'https://chatapp-react-node.onrender.com/get-user-chat-token',
      {
        params: {
          username: props.user.username,
          secret: props.user.secret
        }
      }
    )
    .then(r => setChatToken(r.data))
    .catch(e => console.log('error', e))
  }, [props.user]);

  if (!chatToken) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId="05205837-a4d9-4e65-95bb-92c1d424d9b7"
        chatToken={chatToken}
        style={{ height: '100vh' }}
      />
    </div>
  );
}

export default ChatsPage;
