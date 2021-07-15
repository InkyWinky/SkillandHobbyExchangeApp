import React, {useEffect, useState} from 'react'
import './styles/RegisterThirdPage.css';
import Title from "./Title";
import HobbyHashtag from "./HobbyHashtag";
import db from '../firebase.config';

const RegisterSecondPage = ({setReg}) => {

    const [currentHobby, setCurrentHobby] = useState("#")
    const [display, setDisplay] = useState(false)
    const [currentOptions, setCurrentOptions] = useState([]);
    const [selectedHobbies, setSelectedHobbies] = useState([]);
    
    const [options, setOptions] = useState([]);

    // useEffect(() => {
    //     fetchOptions();
    // }, [])

    // const fetchOptions = async() => {
    //     const response = db.collection('existingHobbies');
    //     const data = await response.get();
    //     for (let i = 0; i < data.docs.length; i++){
    //         options.push(data.docs[i].data().hobbyName)
    //         console.log(data.docs[i].data())
    //     }
    // }

    // const addHobbytoDatabase = async(hobbyName) => {
    //     const res = await db.collection('existingHobbies').add({
    //         hobbyName: hobbyName
    //       });
          
    // }

    

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

        // DO WHEN NEXT BUTTON IS PRESSED, IT'S HERE FOR TESTING PURPOSES.
        // addHobbytoDatabase(currentHobby.substring(1)) // MAKE SURE TO ADD ONLY IF DATABASE DOES NOT CONTAIN IT.

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
        // Checking done here.
        setReg(4);
    }
    const goBack = () => {
        setReg(2);
    }

    return (
        <div id="page">
            <button onClick = {goBack}className="form-submit-button"><h2 id="button-text">Back </h2></button>
            <Title text="hobex | Register"/>
            <h4>What are some hobbies/skills you would like to learn?</h4>
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
            <button className="form-submit-button"><h2 id="button-text">NEXT! </h2></button>
        </div>
            
                )
            }


/// <span className="choice-span" onClick = {(event) =>{saveToSelected(event.target)}}>{v}</span>
export default RegisterSecondPage
