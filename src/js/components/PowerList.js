import React, { Component } from 'react';
import PowerCard from './PowerCard';

class PowerList extends Component {
  render() {
    return (
        <div className='power-list'>
            <PowerCard />
            <PowerCard />
            <PowerCard />
            <PowerCard />
        </div>
    );
  }
}

export default PowerList;
