import React, { Component } from 'react';
import classes from '../../data/classes';

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
                    <h4 className="panel-title" class="cardHeader">
                        <div className="cardheadpic img-fluid rounded" alt="">
                            <img width="50px" src={classes[power.playerClass].classimage} alt=" "></img>
                        </div>
                        <div className="cardhead1">{power.name}</div>
                        <div className="cardhead2"> {power.playerClass[0].toUpperCase() + power.playerClass.substring(1)} </div>
                        <div className="cardhead3">{power.playerSubClass[0].toUpperCase() + power.playerSubClass.substring(1)}</div>
                    </h4>
                </div>
                <div className={"card-body " + power.playerClass} id="bottomtext">
                        Tags: {power.actionTags.join(', ')}<br/>
                        Action Type: {power.actionType}<br/>
                        Description: {power.description}<br/>
                </div>
            </div>
        );
    }
}

export default PowerCard;
