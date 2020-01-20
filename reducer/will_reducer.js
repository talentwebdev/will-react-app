import {NEXT_WILL_DATA, INIT_WILL_DATA, PREV_WILL_DATA} from "./types";

const initState = {
    pages: [],
    datas: [],
};

function will_reducer(state = initState, action)
{
    switch(action.type)
    {
    case INIT_WILL_DATA:
        return {
            ...initState
        };

    //save page history and data history into redux center once user click next butto to go foward
    case NEXT_WILL_DATA:
        {
            let pages = [...state.pages];
            let datas = [...state.datas];
    
            pages.push(action.payload.page);
            datas.push(action.payload.data);
    
            return {
                ...state,
                pages: pages,
                datas: datas
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