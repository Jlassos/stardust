import React from 'react'
import { Card, Icon, Image } from 'stardust'

const IndividualCard = () => (
  <div>
    <Card>
      <Image src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
      <Card.Content>
        <Card.Header>
          Matthew
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            Joined in 2015
          </span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      />
    </Card>
  </div>
)

export default IndividualCard
