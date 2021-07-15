import React from 'react'
import './styles/Profile.css'
import Button from '@material-ui/core/Button';
import { Col, Container, Row, Modal } from 'react-bootstrap';
import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import { Fab } from '@material-ui/core'; 
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'; 

const Profile = (props) =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <Button onClick={props.returnBack}>Back</Button>
            <Row>
                
                <Col lg={1} md={1} sm={1} xs={1}>
                </Col>
                <Col lg={10} md={10} sm={10} xs={10}>
                    <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    marginTop:"50px",
                    marginBottom:"20px"
                    }}>
                        <img style={{width:"120px", height:"120px", borderRadius:"80px", textAlign:"left"}}
                        src="https://static-00.iconduck.com/assets.00/perm-identity-icon-512x512-zh35m5ch.png"/>
                    </div>

                    <div>
                        <h4 className="Profile" style={{textAlign:"center", fontSize:"30px"}}>User Name</h4>
                    </div>
                    
                    <div style={{textAlign:"center", marginTop:"20px", marginBottom:"20px"}}>
                        <font className="Profile" style={{fontSize:"large"}}>knows...</font>
                    </div>

                    <Card style={{backgroundColor:"white", marginTop:"20px", marginBottom:"20px", height:"100px"}}>
                        <CardContent>
                            <CardActions>
                                <Fab variant="extended" size="small" className="Profile, Hastags" style={{fontSize:"12px"}}>
                                    #Something
                                </Fab>
                                <Fab variant="extended" size="small"className="Profile, Hastags" style={{fontSize:"12px"}}>
                                    #SomethingElse
                                </Fab>
                            </CardActions>
                        </CardContent>
                    </Card>

                    <div style={{textAlign:"center", marginTop:"20px", marginBottom:"20px"}}>
                        <font className="Profile" style={{Profile, fontSize:"large"} }>Would like to learn...</font>
                    </div>

                    <Card style={{backgroundColor:"white", marginTop:"20px", marginBottom:"20px", height:"100px"}}>
                        <CardContent>
                            <CardActions>
                                <Fab variant="extended" size="small" className="Profile, Hastags" style={{fontSize:"12px"}}>
                                    #Something
                                </Fab>
                            </CardActions>
                        </CardContent>
                    </Card>

                    <div style={{textAlign:"center"}}>
                        <Fab variant="extended" color="#04d026" className="Profile" onClick={handleShow} id="form-submit-button">
                            <EditIcon /> &nbsp; Edit Profile
                        </Fab>
                    </div>
                </Col>
                <Modal show={show} onHide={handleClose} className="Profile" style={{top:"7%"}}>
                    <Modal.Header>
                    <Modal.Title className="Profile">Edit your profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row  style={{marginTop:"20px", marginBottom:"20px"}}>
                            <Col lg={4} md={4} sm={4} xs={4} style={{margin:"0px", paddingTop:"15px"}}>
                                <font className="Profile" style={{width:"50px", height:"48px"}}> Username:</font>
                            </Col>
                            <Col lg={8} md={8} sm={8} xs={8}>
                                <TextField className="Profile" required id="standard-required" label="Required" defaultValue="User Name" />
                            </Col>
                        </Row>
                        <Row  style={{marginTop:"20px", marginBottom:"20px"}}>
                            <Col lg={4} md={4} sm={4} xs={4} style={{margin:"0px"}}>
                                <font style={{width:"50px", height:"48px"}}>Your Hobby</font>
                            </Col>
                            <Col lg={8} md={8} sm={8} xs={8}>
                                <TextField required id="standard-required" placeholder="Search here!"/>
                            </Col>
                        </Row>
                        <Card style={{height:"100px"}}>
                            <CardContent className="Profile">
                                <CardActions>
                                    <Fab variant="extended" size="small" className="Profile, Hastags" style={{fontSize:"12px"}}>
                                        #Something <ClearIcon style={{fontSize:"small"}}/>
                                    </Fab>
                                    <Fab variant="extended" size="small"className="Profile, Hastags" style={{fontSize:"12px"}}>
                                        #SomethingElse <ClearIcon style={{fontSize:"small"}}/>
                                    </Fab>
                                </CardActions>
                            </CardContent>
                        </Card>
                        <Row  style={{marginTop:"20px", marginBottom:"20px"}}>
                            <Col lg={4} md={4} sm={4} xs={4} style={{margin:"0px"}}>
                                <font className="Profile" style={{width:"50px", height:"48px"}}>Future Hobby</font>
                            </Col>
                            <Col lg={8} md={8} sm={8} xs={8} >
                                <TextField className="Profile" required id="standard-required" placeholder="Search here!" />
                            </Col>
                        </Row>
                        <Card style={{height:"100px"}}>
                            <CardContent className="Profile">
                                <CardActions>
                                    <Fab variant="extended" size="small" className="Profile, Hastags" style={{fontSize:"12px"}}>
                                        #Something <ClearIcon style={{fontSize:"small"}}/>
                                    </Fab>
                                    <Fab variant="extended" size="small"className="Profile, Hastags" style={{fontSize:"12px"}}>
                                        #SomethingElse <ClearIcon style={{fontSize:"small"}}/>
                                    </Fab>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Col lg={1} md={1} sm={1} xs={1}>
                </Col>
            </Row>
            
        </Container>
        
    )
}

export default Profile

// {/* {username && username.map(Username=>{
//                         return( */}
//                             <div>
//                             <h4 className="Profile" style={{textAlign:"center", fontSize:"30px"}}>username</h4>
//                         </div>
//     {/*                             
//                             )})
//                         }
//                          */}

// const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const [hashtags, setHashtags] = useState([]);
//     const [wantHashtags, setwantHashtags] = useState([])
//     const [username, setUsername] = useState([])

//     useEffect(() => {
//         fetchhastags();
//     }, [])

//     const fetchhastags = async() => {
//         const response = db.collection('userHobbyList');
//         const data = await response.get();
//         for (let i = 0; i < data.docs.length; i++){
//             hashtags.push(data.docs[i].data().knows)
//             wantHashtags.push(data.docs[i].data().wantsToLearn)
//             username.push(data.docs[i].data().username)
//         }
//     }

//     const addHashtagsToDatabase = async(inputknows, inputwantsToLearn, inputusername) => {
//         const res = await db.collection('userHobbyList').add({
//             knows: inputknows,
//             wantsToLearn: inputwantsToLearn,
//             username: inputusername
//           });
          
//     }

// import React from 'react'
// import './styles/Profile.css'
// import Button from '@material-ui/core/Button';
// import { Col, Container, Row, Modal } from 'react-bootstrap';
// import { useState,useEffect  } from "react";
// import TextField from '@material-ui/core/TextField';
// import { Fab } from '@material-ui/core'; 
// import EditIcon from '@material-ui/icons/Edit';
// import ClearIcon from '@material-ui/icons/Clear';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import db from '../firebase.config';