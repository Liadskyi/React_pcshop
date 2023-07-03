import React from 'react';

class Cpus extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: [
                {id: 1, name: "intel core i5 9400f", freq: "3900 mhz", cores: 6, price: 4000, img:"/images/cpu/940.webp"},
                {id: 2, name: "intel core i5 10400f", freq: "4000 mhz", cores: 6, price: 4200, img:"images/cpu/10400.webp"},
                {id: 3, name: "intel core i5 11400f", freq: "4200 mhz", cores: 8, price: 5000, img:"images/cpu/11400.webp"},
                {id: 4, name: "intel core i5 12400f", freq: "4200 mhz", cores: 8, price: 5200, img:"images/cpu/12400.webp"},
                {id: 5, name: "intel core i5 13400f", freq: "4500 mhz", cores: 8, price: 5500, img:"images/cpu/13400.webp"},
                {id: 6, name: "intel core i9 9900k", freq: "5000 mhz", cores: 12, price: 10500, img:"images/cpu/9900.webp"},
            ],
            isActive: true
        }
    }
    
    render() { 
        
        return (
            <div className="items" >
               
                {this.state.items.map((el) => (
                <div key={el.id} className="item_cont" onClick={() =>{this.props.anim(); setTimeout(()=>{this.props.mInf(11, this.state.items[el.id-1])}, 160); }}>
                    <p className='item_name' >{el.name}</p>
                    <img src={el.img} alt="nikakich altux" className='image'/>
                    <p className='price'>{el.price} UAH</p>
                </div>
                )) }
            </div>
          
        );
    } 
}
 
export default Cpus;