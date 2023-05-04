import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {

    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId="05205837-a4d9-4e65-95bb-92c1d424d9b7"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100vh' }}
            />
        </div>
    )
}

export default ChatsPage;