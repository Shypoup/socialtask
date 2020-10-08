import React from 'react';
import {  Image, Card ,Button ,Grid, Segment , Icon , Label } from 'semantic-ui-react';
import './Post.css';
import Comments from './Comments'

export default class Post extends React.Component {
 
  state={
    showComment :false,
    LikeState : "Like",
    LikeNO : 14,
    
  }
  


  handlinLikeButton =() =>{
   
    if (this.state.LikeState=== "Like") {
      this.setState({LikeState :"Liked" , LikeNO : this.state.LikeNO +1 })

    } else {
      this.setState({LikeState :"Like" , LikeNO : this.state.LikeNO -1 })
    }

  }
  handlingCommentButton =() =>{
     
    if (this.state.showComment === false) {
      this.setState({showComment :true})
    } else {
      this.setState({showComment :false})
    }

  }
  handlingCommentButton =() =>{
     
      if (this.state.showComment === false) {
        this.setState({showComment :true})
      } else {
        this.setState({showComment :false})
      }

    }

  showComments =() =>
    {
      if (this.state.showComment === true) {
        return(
          <Card.Content>
          <Comments />
          </Card.Content>
        )
      }else return null;
      
    }
  
 
  render(){
    
   return(
    
<Grid columns={2}  centered>

<Grid.Column>
  
  <Card  fluid className="postContainer">
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src='https://react.semantic-ui.com/images/avatar/large/molly.png'
      />
      <Card.Header>Molly Thomas</Card.Header>
      <Card.Meta>Music</Card.Meta>
      <Card.Description>
        Molly wants to add you to the group musicians
      </Card.Description>
      <Card.Content>
      <Image
        size="large"
        src='https://react.semantic-ui.com/images/avatar/large/molly.png'
      />
      </Card.Content>
    </Card.Content>
    
    <Card.Content>
    <Button.Group floated='left'>
      
    <Button as='div' labelPosition='right' onClick={this.handlinLikeButton}>
      <Button color='blue'>
        <Icon name='heart' />
        {this.state.LikeState}
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        {this.state.LikeNO}
      </Label>
    </Button>
    <Button as='div' labelPosition='right' onClick={this.handlingCommentButton}>
      <Button basic color='blue' >
        <Icon name='comment' />
        Comment
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
       5
      </Label>
    </Button>
    </Button.Group>
    </Card.Content>

    
    {this.showComments()}
   
  </Card>

  
    
  
</Grid.Column>

</Grid>
  

  




   )}
}

