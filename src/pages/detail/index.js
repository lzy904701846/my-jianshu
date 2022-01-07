import React, { Component } from "react";
import { connect } from "react-redux";
import { useMatch } from "react-router-dom";
import { DetailWrapper, Header, Content } from "./style";
import { actionCreators } from "./store";

// class Detail extends Component {

//     render() {
//         const { title, content } = this.props;
//         return (
//             <DetailWrapper>
//                 <Header>{title}</Header>
//                 <Content dangerouslySetInnerHTML={{__html: content}} />
//             </DetailWrapper>
//         )
//     }

//     componentDidMount() {
//         this.props.getDetail();
//     }

// }

function Detail(props)  {
    

    const { title, content } = props;
    const match = useMatch("/detail/:id");
    console.log(match);

    props.getDetail(match.params.id);

    return (
        <DetailWrapper>
            <Header>{title}</Header>
            <Content dangerouslySetInnerHTML={{__html: content}} />
        </DetailWrapper>
    )
}

const mapStateToProps = (state) => ({
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"])
});

// const mapDispatch = (dispatch) => ({
//     getDetail() {
//         dispatch(actionCreators.getDetail());
//     }
// });

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapStateToProps, mapDispatch)(Detail);

// export default connect(mapStateToProps, mapDispatch)(function(props) {
//     const match = useMatch("/detail/:id");

//     console.log(match)

//     return <Detail {...props} match={match} />;
// });