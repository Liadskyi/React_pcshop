import React from 'react';
import Cpus from './cpus';
import Gpus from './gpus';
import Rams from './rams';
import Pwrsply from './pwsply';
import MCpuInf from './mCpuInf';
import MGpuInf from './mGpuinf';
import MramInf from './mRaminf';
import MPwsInf from './mPwsinf';
import Cart from '../cart';


class RenderItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            ItemCh: 2
        }
    }
    render() {
        if(this.props.itemForRender == 11){
            return (
                <MCpuInf backanim = {this.props.backanim} anim = {this.props.anim}mInf = {this.props.mInf}data = {this.props.data} addToCart={this.props.addToCart}/>
        )
        }
        else if(this.props.itemForRender == 12){
            return (
                <MGpuInf backanim = {this.props.backanim} anim = {this.props.anim} mInf = {this.props.mInf}data = {this.props.data} addToCart={this.props.addToCart}/>
        )
        }
        else if(this.props.itemForRender == 13){
            return (
                <MramInf backanim = {this.props.backanim} anim = {this.props.anim} mInf = {this.props.mInf}data = {this.props.data} addToCart={this.props.addToCart}/>
        )
        }
        else if(this.props.itemForRender == 14){
            return (
                <MPwsInf backanim = {this.props.backanim} anim = {this.props.anim} mInf = {this.props.mInf} data = {this.props.data} addToCart={this.props.addToCart}/>
        )
        }
     
        else if (this.props.itemForRender == 1) {
            return (
                <Cpus anim = {this.props.anim} mInf = {this.props.mInf}/>
            )}
        else if(this.props.itemForRender == 2){
            return(
                <Gpus anim = {this.props.anim} mInf = {this.props.mInf}/>
            )
        }
        else if(this.props.itemForRender == 3){
            return(
                <Rams anim = {this.props.anim} mInf = {this.props.mInf}/>
            )
        }
        else if(this.props.itemForRender == 4){
            return(
                <Pwrsply anim = {this.props.anim} mInf = {this.props.mInf}/>
            )
        }
        else if(this.props.itemForRender == 5){
            return(
                <Cart cartanim ={this.props.cartanim} data = {this.props.itemsInCart} remFromCart = {this.props.remFromCart}/>
            )
        }
        }
        
    }

 
export default RenderItem;