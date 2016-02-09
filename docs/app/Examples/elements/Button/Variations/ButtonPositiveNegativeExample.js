import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonPositiveNegativeExample extends Component {
  render() {
    return (
      <div>
        <Button className='positive'>Positive</Button>
        <Button className='negative'>Negative</Button>
      </div>
    )
  }
}
