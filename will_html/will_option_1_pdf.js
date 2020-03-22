import {value_names} from "../questions/question";
import { ForceTouchGestureHandler } from "react-native-gesture-handler";

export function get_will_option_1_pdf(data, pdf)
{
    let appoint_estates = data[value_names.appoint_estate] === undefined ? [] : data[value_names.appoint_estate];
    let appoint_name = "";

    for(let i = 0 ; i < appoint_estates.length ; i++)
    {
        appoint_name = appoint_name + appoint_estates[i].name + " with " + appoint_estates[i].id_number + (i === appoint_estates.length - 1 ?  "" : " and ");
    }
    const year = new Date().getFullYear();
    const number_size = 60;
    const text_size = 700 - number_size;
    const witness_size_1_3 = (700 - number_size) / 5 * 3;
    const witness_size_1_2 = (700 - number_size) / 5 * 2;
    const witness_size_2 = (700 - number_size) / 3;
    const div_style = "line-height: 1.6; ";
    const p_style = "padding: 0px;";
    const p_title_style = "font-size: 34px;font-weight:bold; padding-bottom:20px;";
    const paragraph_style = "page-break-inside: avoid;margin-top: 15px;";
    const div_small_title_style = "font-size: 20px;font-weight:bold;";
    const div_number_style="width: 60px;font-size: 20px;font-weight:bold;";
    const div_text_style = "font-size: 20px;font-weight:lighter;";
    const div_test_name_style = "width: 100%; border-bottom: 2px solid #000;height: 30px;";
    const div_witness_style = "margin-top: 80px;";
    const div_flex = "flex: 1;";
    const footer = `
    position: fixed; 
    bottom: 0px; 
    left: 0px; 
    right: 0px;
    height: 250px; 
    padding: 40px;

    `;
    const html = `<html><head><style>
    @page :first { 
        @bottom-right {
            content: "Please turn over";
        }
        @bottom-left-corner {  }
        @bottom { content: "" }
        @bottom { content: "" }
    }
    </style></head><body>
    <div style="margin-bottom: 210px;" ><div style='width:100%;'><div style="padding: 40px; margin: auto; ${pdf === true ? `width: 100%;` : `width: 700px;`}">
    <p class="title" style="text-align: center; ${p_title_style}">
    <div style="text-align: center; ${p_title_style}">LAST WILL &amp; TESTAMENT</div> <div style="text-align: center; ${p_title_style}">OF</div> 
    <div style="text-align: center; ${p_title_style}">(I.D. ${data[value_names.user].id_number} )</div>
    <div style="text-align: center; ${p_title_style}">${data[value_names.user].name + " " + data[value_names.user].surname}</div>
    </p>

    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'column'; ">
            <div class="small_title" style="${div_style+div_small_title_style}"> I record that I am single ${data[value_names.user].gender} residing at ${data[value_names.address].address}</div>
        </div>
    </div>
    
    <footer style="${footer}">
        <div class="paragraph witness" style="z-index: -1; ${div_style+paragraph_style+div_witness_style}" >
            <div class="small_title" style="text-decoration: underline; ${div_style+div_small_title_style}">AS WITNESSES:- </div>
        </div>
        <div class="paragraph" style="${div_style+paragraph_style}" >
            <div style="display:flex; flex-direction: 'row'; ">
                <div class="number" style="${div_style+div_number_style}">
                    1. 
                </div>
                <div style="width: ${witness_size_1_3}px;">
                    
                </div>
                <div style="${pdf === false ? `width: ${witness_size_1_2}px;` : `margin-left: 60%;`}">
                    <div class="testor_name" style='width: 100%; text-decoration: underline; ${div_test_name_style}'> </div>
                    <div class="small_title" style="${div_style+div_small_title_style}">TESTATOR </div>      
                                        
                </div>                
            </div>
            <div style="display:flex; flex-direction: 'row'; ">
                <div class="number" style="${div_style+div_number_style}">
                    2. 
                </div>
                <div style="flex: 3;">
                    
                </div>
                <div style="flex: 2;">    
                                        
                </div>                
            </div>
        </div>
    </footer>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}">1. </p>
        <p class="text" style="${div_style+div_small_title_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            REVOCATION OF PREVIOUS WILLS:
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}"></p>
        <p class="text" style="${div_style+div_text_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            I hereby revoke, cancel and annul any and all testamentary acts and
            Dispositions and/or Wills or Codicils made heretofore, declare this to be
            my Last Will and Testament.
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}">2. </p>
        <p class="text" style="${div_style+div_small_title_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            APPOINTMENT OF AN EXECUTOR/ EXECUTRIX:
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}"></p>
        <p class="text" style="${div_style+div_text_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            I hereby appoint ${data[value_names.executor].name + " with " + data[value_names.executor].id_number + " of " + data[value_names.executor].address} to be my Executor, granting
            unto
            Him/her all such powers and authorities as are allowed in Law, including
            the powers of assumption. I direct that said Executror shall not be bound
            to furnish security to the Master of the High Court.
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}">3. </p>
        <p class="text" style="${div_style+div_small_title_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            POWER OF ASSUMPTION
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}"></p>
        <p class="text" style="${div_style+div_text_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            Should any person nominated as Executor in terms of this Will for any
            reason whatsoever decide to relinquish such office such person will be
            entitled to resign from such office and prior to resignation thereof in
            his/her absolute discretion assume a person of his/her choice to substitute
            him/her as Executor in terms of this Will.
        </p>
    </p>

    <footer style="${footer}">
        <div class="paragraph witness" style="z-index: -1; ${div_style+paragraph_style+div_witness_style}" >
            <div class="small_title" style="text-decoration: underline; ${div_style+div_small_title_style}">AS WITNESSES:- </div>
        </div>
        <div class="paragraph" style="${div_style+paragraph_style}" >
            <div style="display:flex; flex-direction: 'row'; ">
                <div class="number" style="${div_style+div_number_style}">
                    1. 
                </div>
                <div style="width: ${witness_size_1_3}px;">
                    
                </div>
                <div style="${pdf === false ? `width: ${witness_size_1_2}px;` : `margin-left: 60%;`}">
                    <div class="testor_name" style='width: 100%; text-decoration: underline; ${div_test_name_style}'> </div>
                    <div class="small_title" style="${div_style+div_small_title_style}">TESTATOR </div>      
                                        
                </div>                
            </div>
            <div style="display:flex; flex-direction: 'row'; ">
                <div class="number" style="${div_style+div_number_style}">
                    2. 
                </div>
                <div style="flex: 3;">
                    
                </div>
                <div style="flex: 2;">    
                                        
                </div>                
            </div>
        </div>
    </footer>
    
    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}">4. </p>
        <p class="text" style="${div_style+div_small_title_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            APPOINTMENT OF HEIRS:
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}"></p>
        <p class="text" style="${div_style+div_text_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            I respectively hereby leave and bequeath the whole of my estate and
            effects, whether movable or immovable, and whether in possession,
            reversion, expectancy or contingency and wheresoever same may be
            situated, both such as I may now possess or may in future become
            possessed of, nothing excepted to ${appoint_name} in Equal shares.
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}">5. </p>
        <p class="text" style="${div_style+div_small_title_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
             EXCLUSION OF COMMUNITY OF PROPERTY AND MARITAL POWER
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}"></p>
        <p class="text" style="${div_style+div_text_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            I hereby expressly direct that any benefit accruing or being conferred
            on a beneficiary in terms of this Will, will be excluded from the
            estate of any person the beneficiary may marry or may have married.
            Furthermore, I direct that it does not make a difference under which 
            System a beneficiary marries; whether in community of property, out of
            Community of property or by the accrual system, the assets and their
            Increase/increased value through whatever course will be excluded from
            the estate of any person the beneficiary may or may have married - it
            will be for the sole benefit of the beneficiary.
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}">6. </p>
        <p class="text" style="${div_style+div_small_title_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            RESERVATION OF RIGHTS TO ALTER OR ADD TO WILL
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}"></p>
        <p class="text" style="${div_style+div_text_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            I reserve the right at any time hereafter to make all such
            Alterations in or additions to this Will as I think fit, either at
            the foot hereof or by separate deed, desiring that all such alterations or
            additions made under my signature shall be held as valid and effectual
            as if they had been inserted herein.
        </p>
    </p>

    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div class="text" style="${div_style+div_text_style}">
            IN WITNESS HEREOF, we have hereunto set our hands at &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            on
            This day of &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, in the presence of the
            undersigned witnesses, being present at the same time.
        </div>
    </div>
    <footer style="${footer}; bottom: 40px;">
    <div class="paragraph witness" style="${div_style+paragraph_style+div_witness_style}" >
        <div class="small_title" style="text-decoration: underline; ${div_style+div_small_title_style}">AS WITNESSES:- </div>
    </div>
    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: row; ">            
            <div style="flex: 1; width: ${witness_size_2}px;">
                <div class="testor_name" style="${div_test_name_style + div_style}">        
                    1.
                </div>
                <div class="small_title" style="${div_style+div_small_title_style}">NAME &amp; ID NUMBER </div>             
            </div>
           
            <div style="flex: 1; width: ${witness_size_2}px;">
                
            </div>
            <div style="flex: 1; width: ${witness_size_2}px; ${pdf === true ? `margin-left: 60%;` : ""}">
                <div class="testor_name" style="${div_test_name_style + div_style}">      </div>      
                <div class="small_title" style="${div_style+div_small_title_style}">TESTATOR </div>              
            </div>                
        </div>
        <div style="display:flex; flex-direction: row; ">
            
            <div style="flex: 1; width: ${witness_size_2}px;">
                <div class="testor_name" style="${div_test_name_style + div_style}">         
                2. 
                </div>
                <div class="small_title" style="${div_style+div_small_title_style}">NAME &amp; ID NUMBER </div>             
            </div>
           
            <div style="flex: 1; width: ${witness_size_2}px;">
                
            </div>
            <div style="flex: 1; width: ${witness_size_2}px;">
                 
            </div>                
        </div>
    </div>
    </footer>
</div> </div> </div> 
</body></html>`;
    return html;
}
