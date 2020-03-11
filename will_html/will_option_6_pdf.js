import {value_names} from "../questions/question";

export function get_will_option_6_pdf(data, pdf)
{

    const beneficiaries = data[value_names.beneficiaries] === undefined ? [] : data[value_names.beneficiaries];
    let beneficiaries_name = "";
    for(var i = 0 ; i < beneficiaries.length ; i++)
    {
        beneficiaries_name += beneficiaries[i].name + ", " + beneficiaries[i].id_number + (i === beneficiaries.length - 1 ? " " : "/");
    }
    const year = new Date().getFullYear();
    const number_size = 60;
    const total_size = 700;
    const text_size = 700 - number_size;
    const witness_size_1_3 = (700 - number_size) / 5 * 3;
    const witness_size_1_2 = (700 - number_size) / 5 * 2;
    const witness_size_2 = (700 - number_size) / 3;
    const div_style = "line-height: 1.6; ";
    const p_style = "padding: 0px;";
    const p_title_style = "font-size: 34px;font-weight:bold; padding-bottom:20px;";
    const paragraph_style = "page-break-inside: avoid;margin-top: 25px;";
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
        <div style="text-align: center; ${p_title_style}">LAST WILL &amp; TESTAMENT OF</div> 
        <div style="text-align: center; ${p_title_style}">${data[value_names.user].name + " " + data[value_names.user].surname}</div>
        <div style="text-align: center; ${p_title_style}">(I.D. ${data[value_names.user].id_number})</div>
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
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}">1. </p>
        <p class="text" style="${div_style+div_small_title_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            REVOCATION OF PREVIOUS WILLS:
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}"></p>
        <p class="text" style="${div_style+div_text_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            I hereby revoke, cancel and annul any and all testamentary acts and
            Dispositions and/or Wills or Codicils made heretofore’ and declare this to
            be my Last Will and Testament.
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}">2. </p>
        <p class="text" style="${div_style+div_small_title_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            APPOINTMENT OF AN EXECUTOR/ EXECUTRIX: 
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}">2.1 </p>
        <p class="text" style="${div_style+div_text_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 2}px;` : ""}"">
            I hereby nominate, constitute and appoint ${data[value_names.spouse].name + ", " + data[value_names.spouse].id_number} to be the Executor/Executrix and
            Administrator/Adminstratrix of my estate, granting unto him/her
            all such power and authority as is allowed in law and especially the
            power of assumption, and I hereby Direct that my
            Executor/Executrix and Administrator/Adminstratrix shall not be
            bound to furnish security to the Master of the High Court or any
            other official or officer in respect of his/her execution of this my
            Last Will and Testament and/or the administration of my Estates.
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}">2.2 </p>
        <p class="text" style="${div_style+div_text_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 2}px;` : ""}"">
            In the event of our simultaneous deaths or ${data[value_names.spouse].name + ", " + data[value_names.spouse].id_number} predeceasing me , then and in such event I respectively direct
            as follows :-
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 2}px;` : ""}">2.2.1 </p>
        <p class="text" style="${div_style+div_text_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 3}px;` : ""}"">
            I hereby nominate, constitute and appoint ${data[value_names.executor].name + ", " + 
            data[value_names.executor].id_number + ", " + 
            data[value_names.executor].address} to be the Executor/Executrix and
            Administrator/Adminstratrix of my estate, granting unto him/her
            all such power and authority as is allowed in law and especially the
            power of assumption. I direct that my said Executrix/Executor
            andAdministrator / Adminstratrix shall not be bound to furnish
            security to the Master of the High Court.
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
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}">3.  </p>
        <p class="text" style="${div_style+div_small_title_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            POWER OF ASSUMPTION 
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}"></p>
        <p class="text" style="${div_style+div_text_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            Should any person nominated as Executor, Trustee or Guardian in terms
            of this Will for any reason whatsoever decide to relinquish such office
            such person will be entitled to resign from such office and prior to
            resignation thereof in his/her absolute discretion assume a person of his
            choice to substitute him/her as Executor, Trustee or Guardian in terms of
            this Will. In the event of a joint appointment the remaining nominee will
            be entitled to assume another person of his/her choice to succeed the
            person who cannot act.
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}">4.  </p>
        <p class="text" style="${div_style+div_small_title_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            APPOINTMENT OF HEIRS: 
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}">4.1  </p>
        <p class="text" style="${div_style+div_text_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 2}px;` : ""}"">
            I hereby leave and bequeath the whole of my estate and effects
            whether movable or immovable, and whether in possession,
            reversion, expectancy or contingency and wheresoever same may
            be situated, both such as I may now possess or may in future
            become possessed of, nothing excepted to ${data[value_names.spouse].name + " - " + beneficiaries_name} in Equal shares.
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
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}">4.2  </p>
        <p class="text" style="${div_style+div_text_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 2}px;` : ""}"">
            In the event that I am not survived by my Husband / Wife ${data[value_names.spouse].name + ", " + data[value_names.spouse].id_number} , than and in such event I
            bequeath the whole of my estate and effects, whether movable or
            immovable whether in possession, reversion, expectancy or
            contingency and wheresoever same may be situated, both such as I
            may now possess or may in future become possessed of, nothing
            excepted to, ${beneficiaries_name},
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}">4.3  </p>
        <p class="text" style="${div_style+div_text_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 2}px;` : ""}"">
            In the event that I am not survived by my Wife/Husband and/or
            Beneficiary, I respectively hereby leave and bequeath the whole of
            my estate and effects whether movable or immovable, and whether
            in possession, reversion, expectancy or contingency and
            wheresoever same may be situated, both such as I may now
            possess or may in future become possessed of, nothing excepted to
            ${beneficiaries_name}, in equal shares, share and
            share alike.
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}">5.  </p>
        <p class="text" style="${div_style+div_small_title_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            RESERVATION OF RIGHTS TO ALTER OR ADD TO WILL 
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}"> </p>
        <p class="text" style="${div_style+div_text_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            I reserve the right at any time hereafter to make all such
            Alterations in or additions to this Will as I think fit, either at
            the foot hereof or by separate deed, desiring that all such alterations or
            additions made under my signature shall be held at valid and effectual
            as if they had been inserted herein.
        </p>
    </p>
    
    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div class="text" style="${div_style+div_text_style}">
            IN WITNESS HEREOF, we have hereunto set our hands at 
            on
            This day of ${year}, in the presence of the
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
                <div class="small_title" style="${div_style+div_small_title_style}">TESTATOR/TESTATRIX </div>              
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
