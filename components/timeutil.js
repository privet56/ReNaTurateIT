//Ms = ms = MilliSeconds

export const Date2Ms = (date, bwithDefault) => {
    if(!date) return bwithDefault ? ((new Date()).getTime()) : 0;
    if(typeof date === "string")
    {
        date = new Date(date);
    }
    return date.getTime();
};
export const Ms2Date = (ms, bwithDefault) => {
    if(!ms) return bwithDefault ? new Date() : null;
    return new Date(ms);
};
