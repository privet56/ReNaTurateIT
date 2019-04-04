import { EVENT_CREATE, EVENT_CREATE_SUCCESS, EVENT_CREATE_ERROR } from './types';
import { expoBackendUrl } from '../../cfg/cfg';
import { makeAbs } from '../../components/util';
import { httpHeaders4BackendJsonApi } from '../../components/util';

export const createEventData = accessingServer => {
    return {
        type: EVENT_CREATE,
        payload: accessingServer
    }
}
export const createEventSuccessData = infoMsg => {
    return {
        type: EVENT_CREATE_SUCCESS,
        payload: infoMsg
    }
}
export const createEventErrorData = errorMsg => {
    return {
        type: EVENT_CREATE_ERROR,
        payload: errorMsg
    }
}
  
export const createEventAndDispatch = async (event, jwt, dispatch) => {

    dispatch(createEventData(true));

    const expoBackendUrl4Event = makeAbs(expoBackendUrl, "event");
    const url = `${expoBackendUrl4Event}?region=${event.region}&areaofinterest=${event.areaOfInterest}&jwt=${jwt}&title=${event.title}`;
    var data  = new FormData();
    data.append( "json", JSON.stringify({...event, jwt}));
    try
    {
        let res = (await fetch(url, {
            headers: httpHeaders4BackendJsonApi(jwt),
            method: "POST",
            body: JSON.stringify({...event, jwt})  //alternative: data:FormData
        }));
        if((res.status >= 200) && (res.status < 300))
        {
            //TODO: res.json();            
            console.log("actions:createEventAndDispatch:SUCCESS("+res.status+"): "+JSON.stringify(res));
            return dispatch(createEventSuccessData("Event created!"));
        }
        else
        {
            console.log("actions:createEventAndDispatch:ERROR("+res.status+"):Internal Server Error   url:"+url+"\n"+JSON.stringify(res));
            return dispatch(createEventErrorData("Internal Server Error"));
        }
    }
    catch(e)
    {
        console.log("actions:createEventAndDispatch:ERROR:invalid Server response   url:"+url+"\n"+e);
        console.log(e);
        return dispatch(createEventErrorData("Invalid Server Response"));
    }
}
