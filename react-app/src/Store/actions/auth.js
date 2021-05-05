import * as actionTypes from "./actionTypes";
import axios from "axios";

export const loginSuccess = (loginData) => {
    // localStorage.setItem("id", loginData.id);
    // localStorage.setItem("name", loginData.name);
    // localStorage.setItem("email", loginData.email);
    localStorage.setItem("token", loginData);
    return {
        type: actionTypes.LOGIN_SUCCESS,
        isLoggedIn: true,
        token: loginData
    };
};

export const logoutSuccess = () => {
        localStorage.removeItem("token");
        // localStorage.removeItem("id");
        // localStorage.removeItem("name");
        // localStorage.removeItem("email");
    
    return {
        type: actionTypes.LOGOUT_SUCCESS,
        isLoggedIn: false,
        token: null,
        error: false
    };
};

export const signUp = (signUpData) => {
    return dispatch => {
        console.log(signUpData);
        axios.post("http://127.0.0.1:8000/register", signUpData)
        .then(res => {
            console.log(res);
            dispatch(login(signUpData.email, signUpData.password))
        })
    }
}

export const checkLoggedin = () => {
    return dispatch => {
    const loggedIn = localStorage.getItem("token");
    console.log(loggedIn);
    if(loggedIn){
        dispatch(loginSuccess())
    }else {
       dispatch(logout())
    }
}
};

export const logout = () => {
    return dispatch => {
            dispatch(logoutSuccess());
    };
};

export const setAuthRedirectPath = path => {
    return {
        type: actionTypes.SET_REDIRECT_PATH,
        path: path
    };
};

export const loginFail = () => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: true
    };
}

export const login = (email, password) => {
    return dispatch => {
        console.log(
            "the email is  " + email + "\nand the password is  " + password
        );
        const postRequest = { email: email, password: password };
        axios
            .post("http://127.0.0.1:8000/api/login", postRequest)
            .then(res => {
                console.log(res);
                if (res.data.token) {
                    dispatch(setAuthRedirectPath("/home"));
                    dispatch(loginSuccess(res.data.token));
                }else{
                    console.log("auth failed");
                    dispatch(loginFail());
                }

                // props.history.push("/home");
            })
            .catch(err => {
                console.log(err.message);
            });
    };
};
