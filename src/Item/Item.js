import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {active : false};
        this.itemClicked = this.itemClicked.bind(this);
    }
    itemClicked(){
        let active = !this.state.active;
        this.setState({
            active : active
        });
        this.props.totalPrice(active ? this.props.price : -this.props.price)
    }
    render() {
        return (
            <div>
                <div>
                <p onClick={this.itemClicked}>{this.props.name} : <span>{this.props.price}</span>
                </p>
                </div>
            </div>
        );
    }
}

export default Item;