import { AUTH_LOGIN, AUTH_DATA_CHANGE } from './types';

export const setAuthData = authData => {
  return {
    type: AUTH_DATA_CHANGE,
    payload: authData
  }
}

export const doLogin = (authData) => {
  const url = `https://www.google.com/?un=${authData.un}&pwd=${authData.pwd}`;
  const req = fetch(url);
  return {
    type: AUTH_LOGIN,

    payload: {
      promise: fetch(url, {
          method: 'get',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        }).then(function(res) {
          try
          {
            console.log("actions:doLogin:step.1");
            resjson = res.json();
            console.log("actions:doLogin:step.2");
            if(!resjson || !resjson.jwt)
            {
              console.log("actions:doLogin:ERROR:Server Error");
              return { jwt:null, errorMsg: "Server Error" };
            }
            console.log("actions:doLogin:SUCCESS");
            return { jwt:resjson.jwt, errorMsg: null };
          }
          catch(e) {
            console.log("actions:doLogin:ERROR:invalid Server response");
            return { jwt:null, errorMsg: "invalid Server response" }
          }
        }).catch(function(err)
        {
          console.log("actions:doLogin:ERROR:"+err);
          return { jwt:null, errorMsg:`Server Error:${err}` }    
        })
    }
   /*
    payload: req.then(res => {
      try {
        resjson = res.json();
        if(!resjson || !resjson.jwt)
        {
          console.log("actions:doLogin:ERROR:Server Error");
          return { jwt:null, errorMsg: "Server Error" }
        }
        console.log("actions:doLogin:SUCCESS");
        return { jwt:resjson.jwt, errorMsg: null };
      }
      catch(e) {
        console.log("actions:doLogin:ERROR:invalid Server response");
        return { jwt:null, errorMsg: "invalid Server response" }
      }
    }).catch(err => {
      console.log("actions:doLogin:ERROR:"+err);
      return { jwt:null, errorMsg:`Server Error:${err}` }
    })
    */
  };
};
