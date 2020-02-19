import { NEXT_WILL_DATA, PREV_WILL_DATA } from "./../../../reducer/types";

export function sendNextWillStep(location, pagedata)
{
    if(location === "South Africa")
    {
        return { type: NEXT_WILL_DATA,  payload: {page: pagedata.south_africa, data: location, will_data: { value: pagedata.value, data: location }}};
    }
    else if(location === "UAE")
    {
        return { type: NEXT_WILL_DATA, payload: { page: pagedata.uae, data: location, will_data: { value: pagedata.value, data: location }}};
    }
}

export function sendPrevWillStep()
{
    return {type: PREV_WILL_DATA, payload: {}};
}