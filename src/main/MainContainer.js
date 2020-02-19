import React from 'react'
import {connect} from "react-redux";
import Main from "./Main";
import {addCurrentMediaThunk, setMedia, setMediaHistory} from "../redux-store/MainReducer";
import {GetData, GetGifs, IsFetching} from "../redux-store/reselect";


class MainContainer extends React.Component {
    constructor(props) {
        debugger
        super(props);

    }

    render() {
        return (
            <div className="col-lg-12">
                <Main currentGif={this.props.currentGif}
                      addCurrentMediaThunk={this.props.addCurrentMediaThunk}
                      setMedia={this.props.setMedia}
                      setMediaHistory={this.props.setMediaHistory}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    debugger
    return {
        currentGif: GetGifs(state),
        data: GetData(state),
        isFetching: IsFetching(state)
    }
};

export default connect(mapStateToProps, {addCurrentMediaThunk, setMedia, setMediaHistory})(MainContainer);