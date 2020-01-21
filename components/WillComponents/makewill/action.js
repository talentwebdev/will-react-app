import {NEXT_WILL_DATA} from "./../../../reducer/types";
import question from "./../../../questions/question";

export function sendNextWillStep()
{
   return {type: NEXT_WILL_DATA, payload: { page: question, data: null }};
}