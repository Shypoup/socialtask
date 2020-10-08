import React from 'react'
import { Button, Select, Input , Grid} from 'semantic-ui-react'

const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'recent', text: 'Most Recent', value: 'recent' },
  { key: 'products', text: 'Products', value: 'products' },
  { key: 'music', text: 'music', value: 'music' },
  { key: 'books', text: 'books', value: 'books' },
]

const Filter = () => (
    <Grid columns={2}  centered>

    <Grid.Column >
 
    <Select fluid options={options} defaultValue='all' />
    <Button type='submit' fluid >Search</Button>
  
  </Grid.Column>
  </Grid>
)

export default Filter ;