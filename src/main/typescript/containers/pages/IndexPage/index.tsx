import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {LocationState, Path} from "history";
import {push, RouterState} from "connected-react-router";
import {ReduxState} from "../../../redux/store";
import styled from "styled-components";

// Please change the followings as necessary, because they are examples.
type IndexPageProps = {
    router: RouterState;
    push: (path: Path, state?: LocationState) => void;
};

// The styled-components example
const BlueLabel = styled.div`
  color: blue;
`;

class IndexPage extends React.Component<IndexPageProps> {
    public render = () =>
        <div>
            <BlueLabel style={{color: "blue"}}>
                Hello React!
            </BlueLabel>
            <div>
                search = {this.props.router.location.search || "null"}
            </div>
        </div>;
}

const mapStateToProps = (state: ReduxState) => ({router: state.router});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    // an action example
    push: (path: Path, state?: LocationState) => dispatch(push(path, state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
