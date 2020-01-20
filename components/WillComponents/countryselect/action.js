import { NEXT_WILL_DATA } from "./../../../reducer/types";
import question from "./../../../questions/question";

export function sendNextWillStep(location)
{
    if(location === "South Africa")
    {
        return { type: NEXT_WILL_DATA,  payload: {page: question.south_africa, data: location}};
    }
    else if(location === "UAE")
    {
        return { type: NEXT_WILL_DATA, payload: { page: question.uae, data: location}};
    }
}