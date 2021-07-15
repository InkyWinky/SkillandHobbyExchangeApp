import React, {useState, useEffect} from 'react'
import Title from "./Title"
import "./styles/Mainpage.css"
import Profile from "./Profile";
import DirectMessagePage from './DirectMessagePage';
import db from '../firebase.config';

const Mainpage = ({username, logout}) => {

    const [page,setPage] = useState("Mainpage");
    const [hobbyList,setHobbyList] = useState([]);

    let userHobbyList = []
    let userKnowsList = []
    let userWTLList = []
    let matches = []

    useEffect(() => {
        fetchHobbyList();
    }, [])

    const fetchHobbyList = async() => {
        const response = db.collection('userHobbyList');
        const data = await response.get();
        for (let i = 0; i < data.docs.length; i++){
            userHobbyList.push(data.docs[i].data())
        }
        for (let i = 0; i < userHobbyList; i++){
            if (userHobbyList[i].username === username){
                userKnowsList.push(userHobbyList[i].knows) 
                userWTLList.push(userHobbyList[i].wantsToLearn)
        
            }
        }
        for (let i = 0; i < userHobbyList.length; i++){
            let knowsPassed = false;
            let wtlPassed = false;

            for (let j = 0; j < userHobbyList[i].knows.length; j++){
            if (userWTLList.indexOf(userHobbyList[i].knows[j]) !== -1){
                knowsPassed = true;
                break;
            }
            }

            for (let j = 0; j < userHobbyList[i].knows.length; j++){ // change the .knows to .wantsToLearn
                if (userWTLList.indexOf(userHobbyList[i].knows[j]) !== -1){ // change the others to the others
                    knowsPassed = true;
                    break;
                }
                }


        }
            
        
    }
    // yeah okay there's like, abit more
    // basically, with our "userKnowsList" and "userWTLList", I want you to check through userHobbyList and see.. gah damn it's hard to explain
    // 


    return (
        <div style ={{width:"100%" ,height:"100%", display:'flex', flexDirection:"column"}}>
            {page === "Mainpage" && <div style={{display:'flex', flexDirection:'column'}}><button onClick={ logout} style={{position:"absolute", top:"10px", left:"10px", width:"8%"}}className="form-submit-button"><h2 className="button-text">Logout</h2></button>
            <Title text="hob" sup="ex"/>
            <button onClick={()=>{setPage("Profile")}}className="form-submit-button"><h2 className="button-text">Profile</h2></button>
            <button id="connectButton" className="form-submit-button"><h2 className="button-text">CONNECT</h2></button>
            <button onClick={() => {setPage("DirectMessage")}}className="form-submit-button"><h2 className="button-text">Friends List!</h2></button></div>}

            {page === "Profile" && <Profile returnBack={()=>{setPage("Mainpage")}}/>}

            {page === "DirectMessage" && <DirectMessagePage username = {username} returnBack={() => {setPage("Mainpage")}}/>}
            <button onClick={() => {console.log(username)}}>USER</button>
            
            


            
        </div>
    )
}

export default Mainpage
