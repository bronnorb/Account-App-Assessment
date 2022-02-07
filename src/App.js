import './App.css';
import {  Header, Body } from './components'
import React, { useState } from 'react';
import { validateInputs } from './helpers'


function App() {
  //state to determine if user is being edited or not
  let [edit, setEdit] = useState(false);

  //state to store all errors in form
  let[formErrors, setFormErrors] = useState({});

  //state to store user details
  let [user, setUser] = useState({
    firstName:'person',
    lastName:'person',
    email:'person@email.com',
    phoneNo:'0400000000',
    postcode:'0000',
    state:'Select state',
    companyName:'',
    abn:'',
    hourlyRate: 1,
    dob: new Date().toISOString().slice(0, 10),
  });

  //state to store new details from the form
  let [newUser, setNewUser] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNo: user.phoneNo,
    postcode: user.postcode,
    state: user.state,
    companyName: user.companyName,
    abn: user.abn,
    hourlyRate: user.hourlyRate,
    dob: user.dob,
  })

  //function to handle all input changes
  function onInputChange(e){
    const { name, value } = e.target;
    setNewUser({...newUser, [name]: value});
  }

  //function to validate inputs when user has tabbed away from field
  function onBlurInput(){
    setFormErrors(validateInputs(newUser));
  }

  //function that checks if there are no errors and updates user
  //details if so
  function onSave(){
    if(Object.keys(formErrors).length === 0){
      let newUserDetails = {...newUser};
      setUser(newUserDetails);
      setEdit(false);
    }
  }

  //function that updates the new user and errors state to default
  //when user clicks back
  function onCancel(){
    let currentUser = {...user};
    setNewUser(currentUser);
    setFormErrors({});
  }

  return (
    <div>
      <Header 
        edit={edit} 
        setEdit={setEdit} 
        onSaveClick={onSave} 
        onCancelClick={onCancel}/>
      <Body 
        user={user} 
        newUser={newUser} 
        onInputChange={onInputChange} 
        errors={formErrors} 
        onValidateInput={onBlurInput} 
        edit={edit} />
    </div>
  );
}

export default App;
