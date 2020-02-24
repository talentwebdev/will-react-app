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
import {get_will_option_11} from "./will_option_11";
import {get_will_option_12} from "./will_option_12";
import {get_will_option_13} from "./will_option_13";
import {get_will_option_14} from "./will_option_14";
import {get_will_option_15} from "./will_option_15";
import {get_will_option_16} from "./will_option_16";
import {get_will_option_17} from "./will_option_17";
import {get_will_option_18} from "./will_option_18";
import {get_will_option_19} from "./will_option_19";
import {get_will_option_20} from "./will_option_20";
import {get_will_option_21} from "./will_option_21";
import {get_will_option_22} from "./will_option_22";
import {get_will_option_23} from "./will_option_23";
import {get_will_option_24} from "./will_option_24";
import {get_will_option_25} from "./will_option_25";
import {get_will_option_26} from "./will_option_26";
import {get_will_option_27} from "./will_option_27";
import {get_will_option_28} from "./will_option_28";
import {get_will_option_29} from "./will_option_29";
import {get_will_option_30} from "./will_option_30";
import {get_will_option_31} from "./will_option_31";
import {get_will_option_32} from "./will_option_32";

export function getUAEWillHTML(willType, data, pdf = false)
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
        case 11: 
        {
            return get_will_option_11(data, pdf);
        }
        case 12: 
        {
            return get_will_option_12(data, pdf);
        }
        case 13: 
        {
            return get_will_option_13(data, pdf);
        }
        case 14: 
        {
            return get_will_option_14(data, pdf);
        }
        case 15: 
        {
            return get_will_option_15(data, pdf);
        }
        case 16: 
        {
            return get_will_option_16(data, pdf);
        }
        case 17: 
        {
            return get_will_option_17(data, pdf);
        }
        case 18: 
        {
            return get_will_option_18(data, pdf);
        }
        case 19: 
        {
            return get_will_option_19(data, pdf);
        }
        case 20: 
        {
            return get_will_option_20(data, pdf);
        }
        case 21: 
        {
            return get_will_option_21(data, pdf);
        }
        case 22: 
        {
            return get_will_option_22(data, pdf);
        }
        case 23: 
        {
            return get_will_option_23(data, pdf);
        }
        case 24: 
        {
            return get_will_option_24(data, pdf);
        }
        case 25: 
        {
            return get_will_option_25(data, pdf);
        }
        case 26: 
        {
            return get_will_option_26(data, pdf);
        }
        case 27: 
        {
            return get_will_option_27(data, pdf);
        }
        case 28: 
        {
            return get_will_option_28(data, pdf);
        }
        case 29: 
        {
            return get_will_option_29(data, pdf);
        }
        case 30: 
        {
            return get_will_option_30(data, pdf);
        }
        case 31: 
        {
            return get_will_option_31(data, pdf);
        }
        case 32: 
        {
            return get_will_option_32(data, pdf);
        }        
        default: 
        {
            return "";
        }
    }
}