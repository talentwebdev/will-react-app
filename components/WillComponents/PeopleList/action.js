import { NEXT_WILL_DATA, PREV_WILL_DATA } from "../../../reducer/types";

export function sendNextWillStep(children, pagedata)
{
    return {type: NEXT_WILL_DATA, payload: {page: pagedata.next, data: children}};
}

export function sendPrevWillStep()
{
    return {type: PREV_WILL_DATA, payload: {}};
}