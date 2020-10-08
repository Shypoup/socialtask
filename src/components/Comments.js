import React from 'react'
import { Button, Comment, Form , Grid} from 'semantic-ui-react';
import TextareaAutosize from 'react-textarea-autosize';;

const Comments = () => (
 
    // <Grid columns={2}  centered>

    // <Grid.Column>
 <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>1 day ago</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>
            The hours, minutes and seconds stand as visible reminders that your
            effort put them all there.
          </p>
          <p>
            Preserve until your next run, when the watch lets you see how
            Impermanent your efforts are.
          </p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

   

    <Form reply>
      {/* <Form.TextArea  /> */}
      <TextareaAutosize rows={3} style={{width:'100%' , border:'0.25' , marginBottom:30,  resize: 'vertical'}} placeholder="Write a comment" />

      <Button content='Add Comment' labelPosition='right' icon='edit' primary />
    </Form>
  </Comment.Group>
//   </Grid.Column>
//   </Grid>
)

export default Comments;