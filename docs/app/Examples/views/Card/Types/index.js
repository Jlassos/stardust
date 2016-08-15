import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Card'
      description='A card displays site content in a manner similar to a playing card'
      examplePath='views/Card/Types/IndividualCard'
    />
    <ComponentExample
      title='Cards'
      description='A group of cards'
      examplePath='views/Card/Types/Groups'
    />
  </ExampleSection>
)

export default Types
