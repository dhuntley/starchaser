import React, { Component } from 'react';

class PowerCard extends Component {
    render() {
        const {power} = this.props;
        return (
            <div class="power-card panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">{power.name}</h3>
                </div>
                <div class="panel-body">
                    {power.description}
                </div>
            </div>
        );
    }
}

export default PowerCard;
