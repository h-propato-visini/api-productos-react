import React from 'react'
import './style.scss'

class Productos extends React.Component {
    render() {
        return (       
                    <div className='productsContainer'>
                        <div className='imgContainerCarousel'><img className='imgCarousel' src={this.props.data.image}/></div>
                        <hr/>
                        <div className='priceContainer'><span>${this.props.data.price}</span></div>
                        <div className='infoContainer'><span>{this.props.data.name}</span></div>
                    </div>
        )
    }
}

export default Productos