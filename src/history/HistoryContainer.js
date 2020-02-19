import React from 'react'
import {connect} from "react-redux";
import History from "./History";
import {SetGifs} from "../redux-store/reselect";
import {DeleteCurrentMedia} from "../redux-store/MainReducer";

const HistoryContainer = (props) => {
    debugger
    return <History history={props.history}
                    DeleteCurrentMedia={props.DeleteCurrentMedia}/>
};

let mapStateToProps= (state) => {
    return{
        history: SetGifs(state)
    }

};

export default connect(mapStateToProps,{DeleteCurrentMedia})(HistoryContainer);