import React from 'react'
import Productos from '../Productos'
import './style.scss'
import Slider from 'react-slick'

class Carousel extends React.Component {
    render() {
        const settings = {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true
        }

        console.log(this.props.resultados)
       
        return (
            <div className='carouselMainContainer'>
                <h2>{this.props.title}</h2>
                <div className='carouselContainer'>
                    {this.props.resultados.length > 0 ? (
                        <Slider {...settings}>
                            {this.props.resultados.map((item,key) => {
                                console.log(item)
                                return <Productos data={item} key={key}/>
                            })}
                        </Slider>
                    ) : (
                        <p>Todavía no hay resultados para este carousel</p>
                    )}
                </div>
            </div>
        )
    }
}

export default Carousel