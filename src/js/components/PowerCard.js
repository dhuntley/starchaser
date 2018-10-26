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
                    <h4 className="panel-title">{power.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {power.playerClass} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {power.playerSubClass} </h4>
                </div>
                <div className="card-body">
                    Tags: {power.actionTags}<br/>
                    Action Type: {power.actionType}<br/>
                    Description: {power.description}<br/>
                    
                </div>
            </div>
        );
    }
}

export default PowerCard;
