import React, { useState } from 'react';
import classes from './LoginCard.module.css'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../Store/actions/auth'

const LoginCard = (props) => {

    const [authForm, setAuthForm]  = useState({
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
      })

    const inputChangedHandler = (event, id) => {
        const newObject = {
            ...authForm,
            [id]: {
                ...authForm[id],
                elementConfig: authForm[id].elementConfig,
                value: event.target.value,
                validation: checkValidity(event.target.value, authForm[id].validation),
                touched: true
            }
        }
        setAuthForm(newObject);
    }

    const checkValidity = () => {

    }

    const formElementsArray = [];
    for (let key in authForm) {
      formElementsArray.push({
        id: key,
        config: authForm[key],
      });
    }

    const form = formElementsArray.map(formElement => (
        <input
        key={formElement.id}
        onChange={(event) => inputChangedHandler(event, formElement.id)}
        placeholder={formElement.config.elementConfig.placeholder}
        value={formElement.config.value}
        className={classes.Input}
        type={formElement.config.elementConfig.type}
        />   
    ))

      const submitted = (event, email, password) => {
        event.preventDefault();
        props.onAuth(email, password)
      }
      
      const warning = (
        <div style={{fontSize: "15px", color: "red", padding: "0"}}>INCORRECT MAIL ADDRESS OR PASSWORD</div>
      )

    return (
        <div className={classes.LoginCard}>
            <h1 style={{paddingTop: '20px', fontSize: '40px'}}>Log-in Here</h1>
            
            <form onSubmit={(event) => submitted(event ,authForm.email.value, authForm.password.value)} className={classes.Form}>
            {props.error? warning: null}
                {form}
            <button className={classes.LoginButton}>LOG-IN</button>
            </form>
            <h3 style={{color: ' rgba(196, 196, 196, 0.842)', margin: '10px auto'}} >or</h3>
                <NavLink to="/signup"><button className={classes.SignupButton}>SIGN-UP</button></NavLink>
        </div>
    );
}

const mapStateToProps = state => {
  return {
     error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (email, password) => dispatch(actions.login(email, password))
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginCard));