import React, {Component} from 'react';
import {Button} from "react-bootstrap";


class GifElement extends Component {

    constructor(props){
        debugger
        super(props);
        this.DeleteCurrentMedia = this.DeleteCurrentMedia.bind(this);
    }
    DeleteCurrentMedia = (e) => {
        debugger
        e.preventDefault();
        this.props.DeleteCurrentMedia(this.props.img);

    };


    render() {

        debugger
        return (
            <>
            <div className="col-lg-3">
                <img className='cooper__img' src={this.props.img} alt=""/>
                {this.props.key}
            </div>
            <div className="col-lg-3">
                <Button color="danger" onClick={(e) => {
                    this.DeleteCurrentMedia(e)

                }}>Удалить</Button>
            </div>
           </>
        );
    }
}

export default GifElement;