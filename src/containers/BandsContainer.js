import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import Band from '../components/Band';
import { connect } from 'react-redux';

class BandsContainer extends Component {

  renderBandNames = () => this.props.bands.map((band, id) => <Band key={id} name={band.name} />)

  render() {
    return(
      <div>
        BandsContainer
      </div>
    )
  }
}

export default BandsContainer
