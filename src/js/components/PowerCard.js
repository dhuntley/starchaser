import React, { Component } from 'react';

class PowerCard extends Component {
    constructor() {
        super();

        this.state = {
            selected: false
        };
    }

    handleSelected = () => {
        this.setState({
            selected: !this.state.selected
        });
    }

    render() {
        const {power} = this.props;
        return (
            <div className={`power-card card${this.state.selected ? " selected" : ""}`} onClick={this.handleSelected}>
                <div className="card-header">
                    <h3 className="panel-title">{power.name}</h3>
                </div>
                <div className="card-body">
                    Description: {power.description}<br/>
                    Class: {power.playerClass}
                </div>
            </div>
        );
    }
}

export default PowerCard;
