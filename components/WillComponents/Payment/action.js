import {NEXT_WILL_DATA, PREV_WILL_DATA, FINAL_WILL_DATA} from "./../../../reducer/types";
import question from "./../../../questions/question";

export function sendPrevWillStep()
{
    return {type: PREV_WILL_DATA, payload: {}};
}

export function setFinalWill(data)
{
    return {type: FINAL_WILL_DATA, payload: data};
}