import React, { useState } from "react";
import classes from './SignupCard.module.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { connect } from 'react-redux'
import { checkValidity } from '../../utility/utility'
import * as actions from '../../Store/actions/auth'

const SignupCard = (props) => {
  const [warning, setWarning] = useState(null);
  const [authForm, setAuthForm] = useState({
    userName: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Username",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Email Address",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      value: "",
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
    confirmPassword: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Confirm Password",
      },
      value: "",
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
  });

  const inputChangedHandler = (event, id) => {
    const newObject = {
      ...authForm,
      [id]: {
        ...authForm[id],
        elementConfig: authForm[id].elementConfig,
        value: event.target.value,
        valid: checkValidity(event.target.value, authForm[id].validation),
        touched: true,
      },
    };
    setAuthForm(newObject);
  };

  const formElementsArray = [];
  for (let key in authForm) {
    formElementsArray.push({
      id: key,
      config: authForm[key],
    });
  }

  const form = formElementsArray.map((formElement) => (
    <input
      key={formElement.id}
      onChange={(event) => inputChangedHandler(event, formElement.id)}
      placeholder={formElement.config.elementConfig.placeholder}
      value={formElement.config.value}
      className={classes.Input}
      type={formElement.config.elementConfig.type}
    />
  ));

  const backHandler = () => {
    props.history.push("/");
  }


  const submit = (event) => {
    event.preventDefault()
    console.log("submit function executed");
    if(authForm.password.value === authForm.confirmPassword.value && authForm.email.valid && authForm.userName.valid && authForm.password.valid){
    console.log("is valid");
    setWarning(null)
      const signUpData = {
      name: authForm.userName.value,
      email: authForm.email.value,
      password: authForm.password.value
    }
    props.onSignUp(signUpData)
  }else{
    console.log("not valid");
    setWarning((<p style={{color: 'red'}}>INVALID DATA</p>)) 
  }
  }

  return (
    <div className={classes.LoginCard}>
        <div className={classes.HeaderContainer}>
            <button className={classes.BackButton} onClick={backHandler}><ArrowBackIosIcon/></button>
      <h1 style={{ fontSize: "40px", margin: '0' }}>Sign-up Here</h1>
      <div style={{width: '50px'}}></div>
      </div>
      <form onSubmit={submit} className={classes.Form}>
        {form}
        <button className={classes.LoginButton}>SIGN-UP</button>
      </form>
      {warning}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
      onSignUp: (signUp) => dispatch(actions.signUp(signUp))
  };
};


export default connect(null, mapDispatchToProps)(SignupCard);
