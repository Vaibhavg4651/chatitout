import List from "./components/list/list"
import Chat from "./components/chat/chat"
import Detail from "./components/detail/detail"
import Login from "./components/login/login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./backend/firebase";
import { useUserStore } from "./backend/userStore";


function App() {

  const user = false;

  const {currentUser, fetchUserInfo, isLoading} = useUserStore()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, user => {
fetchUserInfo(user?.uid)  });

  return () => {
    unSub();
  };

} , [fetchUserInfo]);

if(isLoading) return <div className="isl">Loadijngg,,,,,</div>
  return (
    <>
      <div className="container">
{
  currentUser ? <>
        <List></List>
        <Chat></Chat>
        <Detail></Detail>
        </> : 
        <Login/>
}


       
      </div>
    </>
  )
}

export default App
