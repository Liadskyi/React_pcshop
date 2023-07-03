import React from 'react';
import Cart from './cart';

class Header extends React.Component {
    render() {
        let isMenuOpened = true
        return (
            <header> 
                <div className='headerDiv'>
                <img src='images/icons/menu.png' onClick={() => {
                    if(isMenuOpened){
                    document.getElementsByTagName("aside")[0].style.transform="translate(-300px)"
                    document.getElementsByTagName("aside")[0].style.position="absolute"}
                    else{
                        document.getElementsByTagName("aside")[0].style.transform="translate(0px)"
                        document.getElementsByTagName("aside")[0].style.position="static"
                    }
                    isMenuOpened = !isMenuOpened
                }}/>
                <h1>Web shop</h1>
                </div>
                
                <img src="images/icons/cart.png" alt="" srcset="" onClick={() =>{this.props.cartanim();setTimeout(()=>{this.props.chooseItem(5)}, 130)}}/>
            </header>
        ); 
    }
   
}
 
export default Header;