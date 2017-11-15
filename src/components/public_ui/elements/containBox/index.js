import React, { Component } from 'react';
import './index.less';
import bg from './bg.jpg';
import bg_bright from './bg_bright.jpg';

class ContainBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            bgColor: this.props.bgColor || '#003f50',
            bgUrl: 'bright' in this.props ? bg_bright : bg
        }
    }

    render(){
        return (
            <div className="elementsContainBox">
                <div className="inner" style={{backgroundColor: this.state.bgColor, backgroundImage: 'url('+this.state.bgUrl+')'}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ContainBox;