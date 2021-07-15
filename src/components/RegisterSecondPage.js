import React, {useEffect, useState} from 'react'
import './styles/RegisterSecondPage.css';
import Title from "./Title";
import HobbyHashtag from "./HobbyHashtag";
import db from '../firebase.config';

let options = []; //get from database

const RegisterSecondPage = ({username, setReg, reference, setReference, loggedOn, setUsername, setLoggedOn}) => {

    const [currentHobby, setCurrentHobby] = useState("#")
    const [display, setDisplay] = useState(false)
    const [currentOptions, setCurrentOptions] = useState([]);
    const [selectedHobbies, setSelectedHobbies] = useState([]);
    
    

        useEffect(() => {
        fetchOptions();
    }, [])

    const fetchOptions = async() => {
        const response = db.collection('existingHobbies');
        const data = await response.get();
        for (let i = 0; i < data.docs.length; i++){
            options.push(data.docs[i].data().hobbyName)
        }
        console.log(options)
    }

    const addHobbytoDatabase = async(hobbyName) => {
        const res = await db.collection('existingHobbies').add({
            hobbyName: hobbyName
          });
          
    }
    const addUserAndKnowstoDatabase = async(user, hobbiesList) => {
        const res = await db.collection("userHobbyList").add({
            username: user,
            knows: hobbiesList
        })
        setReference(res.id)
    }


    

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    async function setDisplayOff(){ 
        await timeout(150)
        setDisplay(false);
      }

    const typeCurrentHobby = (event) => {
        if (event.target.value == ""){
            setCurrentHobby("#")
        }
        else if (event.target.value[0] != "#"){
            
        }
        else if (event.target.value.includes(" ")){

        }
        else if (event.target.value.length >= 15){
            
        }
        else {
            setCurrentHobby(event.target.value);
            setCurrentOptions(options.filter((element) => {
                return (element.substring(0,event.target.value.length-1) === event.target.value.substring(1))
            }))
            
        }
        
    }
    const handleAdd = (event) => {
        if (currentHobby.length>= 5){
            if (!selectedHobbies.includes(currentHobby)){
        selectedHobbies.push(currentHobby);
        setCurrentHobby("#");
            }
        }
    }

    const saveToSelected = (event) => {
        setCurrentHobby("#"+event.textContent.substring(1));
    }

    const clickHashtag = (event) => {
        setSelectedHobbies(selectedHobbies.filter((e) => {return(e.substring(1) !== event.target.getAttribute("value"))}))
    }

    const checkAndGoToNextPage = () => {
        let tempArr = new Array();
        for (let i = 0; i < selectedHobbies.length; i++){
            if (options.indexOf(selectedHobbies[i].substring(1)) === -1){
                addHobbytoDatabase(selectedHobbies[i].substring(1))
                
            }
            tempArr.push(selectedHobbies[i].substring(1))
        }
        addUserAndKnowstoDatabase(username, tempArr)
    
        setReg(3);
    }

    const goBack = () => {
        setReg(1);
    }

    return (
        <div id="page">
            <button id="back-button" onClick = {goBack}className="form-submit-button"><h2 id="button-text">Back </h2></button>
            <Title text="hob" sup="ex"/>
            <h2>Register!</h2>
            <h4>What are some hobbies/skills you have?</h4>
            <h4>(This can be edited afterwards!)</h4>
            <div id="currentHobbies">
                {
                    selectedHobbies.map((v,i) => {
                        return ( <HobbyHashtag text={v} onClick={clickHashtag}/>)
                    })
                }
            </div>
            <button id="add-hobby-button" className="form-submit-button" onClick={(event) => {handleAdd(event)}}><h2 id="button-text">ADD!</h2></button>
            <div id="inputHobbies">
                <input autoComplete = "off" id="hobbyInput" value={currentHobby} type="text" onChange = {(event) => typeCurrentHobby(event)} onFocus={()=>setDisplay(true)} onBlur={setDisplayOff}></input>
                {display && (
                    <div className="autoContainer">
                        {
                            currentOptions.map((v,i) => {
                                return (<div className="choice" onClick = {(event) =>{saveToSelected(event.target)}}>
                                    #{v}
                                </div>)
                                        })
                                    }
                                    </div>
                            )}
                        </div>
            <button onClick = {checkAndGoToNextPage} className="form-submit-button"><h2 id="button-text">NEXT! </h2></button>
        </div>
            
                )
            }


/// <span className="choice-span" onClick = {(event) =>{saveToSelected(event.target)}}>{v}</span>
export default RegisterSecondPage
