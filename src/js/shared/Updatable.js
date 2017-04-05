import React from 'react';

export default class Updatable extends React {
  constructor(){
    this.state = {editable: false};
  }

  handleSubmit(e){
    this.props.handleSubmit(this.props.text);
  }

  render() {
    if(this.state.editable === false){
      <span>this.props.text</span>
    }else{
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input value={this.props.text} onChange={(e)=>this.props.text = e.target.value}/>
        <button type="submit">Update</button>
      </form>
    }
  }
}
