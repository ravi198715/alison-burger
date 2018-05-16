import React, { Component } from 'react';
import './App.css';
import Order from './order/order'

class App extends Component {
  state ={
    order:[
      {food:'Chips',quantity:2 , size:'small',price:3},
      {food:'Burger',quantity:1 , size:'Large', price: 12}
    ],
    bill:0,
    toggleView:true
  }

  calculateTotalClickHandler =()=>{
      let total:number=0;
      console.log(this.state.toggleView)
      this.state.order.forEach(function(obj){
        total = total + (obj.price* obj.quantity);
      });
      this.setState({bill:total});
      const toggleFlag = this.state.toggleView;
      this.setState({toggleView:!toggleFlag});

  }

  orderChangedHandler =(index,event) =>{
      this.order[index].quantity = event.target.value;
      const orders = this.order;
      this.setState( { order:orders});
  }

  render() {
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, "This is Burger App."));
      let burger = null;
      if (this.state.toggleView){
          burger=  ( <div>
              {this.state.order.map((dish, index) =>{
                      return <Order
                          changed={this.orderChangedHandler(index)}
                          food={dish.food}
                          quantity={dish.quantity}
                          size={dish.size}>
                      </Order>

                  })}
          </div>);
      }else{
          burger=(<div>The cost is {this.state.bill} Aud.</div>);
      }
    return (
      <div className="App">
        <p className="App-intro">
        This is burger app
        </p>
        <button onClick={this.calculateTotalClickHandler}>Total</button>
        {burger}
      </div>
    );
  }
}

export default App;
