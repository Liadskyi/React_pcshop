import React from 'react';

class Aside extends React.Component {
    
    render() { 
        return (
           <aside>
            <ul className='aside_list'>
                <li onClick={()=>{this.props.anim(); setTimeout(()=>{this.props.fn(1)},160)}}>Cpu</li>
                <li onClick={()=>{this.props.anim(); setTimeout(()=>{this.props.fn(2)},160)}}>Gpu</li>
                <li onClick={()=>{this.props.anim(); setTimeout(()=>{this.props.fn(3)},160)}}>Ram</li>
                <li onClick={()=>{this.props.anim(); setTimeout(()=>{this.props.fn(4)},160)}}>Power supply</li>        
            </ul>
           </aside>
        );
    }
}
 
export default Aside;