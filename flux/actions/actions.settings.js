import { SETTINGS_DATA_CHANGE } from './types';
import { expoBackendUrl } from '../../cfg/cfg';

export const setSettingsData = settingsData => {
  return {
    type: SETTINGS_DATA_CHANGE,
    payload: settingsData
  }
}

export const doSaveSettingsAndDispatch = (settingsData, jwt, dispatch) => {
  const url = `${expoBackendUrl}?region=${settingsData.region}&timewindow=${settingsData.timeWindow}&areaofinterest=${settingsData.areaOfInterest}&jwt=${jwt}`;
  var data = new FormData();
  data.append( "json", JSON.stringify({...settingsData, jwt}));
  const req = fetch(url,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',     //alternative: 'Content-Type': 'application/x-www-form-urlencoded'
          'Authorization': 'Bearer ' + jwt        //alternative: 'Authorization': 'Basic '+btoa(jwt)
        },
        method: "POST",
        body: JSON.stringify({...settingsData, jwt})  //alternative: data:FormData
    });
  req.then(res => {
    try {
      resjson = res.json();
      if(!resjson || !resjson.ok)
      {
        console.log("actions:doSaveSettingsAndDispatch:ERROR:Internal Server Error   url:"+url);
        return dispatch(setSettingsData({ ...settingsData, errorMsg: "Internal Server Error." }));
      }
      console.log("actions:doSaveSettingsAndDispatch:SUCCESS: "+JSON.stringify(resjson));
      return dispatch(setSettingsData({ ...settingsData, errorMsg: null }));
    }
    catch(e) {
      console.log("actions:doSaveSettingsAndDispatch:ERROR:invalid Server response   url:"+url);
      return dispatch(setSettingsData({ ...settingsData, errorMsg: "Invalid Server Response" }));
    }
  }).catch(err => {
    console.log("actions:doSaveSettingsAndDispatch:catch - ERROR:>"+err+"<   url:"+url);
    return dispatch(setSettingsData({ ...settingsData, errorMsg:`Server Error:${err}` }));
  });
}
