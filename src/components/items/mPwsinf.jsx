import React from 'react';

class MPwsInf extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            i: true
        }
       }
    render() { 
        return (
            
            <div className='MInf'>
               
                <div className='dsc'>
                <img src={this.props.data.img} alt="" />
                    <div>
                        <button onClick={() => {this.props.backanim(); setTimeout(() => {this.props.mInf(4,)}, 15)}}>back</button>
                    <h2>Description</h2>
                    <p> name: {this.props.data.name}</p>
                    <p> power: {this.props.data.power}</p>
                    <p> certificate: {this.props.data.type}</p>
                    </div>
                </div>
                <div className='bottom'>
                        <h2 className='price'>{this.props.data.price}UAH</h2>
                        <p onClick={() => {
                            if (this.state.i){                                 
                                this.props.addToCart(this.props.data)  
                            }
                            else{
                                alert("you can add only one item per time")
                            }
                            this.setState({i: false})
                        }}>Add to cart</p>
                    </div>
            </div>
        );
    }
}
 
export default MPwsInf;