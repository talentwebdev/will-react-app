import {NEXT_WILL_DATA, PREV_WILL_DATA} from "./../../../reducer/types";
import question from "./../../../questions/question";

export function sendNextWillStep(result, pagedata)
{
    if(result === "yes")
        return {type: NEXT_WILL_DATA, payload: { page: pagedata.yes, data: result }};
    else if(result === "no")
        return { type: NEXT_WILL_DATA, payload: { page: pagedata.no, data: result }};
}

export function sendPrevWillStep()
{
    return {type: PREV_WILL_DATA, payload: {}};
}