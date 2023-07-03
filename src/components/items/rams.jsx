import React from 'react';

class Rams extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: [
                {id: 1, name: "hyperX fury", freq: "2400 mhz", type: "ddr4", price: 2500, gb: 16,  img:" images/ram/fury.jpg"},
                {id: 2, name: "hyperX predator", freq: "2666 mhz", type: "ddr4", price: 5000, gb: 32, img:"images/ram/predator.jpg"},
                {id: 3, name: "corsair vegeance", freq: "3200 mhz", type: "ddr4", price: 7000, gb: 32,  img:"images/ram/veg.webp"},
                {id: 4, name: "goodram idrm", freq: "2133 mhz", type: "ddr4", price: 1800, gb: 16, img:"images/ram/idrm.webp"},
                {id: 5, name: "kingston fury beast", freq: "4500 mhz", type: "ddr5", price: 9200, gb: 32, img:"images/ram/beast.webp"},
                {id: 6, name: "kingston fury renagade", freq: "5000 mhz", type: "ddr5", price: 15460, gb: 64, img:"images/ram/ren.jpg"},
            ]
        }
    }
    render() { 
        return (
            <div className='items'>
                {this.state.items.map((el) => (
                <div key={el.id} className='item_cont' onClick={() =>{this.props.anim(); setTimeout(()=>{this.props.mInf(13, this.state.items[el.id-1])}, 160); }}>
                    <p className='item_name'>{el.name}</p>
                    <img src={el.img} alt="" className='image'/>
                    <p className='price'>{el.price} UAH</p>
                    <p className='price'>{el.gb} GB</p>

                </div>
                )) }
             </div>
        );
    }
}
 
export default Rams;