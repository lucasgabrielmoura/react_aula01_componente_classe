import React, {Component} from 'react';

export default class BemVindo extends Component{
    render(){
        return(
            <div>
                <h1>Olá mundo {this.props.tecnologia}</h1>
                <h3>Esse é meu componente de {this.props.tipo} :]</h3>
            </div>
        )
    }
}