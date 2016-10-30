import React from 'react';
import {connect} from 'react-redux';

import TodoLists from '../components/TodoLists';
import {fetchLists} from '../../../../actions/listsActions'

@connect((store) => {
  return {
    api: store.api,
    lists: store.lists
  };
})

export default class TodoListsContainer extends React.Component {

  componentWillMount() {
    console.log(this);
    this.props.dispatch(fetchLists(this.props.api))
  }

  render() {
    return (
      <TodoLists lists={this.props.lists.lists}/>
    )
  }
}
