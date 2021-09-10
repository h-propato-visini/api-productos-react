import React from 'react'
import Carousel from '../Carousel'
import Header from '../Header'
import './style.scss'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    handleCallback(results) {
        this.setState ({
            products: results.products
        })

        console.log(this.state.products)
    }
    


    render() {
        return (
            <React.Fragment>
                <Header handleCallback={results => this.handleCallback(results)}/>
                <Carousel title='Busquedas' resultados = {this.state.products} />
            </React.Fragment>
        )
    }
}

export default Home