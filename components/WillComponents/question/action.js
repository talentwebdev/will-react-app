import {NEXT_WILL_DATA, PREV_WILL_DATA} from "./../../../reducer/types";
import question from "./../../../questions/question";

export function sendNextWillStep(result, pagedata)
{
    if(result === "Yes" || result === "Dubai")
    {
        if(pagedata.value !== undefined)
            return {type: NEXT_WILL_DATA, payload: { page: pagedata.yes, data: result, will_data: {value: pagedata.value, data: result}}}
        return {type: NEXT_WILL_DATA, payload: { page: pagedata.yes, data: result }};
    }
    else if(result === "No" || result === "Abu Dhabi")
    {
        if(pagedata.value !== undefined)
            return {type: NEXT_WILL_DATA, payload: { page: pagedata.no, data: result, will_data: {value: pagedata.value, data: result}}}
        return {type: NEXT_WILL_DATA, payload: { page: pagedata.no, data: result }};
    }
}

export function sendPrevWillStep()
{
    return {type: PREV_WILL_DATA, payload: {}};
}