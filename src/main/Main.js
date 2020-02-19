import React, {Component} from 'react'
import {Button} from "react-bootstrap";
import Ripple from '../img/ripple.svg'



class Main extends React.Component {
    constructor(props){
    debugger
    super(props);
}

    setGif = () => {
        debugger
            const DownloadId = this.props.currentGif;
            this.props.setMediaHistory(DownloadId);
            debugger
            this.props.addCurrentMediaThunk()
    };

    nextGif = () => {
        this.props.addCurrentMediaThunk()
    };

    componentDidMount() {
        if(!this.props.currentGif){
            this.props.addCurrentMediaThunk(this.props.currentGif)
        }

    }

    render() {
        return (
            <div className="cooper">
                {this.props.isFetching
                    ? <div id="loader" className="d-block"><img src={Ripple}></img></div>
                    : <img className='cooper__img' src={this.props.currentGif} alt=""
                    />}
                    <div className="cooper__btns d-flex justify-content-between">
                        <Button onClick={()=>{this.setGif()}} className="cooper__btn btn-success" >
                            Загрузить
                        </Button>
                        <Button onClick={()=>{this.nextGif()}} className="cooper__btn" color="primary">
                            Следующая
                        </Button>
                    </div>
            </div>
        )
    }
}

export default Main