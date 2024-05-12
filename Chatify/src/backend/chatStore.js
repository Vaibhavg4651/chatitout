import { create } from 'zustand'
import { db } from './firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useUserStore } from './userStore';
import { useChatStore } from './chatStore';



export const useChatStore = create((set) => ({
    chatId: null,
    user: true,
    isCurrentUserBlocked: true,
    isRecieverBlocked: true,
    changeChat: (chatId, user) => {
      const currentUser= useUserStore.getState().currentUser

  //CHECK CURRENRT USER BLOCKED
  if(user.blocked.includes(currentUser.id)){
    return set({
      isCurrentUserBlocked: true,
      chatId,
      user: null,
  isRecieverBlocked: false
    })
    }
  //CHECK CURRENRT RECIEVER BLOCKED
  else if(currentUser.blocked.includes(user.id)){
    return set({
      isCurrentUserBlocked:false,
      chatId,
    user: user, 
  isRecieverBlocked: true
    });

  }else{
      return set({
      chatId,
      user,
      isCurrentUserBlocked: false,
      isReceiverBlocked: false,
    });

  }
},

changeBlock: () => {
  set((state) => ({ ...state, isReceiverBlocked: !state.isReceiverBlocked }));
},
resetChat: () => {
  set({
    chatId: null,
    user: null,
    isCurrentUserBlocked: false,
    isReceiverBlocked: false,
  });
},
}));