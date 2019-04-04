
export const hasMember = (o, sMemberName2Find) => {
    for(propName in o) {
        if(propName === sMemberName2Find) return true;
    }
    return false;
}
export const makeAbs = (s1, s2) => {

    if(!s2)return s1;
    if(!s1)return s2;
    
    let slash1 = (s1.lastIndexOf('/') === (s1.length-1));
    let slash2 = (s2.indexOf('/') === 0);

    if(!slash1 && !slash2)      //no slash
        return s1 + "/" + s2;
    if(slash1 && slash2)        //both have slash
        return s1 + s2.substring(1);
    if(slash1 || slash2)        //one slash
        return s1 + s2;

    console.log("makeAbs:ERR: unhandled("+slash1+"+"+slash2+"): '"+s1+"' <> '"+s2+"'");
    return s1 + s2;
}
export const httpHeaders4BackendJsonApi = (jwt) => {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',     //alternative: 'Content-Type': 'application/x-www-form-urlencoded'
        'Authorization': 'Bearer ' + jwt        //alternative: 'Authorization': 'Basic '+ btoa(jwt)
    }
}
export const removeArrayEle = (a, s) => {
    return a.filter(ele => ele != s);
}
export const addArrayEle = (a, s) => {
    if((typeof s) === 'undefined')
    {
        console.log("addArrayEle:ERR:!s:"+s);
        return [...a];
    }
    if(a.includes(s)) return [...a];
    return [...a, s];
}
