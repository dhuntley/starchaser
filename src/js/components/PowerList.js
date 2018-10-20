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
        this.setState({classFilter: className});
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
            }).map(power => (<PowerCard power={power} />));
        return (
            <div className='power-list'>
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Filter by Class</label>
                        <select value={classFilter} classNames="form-control" id="exampleFormControlSelect1" onChange={(event) => this.handleFilterClass(event.target.value)}>
                            <option value={'all'}>All</option>
                            <option value={'brawler'}>Brawler</option>
                            <option value={'marksman'}>Marksman</option>
                        </select>
                    </div>
                </form>
                {powerList}
            </div>
        );
    }
}

export default PowerList;
