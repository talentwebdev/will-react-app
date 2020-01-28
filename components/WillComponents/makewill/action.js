import {NEXT_WILL_DATA, INIT_WILL_DATA} from "./../../../reducer/types";
import {question} from "./../../../questions/question";

export function sendNextWillStep()
{
   return {type: NEXT_WILL_DATA, payload: { page: question, data: null }};
}

export function sendInitWillStep()
{
   return {type: INIT_WILL_DATA, payload: {pages: [], datas: [], will_data: {}}};
}