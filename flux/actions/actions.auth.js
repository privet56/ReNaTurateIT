import { AUTH_LOGIN, AUTH_DATA_CHANGE } from './types';
import { expoBackendUrl} from '../../cfg/cfg';

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
  const url = `${expoBackendUrl}?un=${authData.un}&pwd=${authData.pwd}`;
  const req = fetch(url);
  req.then(res => {
    try {
      resjson = res.json();
      if(!resjson || !resjson.jwt)
      {
        console.log("actions:doLoginAndDispatch:ERROR:Internal Server Error   url:"+url);
        return dispatch(setLoginData({ result:{jwt:null, errorMsg: "Internal Server Error" }}));
      }
      //console.log("actions:doLoginAndDispatch:SUCCESS: un:"+authData.un+" => jwt:"+resjson.jwt);
      return dispatch(setLoginData({ result:{jwt:resjson.jwt, errorMsg: null }}));
    }
    catch(e) {
      console.log("actions:doLoginAndDispatch:ERROR:invalid Server response   url:"+url);
      return dispatch(setLoginData({ result:{jwt:null, errorMsg: "Invalid Server Response" }}));
    }
  }).catch(err => {
    console.log("actions:doLoginAndDispatch:catch - ERROR:>"+err+"<   url:"+url);
    return dispatch(setLoginData({ result:{jwt:null, errorMsg:`Server Error:${err}` }}));
  });
}

export const doPromiseLogin = (authData) => {
  const url = `${expoBackendUrl}?un=${authData.un}&pwd=${authData.pwd}`;
  const req = fetch(url);

  return {
    type: AUTH_LOGIN,
    payload: req.then(res => {
      try {
        resjson = res.json();
        if(!resjson || !resjson.jwt)
        {
          console.log("actions:doPromiseLogin:ERROR:Server Error");
          return { jwt:null, errorMsg: "Server Error" };
        }
        //console.log("actions:doPromiseLogin:SUCCESS");
        return { jwt:resjson.jwt, errorMsg: null };
      }
      catch(e) {
        //console.log("actions:doPromiseLogin:ERROR:invalid Server response");
        return { jwt:null, errorMsg: "invalid Server response" };
      }
    }).catch(err => {
      //console.log("actions:doPromiseLogin:ERROR:"+err);
      return { jwt:null, errorMsg:`Server Error:${err}` };
    })
  };
};
