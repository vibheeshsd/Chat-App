import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversation';

const Conversations = () => {

const {loading, conversations} = useGetConversations();
console.log("Convo", conversations);
  return (
    <div className=' py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation = {conversation}
          lastIdx = { idx === conversation.length - 1}
        />
      ))}
    </div>
  )
}

export default Conversations;


// const Conversations = () => {
//   return (
//     <div className=' py-2 flex flex-col overflow-auto'>
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//     </div>
//   )
// }

// export default Conversations