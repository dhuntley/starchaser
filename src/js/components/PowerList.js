import React, { Component } from 'react';
import PowerCard from './PowerCard';
import powers from '../../data/powers.json';

class PowerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classFilter: 'all'
        }
    }

    handleFilterClass(className) {
        this.setState({ classFilter: className });
    }

    render() {
        const { classFilter } = this.state;
        const powerList = powers
            .filter(power => {
                if (classFilter === 'all') {
                    return true;
                } else if (power.playerClass === classFilter) {
                    return true;
                } else {
                    return false;
                }
            }).map(power => (<PowerCard key={power.name} power={power} />));
        return (
            <React.Fragment>
                <form className="power-filter">
                    <div className="form-row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="classFilterSelect">Filter by Class</label>
                                <select value={classFilter} className="form-control" id="classFilterSelect" onChange={(event) => this.handleFilterClass(event.target.value)}>
                                    <option value={'all'}>All</option>
                                    <option value={'brawler'}>Brawler</option>
                                    <option value={'marksman'}>Marksman</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="classFilterSelect2">Filter by Class</label>
                                <select value={classFilter} className="form-control" id="classFilterSelect2" onChange={(event) => this.handleFilterClass(event.target.value)}>
                                    <option value={'all'}>All</option>
                                    <option value={'brawler'}>Brawler</option>
                                    <option value={'marksman'}>Marksman</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="classFilterSelect3">Filter by Class</label>
                                <select value={classFilter} className="form-control" id="classFilterSelect3" onChange={(event) => this.handleFilterClass(event.target.value)}>
                                    <option value={'all'}>All</option>
                                    <option value={'brawler'}>Brawler</option>
                                    <option value={'marksman'}>Marksman</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='power-list'>
                    {powerList}
                </div>
            </React.Fragment>
        );
    }
}

export default PowerList;
