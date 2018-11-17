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
                    <h3 className="panel-title" id="cardHeader">
                    <div id="cardhead1">{power.name}</div>
                    <div id="cardhead2"> {power.playerClass[0].toUpperCase() + power.playerClass.substring(1)} </div>
                    <div id="cardhead3">{power.playerSubClass[0].toUpperCase() + power.playerSubClass.substring(1)}</div>
                    </h3>
                </div>
                <div className={"card-body " + power.playerClass} id="bottomtext">
                    Tags: {power.actionTags}<br/>
                    Action Type: {power.actionType}<br/>
                    Description: {power.description}<br/>
                </div>
            </div>
        );
    }
}

export default PowerCard;
