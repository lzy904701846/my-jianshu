import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "../../statics/iconfont/iconfont.css";
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch, 
    SearchInfo, 
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    SearchWrapper,
    Addition, 
    Button, } from "./style";

import  { actionCreators } from "./store";

class Header extends Component {

    getListArea = () => {
        const { focused, mouseInSearchInfo, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const jsList = list.toJS();
        const pageList = [];
        if(jsList.length) {
            for(let i = (page - 1) * 10; i < page * 10; ++ i) {
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                );
            }
        }


        if(focused || mouseInSearchInfo){
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch 
                            onClick={() => {handleChangePage(page, totalPage)}}
                        >
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>{pageList}</SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }
    
    render() {
        const { focused, handleInputOnfocus, handleInputBlur, list } = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont icon-Aa"></i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={250}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? "focused" : ""}
                                onFocus={() => handleInputOnfocus(list.size)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? "focused iconfont icon-search" : "iconfont icon-search"}></i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">
                        <i className="iconfont icon-yongyan"></i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    
    }


}



const mapStateToProps = (state) => {
    return {
        // focused: state.get("header").get("focused")
        focused           : state.getIn(["header", "focused"]),
        mouseInSearchInfo : state.getIn(["header", "mouseInSearchInfo"]),
        list              : state.getIn(["header", "list"]),
        page              : state.getIn(["header", "page"]),
        totalPage         : state.getIn(["header", "totalPage"])
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputOnfocus(listSize) {
            (listSize == 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
    
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },

        handleMouseEnter() {
            dispatch(actionCreators.mouseEnterSearchInfo());
        },

        handleMouseLeave() {
            dispatch(actionCreators.mouseLeaveSearchInfo());
        },

        handleChangePage(page, totalPage) {
            dispatch(actionCreators.changePage(page != totalPage ? page + 1 : 1));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);