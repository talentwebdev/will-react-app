import {value_names} from "./../questions/question";

export function get_will_option_23(data)
{
    const full_name = data[value_names.user] !== undefined ? data[value_names.user].name : '';
    const date_of_birth=data[value_names.your_information] !== undefined ? data[value_names.your_information].birth_of_date: '';
    const country = data[value_names.your_information] !== undefined ? data[value_names.your_information].nationality : '';
    const passport_number = data[value_names.user] !== undefined ? data[value_names.user].id_number : '';
    const uae_id = data[value_names.your_information] !== undefined ? data[value_names.your_information].emirates_id : '';
    const address = data[value_names.address] !== undefined ? (data[value_names.address].address + " " + data[value_names.address].city): '';
    const executor_name = data[value_names.executor] !== undefined ? data[value_names.executor].name : '';
    const executor_address = data[value_names.executor] !== undefined ? data[value_names.executor].address : "";
    const executor_nationality = data[value_names.executor] !== undefined ? data[value_names.executor].nationality : '';
    const executor_passport = data[value_names.executor] !== undefined ? data[value_names.executor].passport : '';

    const alternative_executor_name = data[value_names.alternative_executor] !== undefined ? data[value_names.alternative_executor].name : '';
    const alternative_executor_address = data[value_names.alternative_executor] !== undefined ? data[value_names.alternative_executor].address : "";
    const alternative_executor_nationality = data[value_names.alternative_executor] !== undefined ? data[value_names.alternative_executor].nationality : '';
    const alternative_executor_passport = data[value_names.alternative_executor] !== undefined ? data[value_names.alternative_executor].passport : '';

    const gender = "male";
    if(data[value_names.user] !== undefined && data[value_names.user].gender === "female")
        gender = "female";

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
    
    const first_permanent_guardian_name = data[value_names.permanent_guardian] !== undefined ? data[value_names.permanent_guardian].name: '';
    const first_permanent_guardian_passport = data[value_names.permanent_guardian] !== undefined ? data[value_names.permanent_guardian].passport: '';
    const second_permanent_guardian_name = data[value_names.permanent_guardian] !== undefined ? data[value_names.permanent_guardian].second_name: '';
    const second_permanent_guardian_passport = data[value_names.permanent_guardian] !== undefined ? data[value_names.permanent_guardian].second_passport: '';

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
    const paragraph_style = "margin-top: 20px;";
    const div_small_title_style = "font-size: 20px;font-weight:bold;";
    const div_number_style="width: 60px;font-size: 20px;font-weight:bold;";
    const div_text_title_style="width: 120px;font-size: 20px;font-weight:bold;";
    const div_text_style = "font-size: 20px;font-weight:lighter;";
    const div_test_name_style = "width: 100%; border-bottom: 2px solid #000;height: 30px;";
    const div_witness_style = "margin-top: 80px;";
    const div_flex = "flex: 1;";
    const html = `<div style='width:100%;'><div style="padding: 40px; margin: auto; width: 700px;">
    <p class="title" style="text-align: center; ${p_title_style}">
        <div style="text-align: center; ${p_title_style}">
            FULL WILL
        </div> 
    </p>

    <div class="paragraph" style="${div_style+paragraph_style}" >
        <div style="display:flex; flex-direction: 'column'; ${div_style+div_text_style}">
            I ${full_name} of ${address}, United Arab Emirates, declare this to be my last Will.
        </div>
    </div>
    
    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">1. </div>
            <div style="width: ${total_size - number_size}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    I declare that I am not Muslim and have never been a Muslim.
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">2. </div>
            <div style="width: ${total_size - number_size}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    This Will is made in respect of my immovable and movable Property situated in the 
                    United Arab Emirates (“my UAE Estate”) .                
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">3. </div>
            <div style="width: ${total_size - number_size}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    I revoke all my earlier testamentary dispositions to the extent that they relate to my UAE Estate.               
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">4. </div>
            <div style="width: ${total_size - number_size}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    I appoint ${executor_name} to be my executor and trustee in relation to my UAE Estate. In the event that
                      ${executor_name} predeceases me, then I appoint ${alternative_executor_name}, as the Executor and Trustee in relation to my UAE  Estate.
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">5. </div>
            <div style="width: ${total_size - number_size}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    I appoint ${first_temporary_guardian_name + " " + second_temporary_guardian_name} to be the guardian of  my children in the event of my death, 
                    unless such guardianship has been previously withdrawn/revoked from (HIM/HER) by law 
                    (on the basis of (HIS/HER) legal disability or if (HE/SHE) has been found unfit). 
                    In the event that my (HUSBAND/WIFE) predeceases me, then I appoint 
                    ${first_temporary_guardian_name + "," + first_temporary_guardian_passport + " " + second_temporary_guardian_name + ", " + second_temporary_guardian_passport }
                    to be the interim guardians of my children and 
                    ${first_permanent_guardian_name + "," + first_permanent_guardian_passport + " " + second_permanent_guardian_name + ", " + second_permanent_guardian_passport }
                    to be the permanent guardians of my children during their minority.
                </div>
            </div>                
        </div>
    </div>


    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">6. </div>
            <div style="width: ${total_size - number_size}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    My executor shall:
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}"></div>
            <div class="number" style="${div_style+div_number_style}">6.1 </div>
            <div style="width: ${total_size - number_size * 2}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    pay my debts, funeral and testamentary expenses, legacies, administrative fees and other liabilities on all property which vests in them; and  
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}"></div>
            <div class="number" style="${div_style+div_number_style}">6.2 </div>
            <div style="width: ${total_size - number_size * 2}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                hold the residue of my UAE Estate after payment of my debts, funeral and testamentary expenses, legacies, 
                administrative fees and other liabilities on all property which vests in them (“my Residuary Estate”).  
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">7. </div>
            <div style="width: ${total_size - number_size}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    The law and the Rules of the Dubai International Financial Centre (including the Wills and Probate Registry (WPR) Rules) 
                    govern the validity of this Will and its construction, effect and the administration of my UAE Estate.
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div class="number" style="${div_style+div_number_style}">8. </div>
            <div style="width: ${total_size - number_size}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    The Courts of the Dubai International Financial Centre (as established under Dubai Law No. 12 of 2004) have
                     exclusive jurisdiction in any proceedings involving rights or obligations under this Will or the administration of my UAE Estate.
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div style="width: ${total_size * 0.7}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    Signed by ${full_name} to give effect to this Will,
                    in the presence of the Witnesses, present at the same time,
                    who have each signed this Will in the presence of the Testator.
                
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div style="width: ${total_size * 0.4}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_test_name_style}">
                </div>
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    Signature of Testator
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div style="width: ${total_size * 0.4}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_test_name_style}">
                </div>
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    Date
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div style="width: ${total_size * 0.4}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_test_name_style}">
                </div>
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    1st Witness Signature
                </div>
            </div>   
            <div style="width: ${total_size * 0.2}px;"></div>
            <div style="width: ${total_size * 0.4}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_test_name_style}">
                </div>
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    2nd Witness Signature
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div style="width: ${total_size * 0.4}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_test_name_style}">
                </div>
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    1st Witness Signature
                </div>
            </div>   
            <div style="width: ${total_size * 0.2}px;"></div>
            <div style="width: ${total_size * 0.4}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_test_name_style}">
                </div>
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    2nd Witness Signature
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div style="width: ${total_size * 0.4}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_test_name_style}">
                </div>
            </div>   
            <div style="width: ${total_size * 0.2}px;"></div>
            <div style="width: ${total_size * 0.4}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_test_name_style}">
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div style="width: ${total_size * 0.4}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_test_name_style}">
                </div>
            </div>   
            <div style="width: ${total_size * 0.2}px;"></div>
            <div style="width: ${total_size * 0.4}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_test_name_style}">
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
        <div style="display:flex; flex-direction: 'row'; ">
            <div style="width: ${total_size * 0.4}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_test_name_style}">
                </div>
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    1st Witness Signature
                </div>
            </div>   
            <div style="width: ${total_size * 0.2}px;"></div>
            <div style="width: ${total_size * 0.4}px;">
                <div class="small_title" style="font-weight: bold; ${div_style+div_test_name_style}">
                </div>
                <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                    2nd Witness Signature
                </div>
            </div>                
        </div>
    </div>

    <div class="paragraph" style="${div_style + paragraph_style}" >
    <div style="display:flex; flex-direction: 'row'; ">
        <div style="width: ${total_size}px;">
            <div class="small_title" style="font-weight: bold; ${div_style+div_text_style}">
                This Will, will be void if the Testator is a Muslim at any time before (HIS /HER) death.            
            </div>
        </div>                
    </div>
</div>
</div> </div>`;
    return html;
}
