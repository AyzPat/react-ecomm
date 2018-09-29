import React, { Component } from 'react';
import Item from '../Item/Item';

class Purchase extends Component {
    constructor(props){
        super(props);
        console.log(this.props.itemArray)
        this.state = { total :0 };
        this.totalPrice = this.totalPrice.bind(this);
    }
    totalPrice(price){
        this.setState({
            total :this.state.total + price
        })
    }
    render() {
        let courses = this.props.itemArray.map((item, index)=>{
                      return(
                          <Item name={item.name} price={item.price} key={index} totalPrice ={this.totalPrice} active={item.active}/>
                      )
        })
        return (
           <div>
                <h1>Items in the cart :</h1>
            <div>{courses}</div>
            <div>{this.state.total}</div>
           </div> 
        );
    }
}

export default Purchase;