import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [fcmToken, setFcmToken] = useState('');
  const [loading, setLoading] = useState(false);
  const handlePushNotification =async(e)=>{
    e.preventDefault();
    setLoading(true);
    try{
      console.log("Sending notification ")
      let data = {
        title : title,
        body: body,
        deviceToken: fcmToken
      };
      console.log("Data = ",data)
      const result = await axios.post('http://localhost:3000/api/firebase/send-notification',data);
      console.log("Result - ",result)
      if(result.status ===200){
        toast.success(
          <div>
            Notification sent successfully!!
          </div>,
          { position: "top-right" }
        );
      }else{
          toast.error(
          <div>
            Failed to sent Notification !!
          </div>,
          { position: "top-right" }
        );
      }
    }catch(err){

    }
    console.log(title,body,fcmToken)
    setLoading(false);
  }
  return (

    <>
    <ToastContainer />
      <div className="container firebase-form p-4">
        <h1 className="mb-5">
          Firebase Push Notification
        </h1>
        <div className="row">
          <div className="col-md-6 mb-4" >
            <FloatingLabel
              controlId='floatingInput'
              className='full-width'
              label='Title'
            >
              <Form.Control
                type='text'
                placeholder='Title'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
            </FloatingLabel>
          </div>
          <div className="col-md-6 mb-4" >
            <FloatingLabel
              controlId='floatingBody'
              className='full-width'
              label='Body'
              
            >
              <Form.Control
                type='text'
                placeholder='Body'
                value={body}
                onChange={(e)=>setBody(e.target.value)}
              />
            </FloatingLabel>
          </div>
          <div className="col-md-6 mb-4" >
            <FloatingLabel
              controlId='floatingBody'
              className='full-width'
              label='FCM Token'
            >
              <Form.Control
                type='text'
                placeholder='FCM Token'
                 value={fcmToken}
                onChange={(e)=>setFcmToken(e.target.value)}
              />
            </FloatingLabel>
          </div>
          <div className="col-md-12">
            <Button variant="primary" size="lg" 
            className="full-width"
            onClick={handlePushNotification}
            disabled={loading}>
              {loading?'Sending...':'Send'}
              </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
