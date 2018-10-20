import React, { Component } from 'react';
import PowerCard from './PowerCard';
import powers from '../../data/powers.json';

class PowerList extends Component {
  render() {
    return (
        <div className='power-list'>
        {
            powers.map(power => {
                return (
                    <PowerCard power={power} />
                )
            })
        }
        </div>
    );
  }
}

export default PowerList;
