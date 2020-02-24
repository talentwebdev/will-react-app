import {get_will_option_1} from "./will_option_1";
import {get_will_option_2} from "./will_option_2";
import {get_will_option_3} from "./will_option_3";
import {get_will_option_4} from "./will_option_4";
import {get_will_option_5} from "./will_option_5";
import {get_will_option_6} from "./will_option_6";
import {get_will_option_7} from "./will_option_7";
import {get_will_option_8} from "./will_option_8";
import {get_will_option_9} from "./will_option_9";
import {get_will_option_10} from "./will_option_10";

export function getWillHTML(willType, data, pdf = false)
{
    switch(willType)
    {
        case 1:
        {
            return get_will_option_1(data, pdf);
        }
        case 2:
        {
            return get_will_option_2(data, pdf);
        }
        case 3:
        {
            return get_will_option_3(data, pdf);
        }
        case 4:
        {
            return get_will_option_4(data, pdf);
        }
        case 5:
        {
            return get_will_option_5(data, pdf);
        }
        case 6:
        {
            return get_will_option_6(data, pdf);
        }
        case 7:
        {
            return get_will_option_7(data, pdf);
        }
        case 8:
        {
            return get_will_option_8(data, pdf);
        }
        case 9:
        {
            return get_will_option_9(data, pdf);
        }
        case 10: 
        {
            return get_will_option_10(data, pdf);
        }
        default: 
        {
            return "";
        }
    }
}