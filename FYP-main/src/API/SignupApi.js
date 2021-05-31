import axios from 'axios';
import React from 'react';

const SignupApi=(FirstName, LastName, Email, Address, Password, ReEnterPassword)=>{
    // console.log(FirstName, LastName, Email, Address, Password, ReEnterPassword)
    const URL="http://192.168.10.8:8000/user/create"
    axios.post(URL,{
       FirstName: FirstName,
        LastName: LastName, 
        Email:Email,
        Address:Address,
        Password:Password,
        ReEnterPassword:ReEnterPassword
    }
    ) .then( (res)=>{
        alert(res)
    }
    )

    .catch( (error)=>{
        alert(error)
    })
}

export default SignupApi;