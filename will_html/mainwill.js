import {get_will_option_1} from "./will_option_1";
import {get_will_option_2} from "./will_option_2";
import {get_will_option_3} from "./will_option_3";
import {get_will_option_4} from "./will_option_4";
import {get_will_option_5} from "./will_option_5";
import {get_will_option_6} from "./will_option_6.js";
import {get_will_option_7} from "./will_option_7";
import {get_will_option_8} from "./will_option_8";
import {get_will_option_9} from "./will_option_9";
import {get_will_option_10} from "./will_option_10";

export function getWillHTML(willType, data)
{
    switch(willType)
    {
        case 1:
        {
            return get_will_option_1(data);
        }
        case 2:
        {
            return get_will_option_2(data);
        }
        case 3:
        {
            return get_will_option_3(data);
        }
        case 4:
        {
            return get_will_option_4(data);
        }
        case 5:
        {
            return get_will_option_5(data);
        }
        case 6:
        {
            return get_will_option_6(data);
        }
        case 7:
        {
            return get_will_option_7(data);
        }
        case 8:
        {
            return get_will_option_8(data);
        }
        case 9:
        {
            return get_will_option_9(data);
        }
        case 10: 
        {
            return get_will_option_10(data);
        }
        default: 
        {
            return "";
        }
    }
}