import React from 'react';

class Cart extends React.Component {
    render() { 
        let summ = 0
        this.props.data.map((elem) => (summ += elem.price))
        if(this.props.data.length == 0){
            return(<div className='nth'>oops, there is nothing here</div>)
        }
        else{
            return (
                <div className='cartMain'>
                {this.props.data.map((elem) => (
                    <div className='cartItemCont'>
                        <img src={elem.img} alt="sfdf" />
                        <p>{elem.name}</p>
                        <p className='cartPrice'>{elem.price} UAH</p>
                        <div className='removeBTNDIV'><p className='removeBTN' onClick={() => {this.props.remFromCart(elem)}}>remove from a cart</p></div>
                    </div>
                )) }
               
                <div className='cartItemCont'>
                    <p className='summ'>summ {summ} UAH</p>
                    <div className='checkout'>
                        <p>checkout</p>    
                    </div>
                </div>
                </div>
                );
            }
    }
}
 
export default Cart;