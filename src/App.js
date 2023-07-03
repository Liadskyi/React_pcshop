import { useState } from "react";
import React from 'react';
import "../src/styles/main.css"
import Aside from "./components/aside";
import Header from "./components/header";
import Cpus from "./components/items/cpus";
import Gpus from "./components/items/gpus";
import RenderItem from "./components/items/renderItem";
import MCpuInf from "./components/items/mCpuInf";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      choosenItem: 1,
      Minf: 0,
      data: {id: 1, name: "intel core i5 9400f", freq: "3900 mhz", cores: 6, price: 4000, img:"/images/cpu/940.webp"},
      itemToCart: [],
      temp: []
    }
    this.chooseItem = this.chooseItem.bind(this);
    this.mInf = this.mInf.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);

  }
  chooseItem(index){
    this.setState({choosenItem: index})
  }
  mInf(isAct, data){
    this.setState({choosenItem: isAct})
    this.setState({data: data})
  }

  addToCart(item){
    this.setState({itemToCart: [...this.state.itemToCart, item]})
  
    console.log(this.state.itemToCart)
  }
  removeFromCart(item){
    this.setState({itemToCart: this.state.itemToCart.filter(obj => obj !== item)})
  }
  anim(){
    let a = document.querySelector('.anim')
    a.style.animationName="minfanim"
    a.style.zIndex="2"
    a.style.opacity="1"
    setTimeout(()=>{a.style.zIndex="0"; a.style.opacity="0"; a.style.animationName=""}, 250)
  }
  backanim(){
    let a = document.querySelector('.anim')
    a.style.animationName="backanim"
    a.style.zIndex="2"
    a.style.opacity="1"
    setTimeout(()=>{a.style.zIndex="0"; a.style.opacity="0"; a.style.animationName=""}, 500)
  }
  cartanim(){
    let a = document.querySelector('.anim')
    a.style.animationName="cartanim"
    a.style.zIndex="2"
    a.style.opacity="1"
    setTimeout(()=>{a.style.zIndex="0"; a.style.opacity="0"; a.style.animationName=""}, 500)
  }
  render() {
   
  return (
    <div className="App">
      <Header cartanim = {this.cartanim}chooseItem = {this.chooseItem} anim = {this.anim}/>
      <main>
        <div className="anim"></div>
        <Aside fn={this.chooseItem} anim = {this.anim}/>
        <RenderItem cartanim= {this.cartanim} backanim = {this.backanim}anim = {this.anim} remFromCart = {this.removeFromCart} itemForRender={this.state.choosenItem} mInf={this.mInf} data = {this.state.data} isMoreInfActive = {this.state.Minf} addToCart = {this.addToCart} itemsInCart={this.state.itemToCart}/>
        
      </main>
      <footer>all data on this page is invalid</footer>
    </div>
  )
}
}


export default App;
