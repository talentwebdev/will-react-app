import {NEXT_WILL_DATA} from "./../../../reducer/types";
import question from "./../../../questions/question";

export function sendNextWillStep()
{
    /*
    if(location === "South Africa")
    {
        return {type: NEXT_WILL_STEP, payload: { page: question.south_africa, data: location }};
    }
    else
    {
        return {type: NEXT_WILL_STEP, payload: { page: question.uae, data: location }};
    }
    */
   return {type: NEXT_WILL_DATA, payload: { page: question, data: "" }};
}