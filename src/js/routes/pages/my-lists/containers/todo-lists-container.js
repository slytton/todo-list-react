import React from 'react';
import {connect} from 'react-redux';

import AddListForm from '../components/AddListForm';
import TodoLists from '../components/TodoLists';
import listActions from '../../../../actions/listsActions';


@connect((store) => {
  return {
    api: store.api,
    lists: store.lists
  };
})

export default class TodoListsContainer extends React.Component {

  constructor(props){
    super(props);
    this.listActions = listActions(this.props.api.links.lists);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    console.log(this);
    this.props.dispatch(this.listActions.fetchLists())
  }

  handleSubmit(list) {
    console.log("handling submit");
    this.props.dispatch(this.listActions.addList(list))
  }

  handleDelete(list) {
    console.log('handling delete');
    this.props.dispatch(this.listActions.deleteList(list.id));
  }

  render() {
    return (
      <div>
        <AddListForm handleSubmit={this.handleSubmit}/>
        <TodoLists lists={this.props.lists.lists} handleDelete={this.handleDelete.bind(this)}/>
      </div>
    )
  }
}
