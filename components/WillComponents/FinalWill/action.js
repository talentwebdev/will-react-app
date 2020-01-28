import {NEXT_WILL_DATA, PREV_WILL_DATA} from "./../../../reducer/types";
import question from "./../../../questions/question";

export function sendNextWillStep(data, pagedata)
{
    return {type: NEXT_WILL_DATA, payload: { page : null, data: null, will_data: {
        value: "will_type", data: data
    }}};
}
export function sendPrevWillStep()
{
    return {type: PREV_WILL_DATA, payload: {}};
}