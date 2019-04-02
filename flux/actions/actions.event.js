import { EVENT_CREATE, EVENT_CREATE_SUCCESS, EVENT_CREATE_ERROR } from './types';
import { expoBackendUrl } from '../../cfg/cfg';

export const createEventData = eventData => {
    return {
        type: EVENT_CREATE,
        payload: eventData
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
  
export const createEventAndDispatch = (eventData, jwt, dispatch) => {
    console.log("//TODO:!");
}
