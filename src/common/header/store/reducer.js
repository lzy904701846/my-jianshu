import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

// immutable对象特点：
// 无法修改的对象
const defaultState = fromJS({
    focused: false
});

export default (state=defaultState, action) => {

    switch (action.type) {

        case actionTypes.SEARCH_FOCUS:
            // immutable对象的set方法：
            // 结合之前immutable对象的值和设置，生成一个全新的immutable对象
            return state.set("focused", true);
            
        case actionTypes.SEARCH_BLUR:
            return state.set("focused", false);
    
        default:
            return state;
    }

}