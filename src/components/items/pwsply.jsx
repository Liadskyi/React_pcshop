import React from 'react';

class Pwrsply extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: [
                {id: 1, name: "aerocool kscas", type: "bronze", price: 800, power: 600,  img:" images/pwr/k600.webp"},
                {id: 2, name: "aerocool kscas", type: "bronze", price: 1100, power: 800, img:"images/pwr/k800.jfif"},
                {id: 3, name: "gigabyte modular", type: "gold", price: 3900, power: 750,  img:"images/pwr/gm.jfif"},
                {id: 4, name: "cooler master silent pro", type: "gold", price: 4100, power: 800, img:"images/pwr/sp.jpg"},
                {id: 5, name: "asus rog thor", type: "platinum", price: 9200, power: 1200, img:"images/pwr/rt.jfif"},
                {id: 6, name: "thermaltake thoughtpower", type: "platinum", price: 7900, power: 1050, img:"images/pwr/tt.jfif"},
            ]
        }
    }
    render() { 
        return (
            <div className='items'>
                {this.state.items.map((el) => (
                <div key={el.id} className='item_cont' onClick={() =>{this.props.anim(); setTimeout(()=>{this.props.mInf(14, this.state.items[el.id-1])}, 160); }}>
                    <p className='item_name'>{el.name}</p>
                    <img src={el.img} alt="" className='image'/>
                    <p className='price'>{el.price} UAH</p>
                    <p className='price'>{el.power} W</p>

                </div>
                )) }
             </div>
        );
    }
}
 
export default Pwrsply;