import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { RecommendWrapper, RecommendItem } from "../style";

class Recommand extends PureComponent {

    render() {
        const { list } = this.props;
        return (
            <div>
                <RecommendWrapper>
                {
                    list.map((item) => (
                        <RecommendItem imgUrl={list.get("imgUrl")} key={item.get("id")} />
                    ))
                }
                </RecommendWrapper>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(["home", "recommendList"])
});

export default connect(mapStateToProps, null)(Recommand);