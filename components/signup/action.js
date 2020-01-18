import {UPDATE_USERDATA} from "./../../reducer/types";

export function setUserData(user)
{
    return {type: UPDATE_USERDATA, payload: user};
}