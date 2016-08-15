import React from 'react'
import { Card } from 'stardust'

const LinkCard = () => (
  <div>
    <Card href='#link'>
      <Card.Content
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      />
    </Card>
  </div>
)

export default LinkCard
