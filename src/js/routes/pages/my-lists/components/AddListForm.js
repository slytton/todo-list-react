import React from 'react';

export default class AddListForm extends React.Component {

  constructor(args){
    super(args);

    this.state = {
      btnDisabled: true
    }
  }

  render() {

    return (
      <div>
        <h2>Add List Form:</h2>
        <form method='post' action='/lists' onSubmit={this.submit.bind(this)} onChange={this.change.bind(this)}><br/>
          <label>Title:</label> <br/>
          <input type='text' name='title' /><br/>
          <label>Description: </label><br/>
          <textarea name='description' ></textarea><br/>
          <button type='submit' disabled={this.state.btnDisabled}>Submit</button>
        </form>
      </div>
    )
  }

  change(e) {
    let list = this.composeList(e.target.parentElement);
    let btnDisabled = false;
    for(var fieldName in list) {
      if(list[fieldName] === ""){
        btnDisabled = true;
        break;
      }
    }
    this.setState({btnDisabled});
  }

  composeList(form){
    var list = {}
    Array.from(form.querySelectorAll('input, textarea')).reduce((list, item) => {
      list[item.attributes.name.nodeValue] = item.value;
      return list
    }, list)
    return list;
  }

  submit(e){
    console.log('In submit');
    e.preventDefault();
    this.props.handleSubmit(this.composeList(e.target));
  }
}
