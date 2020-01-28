import {NEXT_WILL_DATA, PREV_WILL_DATA} from "./../../../reducer/types";
import question from "./../../../questions/question";

export function sendNextWillStep(data, pagedata)
{
    return {type: NEXT_WILL_DATA, payload: { page: pagedata.next, data: data, will_data: {value: pagedata.value, data: data}}}
}

export function sendPrevWillStep()
{
    return {type: PREV_WILL_DATA, payload: {}};
}