import {value_names} from "./../questions/question";

export function get_will_option_9_pdf(data, pdf)
{
    const children = data[value_names.children] === undefined ? [] : data[value_names.children];
    let children_name = "";
    for(var i = 0 ; i < children.length ; i++)
    {
        children_name += children[i].name + ", " + children[i].id_number + (i === children.length - 1 ? " " : "/");
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
    const paragraph_style = "page-break-inside: auto;margin-top: 15px;";
    const div_small_title_style = "  page-break-before: avoid; font-size: 20px;font-weight:bold;";
    const div_number_style="width: 60px;font-size: 20px;font-weight:bold;";
    const div_text_style = " page-break-before: avoid; font-size: 20px;font-weight:lighter;page-break-inside: auto;";
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
    <div style="margin-bottom: 210px;" ><div style='width:100%;'><div style="padding: 40px; padding-bottom: 0px; margin: auto; ${pdf === true ? `width: 100%;` : `width: 700px;`}">
    <p class="title" style="text-align: center; ${p_title_style}">
        <div style="text-align: center; ${p_title_style}">LAST WILL &amp; TESTAMENT OF</div>         
        <div style="text-align: center; ${p_title_style}">${data[value_names.user].name + " " + data[value_names.user].surname}</div>
        <div style="text-align: center; ${p_title_style}">(I.D. ${data[value_names.user].id_number})</div>
        <div style="text-align: center; ${p_title_style}">AND</div>         
        <div style="text-align: center; ${p_title_style}">${data[value_names.spouse].name}</div>
        <div style="text-align: center; ${p_title_style}">(I.D. ${data[value_names.spouse].id_number})</div>
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
                    <div class="testor_name" style='width: 100%; border-bottom: 1px solid #000; ${div_test_name_style}'>
                        <p style="padding-left: 50%; text-decoration:none; margin-left: -20px; margin-bottom: -10px;">And</p>
                    </div>
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
    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'column'; ">
            <div class="small_title" style="${div_style+div_small_title_style}"> Married( ${data[value_names.married_option]} )</div>
        </div>
    </div>
    
    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">
                1. 
            </div>
            <div style="${pdf === false ? `width: ${text_size}px;` : `margin-left: ${number_size}px;`} ">
                <div class="small_title" style="${div_style+div_small_title_style}">REVOCATION OF PREVIOUS WILLS: </div>
                <div class="text" style="${div_style+div_text_style}">
                    I hereby revoke, cancel and annul any and all testamentary acts and
                    Dispositions and/or Wills or Codicils made heretofore’ and declare this to
                    be my Last Will and Testament.
                </div>
            </div>
                
        </div>
    </div>

    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            
            <div class="number" style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}">
                2. 
            </div>
            <div style="${pdf === false ? `width: ${text_size}px;` : `margin-left: ${number_size}px;`} ">
                <div class="small_title" style="${div_style+div_small_title_style}">APPOINTMENT OF AN EXECUTOR/ EXECUTRIX: </div>
                
            </div>
                
        </div>
    </div>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}">2.1</p>
        <p class="text" style="${div_style+div_text_style}; margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 2}px;` : ""}"">
            We hereby nominate, constitute and appoint the survivor of us
            to be the Executor/Executrix and  Administrator/Adminstratrix of
            the estate of the first dying, granting unto him/her all such power
            and authority as is allowed in law and especially the power of
            assumption, and we hereby 
            Direct that our Executor/Executrix and  Administrator/Adminstratrix
            shall not be bound to furnish security to the Master of the High
            Court or any other official or officer in respect of his/her execution
            of this our Last Will and Testament and/or the administration of our
            Estates.
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}">2.2</p>
        <p class="text" style="${div_style+div_text_style}; margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 2}px;` : ""}"">
            In the event of our simultaneous deaths or our dying under such
            circumstances that it is impossible to ascertain which of us died
            first, then and in such event do we respectively direct as follows
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
                <div class="testor_name" style='width: 100%; border-bottom: 1px solid #000; ${div_test_name_style}'>
                    <p style="padding-left: 50%; text-decoration:none; margin-left: -20px; margin-bottom: -10px;">And</p>
                </div>
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
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 2}px;` : ""}">2.2.1</p>
        <p class="text" style="${div_style+div_text_style}; margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 3}px;` : ""}"">
            We appoint ${data[value_names.executor].name + ", " + data[value_names.executor].id_number + ", " + data[value_names.executor].address} to be our Executrix and
            Adminstratrix, granting unto her all such powers and
            authorities as are allowed in Law, including the powers of
            assumption. We direct that our said Executrix and
            Adminstratrix shall not be bound to furnish security to the
            Master of the High Court.
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto;   ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}">3. </p>
        <p class="text" style="${div_style+div_small_title_style}; page-break-before: avoid;  margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            POWER OF ASSUMPTION 
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto;   ">
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

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto;  ">
        <p style="${div_style+div_number_style} ${pdf === true ? ` margin-left: ${number_size * 0}px;` : ""}">4. </p>
        <p class="text" style="${div_style+div_small_title_style};  page-break-before: avoid; margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            APPOINTMENT OF HEIRS:
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
                <div class="testor_name" style='width: 100%; border-bottom: 1px solid #000; ${div_test_name_style}'>
                    <p style="padding-left: 50%; text-decoration:none; margin-left: -20px; margin-bottom: -10px;">And</p>
                </div>
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
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}">4.1</p>
        <p class="text" style="${div_style+div_text_style}; margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 2}px;` : ""}"">
            We hereby nominate, constitute and appoint the survivor of us to
            be the sole heir to the estate of the first-dying of us and we
            respectively hereby leave and bequeath the whole of our respective
            estates and effects whether movable or immovable, and whether in
            possession, reversion, expectancy or contingency and wheresoever
            same may be situated, both such as we may now possess or may in
            future become possessed of, nothing excepted to the survivor of us.
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}">4.2</p>
        <p class="text" style="${div_style+div_text_style}; margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 2}px;` : ""}"">
            In the event of our simultaneous deaths or our dying under such
            circumstances that it is impossible to ascertain which of us died
            first, then and in such event do we respectively direct as follows:-
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 2}px;` : ""}">4.2.1</p>
        <p class="text" style="${div_style+div_text_style}; margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 3}px;` : ""}"">
            we respectively hereby leave and bequeath the whole of our
            respective estates and effects whether movable or
            immovable, and whether in possession, reversion,
            expectancy or contingency and wheresoever same may be
            situated, both such as we may now possess or may in future
            become possessed of, nothing excepted to ${children_name} in Equal
            shares.     
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 2}px;` : ""}">4.2.2</p>
        <p class="text" style="${div_style+div_text_style}; margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 3}px;` : ""}"">
            we respectively hereby request that ${data[value_names.guard_appoint].name + ", " + data[value_names.guard_appoint].id_number}
            have dual signing powers and act in an administrative role
            with our CHILD/CHILDREN until they retain the age of 21
            years old respectively, in order to manage the funds
            effectively.     
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
                    <div class="testor_name" style='width: 100%; border-bottom: 1px solid #000; ${div_test_name_style}'>
                        <p style="padding-left: 50%; text-decoration:none; margin-left: -20px; margin-bottom: -10px;">And</p>
                    </div>
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
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}">4.3</p>
        <p class="text" style="${div_style+div_text_style}; margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 2}px;` : ""}"">
            In the event of our simultaneous death, and in event that we are not
            survived by our children, ${children_name},
            then and in such event do we respectively direct as follows :-   
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 2}px;` : ""}">4.3.1</p>
        <p class="text" style="${div_style+div_text_style}; margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 3}px;` : ""}"">
            we respectively hereby leave and bequeath the whole of our
            respective estates and effects whether movable or
            immovable, and whether in possession, reversion,
            expectancy or contingency and wheresoever same may be
            situated, both such as we may now possess or may in future
            become possessed of, nothing excepted to
            ${children_name}, in equal shares, share and share
            alike.
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}">5. </p>
        <p class="text" style="${div_style+div_small_title_style}; margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            EXCLUSION OF COMMUNITY OF PROPERTY AND MARITAL POWER
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}"></p>
        <p class="text" style="${div_style+div_text_style}; margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            We hereby expressly direct that any benefit accruing or being conferred
            on a beneficiary in terms of this our Will, will be excluded from the
            estate of any person the beneficiary may marry or may have married.
            Furthermore, we direct that it does not make a difference under which
            
            System a beneficiary marries; whether in community of property, out of
            Community of property or by the accrual system, the assets and their
            Increase/increased value through whatever course will be excluded from
            the estate of any person the beneficiary may or may have married - it
            will be for the sole benefit of the beneficiary.
        </p>
    </p>
    
    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}">6. </p>
        <p class="text" style="${div_style+div_small_title_style}; margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            APPOINTMENT OF GUARDIAN 
        </p>
    </p>
    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}"></p>
        <p class="text" style="${div_style+div_text_style}; margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            I nominate ${data[value_names.guard_appoint].name + ", " + data[value_names.guard_appoint].id_number}
            as the guardian of my minor children and failing his/her/their acceptance
            thereto, I nominate ${data[value_names.another_guard_appoint].name + ", " + data[value_names.another_guard_appoint].id_number}.
        </p>
    </p>

    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}">7. </p>
        <p class="text" style="${div_style+div_small_title_style}; margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            RESERVATION OF RIGHTS TO ALTER OR ADD TO WILL
        </p>
    </p>
    <p style="display:flex; flex-direction: 'row';page-break-inside: auto; ">
        <p style="${div_style+div_number_style} ${pdf === true ? `margin-left: ${number_size * 0}px;` : ""}"></p>
        <p class="text" style="${div_style+div_text_style}; margin-top: -60px; ${pdf === true ? `margin-left: ${number_size * 1}px;` : ""}"">
            We reserve to ourselves the right at any time hereafter to make all such
            Alterations in or additions to this our Will as we shall think fit, either at
            the foot hereof or by separate deed, desiring that all such alterations or
            additions made under our signatures shall be held at valid and effectual
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
</div> </div></div>
</body></html>`;
    return html;
}
