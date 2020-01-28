import {NEXT_WILL_DATA, INIT_WILL_DATA, PREV_WILL_DATA} from "./types";

const initState = {
    pages: [],
    datas: [],
    will_data: {}
};

function will_reducer(state = initState, action)
{
    switch(action.type)
    {
    case INIT_WILL_DATA:
        return {
            ...action.payload
        };

    //save page history and data history into redux center once user click next butto to go foward
    case NEXT_WILL_DATA:
        {
            let pages = [...state.pages];
            let datas = [...state.datas];
            let will_data = state.will_data;
    
            if(action.payload.page !== null)
            {
                pages.push(action.payload.page);
                if(datas.length != 0)
                    datas[datas.length - 1] = action.payload.data;
                datas.push("");
            }            

            if(action.payload.will_data !== undefined && action.payload.will_data !== null && action.payload.will_data !== "")
            {           
                if(Array.isArray(action.payload.will_data.data))
                {
                    will_data[action.payload.will_data.value] = [...action.payload.will_data.data];
                }
                else if(typeof action.payload.will_data.data === 'object')
                {
                    will_data[action.payload.will_data.value] = {...action.payload.will_data.data};
                }
                else
                {
                    will_data[action.payload.will_data.value] = action.payload.will_data.data;
                }
                console.log(will_data);
            }
    
            return {
                ...state,
                pages: pages,
                datas: datas,
                will_data: will_data
            };
        }
        

    // remove last page history and data history from redux center once user click back button to previous step
    case PREV_WILL_DATA:
        {
            let pages = [...state.pages];
            let datas = [...state.datas];
    
            if(pages.length > 0) pages.pop();
            if(datas.length > 0) datas.pop();
    
            return { 
                ...state,
                pages: pages,
                datas: datas
            };
        }
       

    default: 
        return {
            ...state
        };
    }
}

export default will_reducer;