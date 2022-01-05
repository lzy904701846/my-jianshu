import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "../../statics/iconfont/iconfont.css";
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch, 
    Addition, 
    Button, 
    SearchWrapper } from "./style";

import  { actionCreators } from "./store";

const Header = (props) => {
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
                        in={props.focused}
                        timeout={250}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? "focused" : ""}
                            onFocus={props.handleInputOnfocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? "focused iconfont icon-search" : "iconfont icon-search"}></i>
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

const mapStateToProps = (state) => {
    return {
        // focused: state.get("header").get("focused")
        focused: state.getIn(["header", "focused"])
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputOnfocus() {
            const action = actionCreators.searchFocus();
            dispatch(action);
        },
    
        handleInputBlur() {
            const action = actionCreators.searchBlur();
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);