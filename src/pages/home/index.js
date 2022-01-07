import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import Recommand from "./components/Recommend";
import List from "./components/List";
import Writer from "./components/Writer";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import { actionCreators } from "./store";


class Home extends PureComponent {

    render() {
        const { showScroll } = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmain.qcloudimg.com%2Fraw%2F6670541d971f3a133027342b29265aaf.png&refer=http%3A%2F%2Fmain.qcloudimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644114890&t=4ee9e89dfea4780a8f6375bd935c658f" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommand />
                    <Writer />
                </HomeRight>
                {showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
                
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.props.changeScrollTopShow);
    }

    handleScrollTop = () => {
        window.scrollTo(0, 0);
    }
    bindEvents = () => {
        window.addEventListener("scroll", this.props.changeScrollTopShow);
    }

}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());       
    },

    changeScrollTopShow(event) {
        if(document.documentElement.scrollTop > 150) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});

export default connect(mapStateToProps, mapDispatch)(Home);