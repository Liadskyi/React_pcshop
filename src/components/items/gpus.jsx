import React from 'react';

class Gpus extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: [
                {id: 1, name: "gtx 1050Ti", freq: "1200 mhz", mem: "4gb", price: 3000, img:"images/gpu/1050.jfif"},
                {id: 2, name: "gtx 1660", freq: "15000 mhz", mem: "6gb", price: 6000, img:"images/gpu/1660.png"},
                {id: 3, name: "rtx 2070", freq: "1900 mhz", mem: "8gb", price: 13000, img:"images/gpu/2070.jpeg"},
                {id: 4, name: "rtx 3060", freq: "2200 mhz", mem: "12gb", price: 16000, img:"images/gpu/3060.webp"},
                {id: 5, name: "rtx 4070Ti", freq: "3000 mhz", mem: "16gb", price: 27000, img:"images/gpu/4070.webp"},
                {id: 6, name: "rtx 4090Ti", freq: "3500 mhz", mem: "24gb", price: 63200, img:"images/gpu/4090.webp"},
            ],
        }
    }
    render() { 
        return (
            <div className='items'>
                {this.state.items.map((el) => ( 
                <div key={el.id} className='item_cont' onClick={() =>{this.props.anim(); setTimeout(()=>{this.props.mInf(12, this.state.items[el.id-1])}, 160); }}>
                    <p className='item_name'>{el.name}</p>
                    <img src={el.img} alt="" className='image'/>
                    <p className='price'>{el.price} UAH</p>
                </div>
                )) }
            </div>
          
        );
    }
}
 
export default Gpus;