import React from 'react'
import { Card, Feed } from 'stardust'

const ContentBlock = () => (
  <div>
    <Card>
      <Card.Content>
        <Card.Header>
          Recent Activity
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Label image='http://semantic-ui.com/images/avatar/small/jenny.jpg' />
            <Feed.Content>
              <Feed.Date date='1 day ago' />
              <Feed.Summary>
                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='http://semantic-ui.com/images/avatar2/small/molly.png' />
            <Feed.Content>
              <Feed.Date date='3 days ago' />
              <Feed.Summary>
                You added <a>Molly Malone</a> as a friend.
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
            <Feed.Content date='4 days ago'>
              <Feed.Summary>
                You added <a>Elliot Baker</a> to your <a>musicians</a> group.
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
    </Card>
  </div>
)

export default ContentBlock
