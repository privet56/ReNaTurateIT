export class Event
{
    areaOfInterest = null;
    createdAt = 0;
    createdBy = "";
    description = "";
    endDate = 0;
    id = 0;
    participants = [];
    region = null;
    startDate = 0;
    title = null;
    type = null;
    updatedAt = 0;
    updatedBy = null;
}
export const newEvent = (oldEvent) => {
    var e = new Event();
    if(!oldEvent)return e;
    for(var propName in oldEvent)
    {
        e[propName] = oldEvent[propName];   //TODO: deep copy! (if(Array.isArray(oldEvent[propName])))
    }
    return e;
};
