import React from 'react';
import { Grid, Image, Label, Segment , Icon ,Button, Form , TextArea } from 'semantic-ui-react';
import TextareaAutosize from 'react-textarea-autosize';
import './CreatePost.css'

export default class CreatePost extends React.Component {
 
  state = { 

    // Initially, no file is selected 
    selectedFile: null
    }; 

    onFileChange = event => { 
	
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
      
      }; 
 
  render(){
   return(
 <Grid columns={2}  centered>

      <Grid.Column>
        <Segment padded >
          <Label attached='top left'>Create Post  <Icon name='edit' /></Label>

         {/* TextArea */}
        <TextareaAutosize minRows={5} style={{width:'100%' , border:'0.25' , marginBottom:30,  resize: 'vertical'}} />

       
        {/* Buttons */}
          <div className="ButtonsContainer">
         
          <label for="file-upload" class="custom-file-upload" title="Upload photo or video">
              <Icon name="image"  className="uploadIcon" color="grey"  bordered circular/>   
          </label>
            <Button primary>Post</Button>
          </div>
          
          
          <input id="file-upload" type="file" hidden/>
          
          
        </Segment>
      </Grid.Column>
  
  </Grid>
   )}
}

