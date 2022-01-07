// import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
    title: 'Detail',
    content: '<img src="https://upload-images.jianshu.io/upload_images/1717814-99b2994c05492383.png?imageMogr2/auto-orient/strip|imageView2/2/w/659"/><p>faefgfewg</p><p>faefgfewg</p><p>faefgfewg</p><p>faefgfewg</p>'
});


export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            });

        default:
            return state;
    }
};