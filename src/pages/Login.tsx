import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import firebaseApp from "../firebase";

import {getAuth,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';

function App() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleEmailPasswordLogin = () => {}

  const handleGoogleAuth = () => { 
    const auth = getAuth(firebaseApp);
    const provider = new  GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    signInWithPopup(auth, provider)
    .then((result)=>{

      const credentials = GoogleAuthProvider.credentialFromResult(result);
      const token = credentials?.accessToken;
      const user = result.user;

      console.log(result);


    })
    .catch(error=>{
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...

      console.log(errorCode,errorMessage,email,credential);
    })

  }

  return (
    <MDBContainer fluid className="p-3 my-5" >
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
            value={email}
            onChange = {(e)=>{setEmail(e.target.value)}}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
            onChange = {(e)=>{setPassword(e.target.value)}}
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" onClick={()=>handleEmailPasswordLogin()}>
            Sign in
          </MDBBtn>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBBtn
            className="mb-4 w-100"
            size="lg"
            style={{ backgroundColor: "#3b5998" }}
          >
            <MDBIcon fab icon="facebook-f" className="mx-2" />
            Continue with facebook
          </MDBBtn>

          <MDBBtn
            className="mb-4 w-100"
            size="lg"
            style={{ backgroundColor: "#55acee"}}
            onClick = {()=>handleGoogleAuth()}
          >
            <MDBIcon fab icon="google" className="mx-2" />
            Continue with Google
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
