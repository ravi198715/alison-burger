import React, { Component } from 'react';
import './App.css';
import Order from './Order/order'

class App extends Component {
  state ={
    order:[
      {food:'Chips',quantity:2 , size:'small',price:3},
      {food:'Burger',quantity:1 , size:'Large', price: 12}
    ],
    bill:0,
    toggleView:false
  }

  calculateTotalClickHandler =()=>{
      let total:number=0;
      this.state.order.forEach(function(obj){
        total = total + (obj.price* obj.quantity);
      });
      this.setState({bill:total});
      const toggleFlag = this.state.toggleView;
      this.setState({toggleView:!toggleFlag});
      console.log(this.state.toggleView)
  }

  orderChangedHandler =(event) =>{
  this.setState( { order:[
      {food:'Chips',quantity:event.target.value , size:'small',price:3},
      {food:'Burger',quantity:1 , size:'Large', price: 12}
    ]});
  }

  render() {
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, "This is Burger App."));
    return (
      <div className="App">
        <p className="App-intro">
        This is burger app
        </p>
        <button onClick={()=> this.calculateTotalClickHandler}>Total</button>
        {
          this.state.toggleView?
          <div>
            <Order click={this.calculateTotalClickHandler.bind(this,"test1")}
              changed={this.orderChangedHandler}
              food={this.state.order[0].food} quantity={this.state.order[0].quantity}
              size={this.state.order[0].size}/>
            <Order food={this.state.order[1].food} quantity={this.state.order[1].quantity} size={this.state.order[1].size}> The cost is {this.state.bill} Aud.</Order>
          </div>:null
        }
      </div>
    );
  }
}

export default App;
