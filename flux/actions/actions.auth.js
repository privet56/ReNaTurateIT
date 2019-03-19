import { AUTH_LOGIN, AUTH_DATA_CHANGE } from './types';

export const setAuthData = authData => {
  return {
    type: AUTH_DATA_CHANGE,
    payload: authData
  }
}
export const setLoginData = authLoginData => {
  return {
    type: AUTH_LOGIN,
    payload: authLoginData
  }
}

export const doLoginAndDispatch = (authData, dispatch) => {
  const url = `https://www.google.com/?un=${authData.un}&pwd=${authData.pwd}`;
  const req = fetch(url);
  req.then(res => {
    try {
      resjson = res.json();
      if(!resjson || !resjson.jwt)
      {
        //console.log("actions:doLogin:ERROR:Internal Server Error");
        return dispatch(setLoginData({ result:{jwt:null, errorMsg: "Internal Server Error" }}));
      }
      //console.log("actions:doLogin:SUCCESS: un:"+authData.un+" => jwt:"+resjson.jwt);
      return dispatch(setLoginData({ result:{jwt:resjson.jwt, errorMsg: null }}));
    }
    catch(e) {
      //console.log("actions:doLogin:ERROR:invalid Server response");
      return dispatch(setLoginData({ result:{jwt:null, errorMsg: "Invalid Server Response" }}));
    }
  }).catch(err => {
    //console.log("actions:doLogin:catch - ERROR:"+err);
    return dispatch(setLoginData({ result:{jwt:null, errorMsg:`Server Error:${err}` }}));
  });
}

export const doPromiseLogin = (authData) => {
  const url = `https://www.bla.com/?un=${authData.un}&pwd=${authData.pwd}`;
  const req = fetch(url);

  return {
    type: AUTH_LOGIN,
    payload: req.then(res => {
      try {
        resjson = res.json();
        if(!resjson || !resjson.jwt)
        {
          //console.log("actions:doLogin:ERROR:Server Error");
          return { jwt:null, errorMsg: "Server Error" };
        }
        //console.log("actions:doLogin:SUCCESS");
        return { jwt:resjson.jwt, errorMsg: null };
      }
      catch(e) {
        //console.log("actions:doLogin:ERROR:invalid Server response");
        return { jwt:null, errorMsg: "invalid Server response" };
      }
    }).catch(err => {
      //console.log("actions:doLogin:ERROR:"+err);
      return { jwt:null, errorMsg:`Server Error:${err}` };
    })
  };
};
