import {value_names} from "./../questions/question";

export function get_will_option_11(data, pdf, isMirror)
{
    const full_name = data[value_names.user] !== undefined ? (data[value_names.user].name + " " + data[value_names.user].surname) : '';
    const date_of_birth=data[value_names.your_information] !== undefined ? data[value_names.your_information].birth_of_date: '';
    const country = data[value_names.your_information] !== undefined ? data[value_names.your_information].nationality : '';
    const passport_number = data[value_names.user] !== undefined ? data[value_names.user].id_number : '';
    const uae_id = data[value_names.your_information] !== undefined ? data[value_names.your_information].emirates_id : '';
    const address = data[value_names.address] !== undefined ? data[value_names.address].address : '';
    const spouse_name = data[value_names.spouse] !== undefined ? data[value_names.spouse].name : '';
    const spouse_date = data[value_names.spouse] !== undefined ? data[value_names.spouse].date_of_birth : '';
    const spouse_passport = data[value_names.spouse] !== undefined ? data[value_names.spouse].passport : '';
    const executor_name = data[value_names.executor] !== undefined ? data[value_names.executor].name : '';
    const executor_address = data[value_names.executor] !== undefined ? data[value_names.executor].address : "";
    const executor_nationality = data[value_names.executor] !== undefined ? data[value_names.executor].nationality : '';
    const executor_passport = data[value_names.executor] !== undefined ? data[value_names.executor].passport : '';
    let gender = "male";
    if(data[value_names.user] !== undefined && data[value_names.user].gender === "female")
        gender = "female";

    const alternative_executor_name = data[value_names.alternative_executor] !== undefined ? data[value_names.alternative_executor].name : '';
    const alternative_executor_address = data[value_names.alternative_executor] !== undefined ? data[value_names.alternative_executor].address : "";
    const alternative_executor_nationality = data[value_names.alternative_executor] !== undefined ? data[value_names.alternative_executor].nationality : '';
    const alternative_executor_passport = data[value_names.alternative_executor] !== undefined ? data[value_names.alternative_executor].passport : '';

    /*
    data[value_names.children] = [{
        name: "ABCD", 
        date_of_birth: "2019-12-3", 
        id_number: "1234", 
        nationality: "UAE",
    }, {
        name: "ABCD", 
        date_of_birth: "2019-12-3", 
        id_number: "1234", 
        nationality: "UAE",
    }]
    */
    let children_name = "";    
    let children_list = "";
    let children = data[value_names.children] !== undefined ? data[value_names.children] : [];
    for(var i = 0 ; i < children.length ; i++)
    {
        children_name += children[i].name + (i < children.length - 1 ? "/" : "");
        children_list += `<div>
            ${children[i].name}, born on the ${children[i].date_of_birth}, holder of an ${children[i].nationality} Passport, with Passport No. ${children[i].id_number};
        </div>`;
    }

    /*
    data[value_names.beneficiaries] = [{
        name: "ABCD", 
        date_of_birth: "2019-12-3", 
        id_number: "1234", 
        nationality: "UAE",
    }, {
        name: "ABCD", 
        date_of_birth: "2019-12-3", 
        id_number: "1234", 
        nationality: "UAE",
    }]
    */
    let beneficiaries_name = "";    
    let beneficiaries_list = "";
    let beneficiaries = data[value_names.beneficiaries] !== undefined ? data[value_names.beneficiaries] : [];
    for(var i = 0 ; i < beneficiaries.length ; i++)
    {
        beneficiaries_name += beneficiaries[i].name + (i < beneficiaries.length - 1 ? "/" : "");
        beneficiaries_list += `<div>
            ${beneficiaries[i].name}, born on the ${beneficiaries[i].date_of_birth}, holder of an ${beneficiaries[i].nationality} Passport, with Passport No. ${beneficiaries[i].id_number};
        </div>`;
    }
    
    const permanent_guardian = data[value_names.permanent_guardian] !== undefined ? data[value_names.permanent_guardian]: {};
    const temporary_guardian = data[value_names.temporary_guardian] !== undefined ? data[value_names.temporary_guardian]: {};
    const first_permanent_guardian_name = data[value_names.permanent_guardian] !== undefined ? data[value_names.permanent_guardian].name: '';
    const second_permanent_guardian_name = data[value_names.permanent_guardian] !== undefined ? data[value_names.permanent_guardian].second_name: '';
    const second_permanent_guardian_passport = data[value_names.permanent_guardian] !== undefined ? data[value_names.permanent_guardian].second_passport: '';
    const second_permanent_guardian_nationality = data[value_names.permanent_guardian] !== undefined ? data[value_names.permanent_guardian].nationality: '';

    const first_temporary_guardian_name = data[value_names.temporary_guardian] !== undefined ? data[value_names.temporary_guardian].name: '';
    const first_temporary_guardian_passport = data[value_names.temporary_guardian] !== undefined ? data[value_names.temporary_guardian].passport: '';
    const second_temporary_guardian_name = data[value_names.temporary_guardian] !== undefined ? data[value_names.temporary_guardian].second_name: '';
    const second_temporary_guardian_passport = data[value_names.temporary_guardian] !== undefined ? data[value_names.temporary_guardian].second_passport: '';

    const number_size = 60;
    const total_size = 700;
    const text_title_size = 120;
    const text_size = 700 - number_size;
    const witness_size_1_3 = (700 - number_size) / 5 * 3;
    const witness_size_1_2 = (700 - number_size) / 5 * 2;
    const witness_size_2 = (700 - number_size) / 3;
    const div_style = "line-height: 1.6; ";
    const p_style = "padding: 0px;";
    const p_title_style = "font-size: 34px;font-weight:bold;";
    const paragraph_style = "page-break-inside: avoid;margin-top: 20px;";
    const div_small_title_style = "font-size: 20px;font-weight:bold;";
    const div_number_style="width: 60px;font-size: 20px;font-weight:bold;";
    const div_text_title_style="width: 120px;font-size: 20px;font-weight:bold;";
    const div_text_style = "font-size: 20px;font-weight:lighter;";
    const div_test_name_style = "width: 100%; border-bottom: 2px solid #000;height: 30px;";
    const div_witness_style = "margin-top: 80px;";
    const div_flex = "flex: 1;";
    const html = `<div style='width:100%;'><div style="padding: 40px; margin: auto; ${pdf === true ? `width: 100%;` : `width: 700px;`}">
    <p class="title" style="text-align: center; ${p_title_style}">
        <div style="text-align: center; ${p_title_style}">
           Mirror Will
           
        </div> 
    </p>

    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="${div_style+div_text_style}">
            I ${full_name}, born on the ${date_of_birth}, 
            ${country} Citizen with Passport No. ${passport_number} and United Arab Emirates (UAE) Resident Card No. 
            ${uae_id}, Residing at ${address}, United Arab Emirates, in order to settle the succession of my estate upon my death do provide as follows, 
            namely:-
        </div>
    </div>
    
    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_text_title_style}">
                ONE: 
            </div>
            <div style="${pdf === false ? `width: ${total_size - text_title_size}px;` : `margin-left: ${text_title_size}px;`}">
                <div class="small_title" style="font-weight: bold; text-decoration: underline; ${div_style+div_small_title_style}">Declaration</div>
            </div>                
        </div>
    </div>
    <div class="paragraph" style="${div_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}"></div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                Being of sound and disposing mind and memory and over the age of twenty one (21) 
                years and not being actuated by any duress, menace, fraud, mistake, or undue influence, 
                do make, publish, and declare that this Will including the revocation provision hereinafter 
                contained is made for the purpose only of settling my properties situated or arising in the 
                UNITED ARAB EMIRATES  only. Any Wills made prior to this Will, relating to my estates in UAE  and 
                ${country} are now cancelled.
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_text_title_style}">
                TWO 
            </div>
            <div style="${pdf === false ? `width: ${total_size - text_title_size}px;` : `margin-left: ${text_title_size}px;`}">
                <div class="small_title" style="font-weight: bold; ${div_style+div_small_title_style}">
                    Appointment of Executors and Trustees
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">
                a. 
            </div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    I appoint my ${gender === "male" ? "WIFE" : "HUSBAND"}, ${spouse_name}, born on the ${spouse_date}, residing at ${address}, 
                    United Arab Emirates, holder of an ${country} Passport with Passport Number ${spouse_passport}, 
                    and with United Arab Emirates (UAE) Resident Identity Card no. ${uae_id} ,to be my executor and trustee, 
                    but if ${gender === "male" ? "SHE" : "HE"} is unable or unwilling to act or if ${gender === "male" ? "SHE" : "HE"} dies before proving my Will, the following 
                    provision shall apply instead.
                </div>
            </div>                
        </div>
    </div>
    <div class="paragraph" style="${div_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">
                b. 
            </div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                I appoint ${alternative_executor_name} with ${alternative_executor_nationality} Passport No. ${alternative_executor_passport} , 
                to act as my substitute executor and trustee. 
            </div>                
        </div>
    </div>
    <div class="paragraph" style="${div_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">
                c. 
            </div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    Any executors or trustees acting under my WILL are referred to as “my trustees”.
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_text_title_style}">
                THREE 
            </div>
            <div style="${pdf === false ? `width: ${total_size - text_title_size}px;` : `margin-left: ${text_title_size}px;`}">
                <div class="small_title" style="${div_style + div_text_style}">
                    I direct my trustees to make payment of my lawful debts and funeral expenses and of the expenses of winding up my estate.
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_text_title_style}">
                FOUR 
            </div>
            <div style="${pdf === false ? `width: ${total_size - text_title_size}px;` : `margin-left: ${text_title_size}px;`}">
                <div class="small_title" style="font-weight: bold; ${div_style+div_small_title_style}">
                    Letters of Wishes
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}"></div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="${div_style+div_text_style}">
                    I direct my trustees to give effect to any writings granted by me, 
                    however informal they may be provided they are signed by me, dated after the 
                    date hereof and are clearly expressive of my intention, as to which my trustees 
                    shall be the sole judges. Any bequests so made shall be free of interest, delivery
                     expenses and government taxes unless otherwise stipulated.
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_text_title_style}">
                FIVE 
            </div>
            <div style="${pdf === false ? `width: ${total_size - text_title_size}px;` : `margin-left: ${text_title_size}px;`}">
                <div class="small_title" style="font-weight: bold; ${div_style+div_small_title_style}">
                    Jurisdiction
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}"></div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="${div_style+div_text_style}">
                    It is expressly stipulated that this Will is in accordance with the United Arab Emirates
                    Article 17 of the Law of Civil Transactions promulgated by Federal Law No 5/1985, 
                    and the amendments thereto and the substantive provisions governing testamentary
                    disposition and other dispositions taking effect after my death shall be governed in
                    accordance with the provisions of this Will. Shariah Law shall not apply in any circumstances.
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_text_title_style}">
                SIX 
            </div>
            <div style="${pdf === false ? `width: ${total_size - text_title_size}px;` : `margin-left: ${text_title_size}px;`}">
                <div class="small_title" style="font-weight: bold; ${div_style+div_small_title_style}">
                    Religion & Faith
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}"></div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="${div_style+div_text_style}">
                    I confirm that I am of the Non-Muslim Religion.
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_text_title_style}">
            SEVEN 
            </div>
            <div style="${pdf === false ? `width: ${total_size - text_title_size}px;` : `margin-left: ${text_title_size}px;`}">
                <div class="small_title" style="font-weight: bold; ${div_style+div_small_title_style}">
                    Entitlements of Insurance Proceeds
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}"></div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="${div_style+div_text_style}">
                    I direct my trustees that all proceeds from any insurance policies shall 
                    be distributed according to the existing nomination/beneficiary form filled 
                    up by me and in the absence of such form, the following beneficiary provisions 
                    of this Will shall apply instead. 
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_text_title_style}">
            EIGHT 
            </div>
            <div style="${pdf === false ? `width: ${total_size - text_title_size}px;` : `margin-left: ${text_title_size}px;`}">
                <div class="small_title" style="font-weight: bold; ${div_style+div_small_title_style}">
                    Distribution of my Estate
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}"></div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="${div_style+div_text_style}">
                I direct my trustees to make over the whole residue and remainder of my means and estate, 
                moveable and non-moveable properties, all financial assets such as bank accounts, including savings, 
                current and fixed deposits and any other accounts, motorcycles, motor cars, art and antiques, jewels, 
                jewellery, furniture and fixtures, debentures, leasehold, bonds, security lockers, stocks, shares, 
                investments, inheritances, mutual funds, capital, death in service benefits, gratuity payments, reserves, 
                all insurance policies and any shareholding in any companies and any other assets to my ${gender === "male" ? "WIFE" : "HUSBAND"} ${spouse_name} absolutely.               
                </div>
            </div>                
        </div>
    </div>


    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_text_title_style}">
                NINE 
            </div>
            <div style="${pdf === false ? `width: ${total_size - text_title_size}px;` : `margin-left: ${text_title_size}px;`}">
                <div class="small_title" style="${div_style+div_text_style}">
                    If my ${gender === "male" ? "WIFE" : "HUSBAND"} ${spouse_name} does not survive me, but in such event only, 
                    I direct my trustees to make over the whole residue and remainder of my means and estate to the following manner:
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">(a)</div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="${div_style+div_text_style}">
                    The Residue of my estate is to be shared equally between my ${children.length > 1 ? "CHILDREN" : "CHILD"}, namely: 
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}"></div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="${div_style+div_text_style}">
                    ${children_list}
                    absolutely and in the event of them not surviving me or failing to take a vested interest, then to their children as shall survive 
                    me to share equally among them if more than one.                
                </div>
            </div>                
        </div>
    </div>


    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">(b)</div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="${div_style+div_text_style}">
                    If any part of the residue of my estate falls to a beneficiary who has not attained 
                    the age of twenty-one (21) years, my trustees shall hold the same in trust for this beneficiary 
                    until the age of twenty-one (21) years is attained.
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">(c)</div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="${div_style+div_text_style}">
                    Income arising from such share shall be accumulated but my trustees may apply all or part of 
                    the income or capital of this share for the maintenance, education or benefit of this beneficiary.
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}"></div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="${div_style+div_text_style}">
                    In the event of any of the foregoing shares of the residue remaining indisposed of by the 
                    preceding provisions, such share shall be distributed to the other beneficiaries pro rata 
                    according to their shares.
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_text_title_style}">
                TEN 
            </div>
            <div style="${pdf === false ? `width: ${total_size - text_title_size}px;` : `margin-left: ${text_title_size}px;`}">
                <div class="small_title" style="${div_style+div_text_style}">
                    If any part of my estate is held for a beneficiary who lacks full legal capacity, my trustees shall have power: -
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">a.</div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="${div_style+div_text_style}">
                    To pay or apply any part of the income or capital falling to that beneficiary 
                    for his or her benefit in any manner my trustees think proper.
                </div>
            </div>                
        </div>
    </div>
    <div class="paragraph" style="${div_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">b.</div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="${div_style+div_text_style}">
                    To retain the same until such capacity is attained, accumulating income with capital, or
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div style="width: ${total_size}px;">
                <div class="small_title" style="${div_style+div_text_style}">
                    To pay over the same to the legal guardian or the person for the time being having the custody 
                    of that beneficiary, whose receipt shall be a sufficient discharge to my trustees.
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_text_title_style}">
                ELEVEN 
            </div>
            <div style="${pdf === false ? `width: ${total_size - text_title_size}px;` : `margin-left: ${text_title_size}px;`}">
                <div class="small_title" style="${div_style+div_text_style}">
                
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">a.</div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="${div_style+div_text_style}">
                    My trustees shall have the fullest powers of retention, realisation, investment, appropriation, transfer 
                    of property without realisation, and management of my estate as if they were absolute owners and not trustees.                
                </div>
            </div>                
        </div>
    </div>
    <div class="paragraph" style="${div_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">b.</div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="${div_style+div_text_style}">
                    My trustees may appoint one or more executor of their own number to act as solicitor or agent 
                    in any other capacity and allow that trustee the same remuneration, as to which that trustee would have been entitled to.
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_text_title_style}">
                TWELVE 
            </div>
            <div style="${pdf === false ? `width: ${total_size - text_title_size}px;` : `margin-left: ${text_title_size}px;`}">
                <div class="small_title" style="font-weight: bold; ${div_style+div_small_title_style}">
                    Guardianship Appointments
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}"></div>
            <div style="${pdf === false ? `width: ${total_size - number_size}px;` : `margin-left: ${number_size}px`}">
                <div class="small_title" style="${div_style+div_text_style}">
                    Upon my demise, I appoint my ${gender === "male" ? "WIFE" : "HUSBAND"}  ${spouse_name} to act 
                    as permanent guardian of my ${children.length > 1 ? "CHILDREN" : "CHILD"}, ${children_name} and in the event of 
                    ${gender === "male" ? "HER" : "HIM"} predeceasing me or being unable or unwilling to act, I appoint my 
                     ${permanent_guardian.name} ,${permanent_guardian.nationality} Passport, with Passport No.${permanent_guardian.passport} , 
                     to act as permanent guardians.

                    I appoint ${temporary_guardian.name} with United Arab Emirates (UAE) Resident Identity Card No.
                    ${temporary_guardian.passport} , to act as interim guardian of my ${children.length > 1 ? "CHILDREN" : "CHILD"} and in the event of HIM 
                    predeceasing me or being unable or unwilling to act, I appoint ${temporary_guardian.second_name}, 
                    with United Arab Emirates (UAE) Resident Identity Card No. ${temporary_guardian.second_passport}, to act as interim 
                    guardian of my ${children.length > 1 ? "CHILDREN" : "CHILD"} if any of them are under the age of full capacity at the time of my death.                
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div style="width: ${total_size}px;">
                <div class="small_title" style="${div_style+div_text_style}">
                    This interim guardianship appointment will apply until the permanent guardians will 
                    be able to act and take over the custody of my ${children.length > 1 ? "CHILDREN" : "CHILD"}.            
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div style="width: ${total_size}px;">
                <div class="small_title" style="${div_style+div_text_style}">
                <b>FINALLY:</b> I declare that my country of domicile is ${country} and I am residing in the United Arab Emirates at the time of writing this Will.
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div style="width: ${total_size}px;">
                <div class="small_title" style="${div_style+div_text_style}">
                This document is executed as follows: -
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div style="width: ${total_size}px;">
                <div class="small_title" style="${div_style+div_text_style}">
                Dated this _________   day of ____________________   Two Thousand and Twenty.
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div style="width: ${total_size}px;">
                <div class="small_title" style="text-decoration: underline; ${div_style+div_text_style}">
                Signature of Testatrix
                </div>
            </div>                
        </div>
    </div>
</div> </div>`;
    return html;
}
