import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

// immutable对象特点：
// 无法修改的对象
const defaultState = fromJS({
    focused           : false,
    mouseInSearchInfo : false,
    list              : [],
    page              : 1,
    totalPage         : 1
});

export default (state=defaultState, action) => {

    switch (action.type) {

        case actionTypes.SEARCH_FOCUS:
            // immutable对象的set方法：
            // 结合之前immutable对象的值和设置，生成一个全新的immutable对象
            return state.set("focused", true);
            
        case actionTypes.SEARCH_BLUR:
            return state.set("focused", false);

        case actionTypes.MOUSE_ENTER_SEARCH_INFO:
            return state.set("mouseInSearchInfo", true);

        case actionTypes.MOUSE_LEAVE_SEARCH_INFO:
            return state.set("mouseInSearchInfo", false);

        case actionTypes.CHANGE_LIST:
            // return state.set("list", action.data).set("totalPage", action.totalPage);
            return state.merge({
                list      : action.data,
                totalPage : action.totalPage
            });

        case actionTypes.CHANGE_PAGE:
            return state.set("page", action.page);

    
        default:
            return state;
    }

}