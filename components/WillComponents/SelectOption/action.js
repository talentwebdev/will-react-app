import {NEXT_WILL_DATA, PREV_WILL_DATA} from "./../../../reducer/types";
import question from "./../../../questions/question";

export function sendNextWillStep(result, pagedata)
{
    return {type: NEXT_WILL_DATA, payload: { page: pagedata.next, data: result, will_data: {value: pagedata.value, data: result} }};
}

export function sendPrevWillStep()
{
    return {type: PREV_WILL_DATA, payload: {}};
}