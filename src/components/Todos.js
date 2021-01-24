import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo
} from '../actions/todos'

class Todos extends React.Component {
  addItem = (e) => {
      e.preventDefault();

      this.props.dispatch(handleAddTodo(
          this.input.value,
          () => this.input.value = ''
      ))

  }

  removeItem = (todo) => {
      this.props.dispatch(handleDeleteTodo(todo));
  }

  toggleItem = (id) => {
      this.props.dispatch(handleToggleTodo(id));
  }

  render() {
      return (
        <div className="todos">
          <h1>Todo List</h1>
          <div className="w-100 d-inline-flex mb-3">
            <input className="form-control" type='text' placeholder='Add Todo'ref={(input) => this.input = input} />
            <button type="button" className="btn btn-dark w-50 ml-2" onClick={this.addItem}>Add Todo</button>
          </div>
          <List items={this.props.todos} remove={this.removeItem} toggle={this.toggleItem} />
        </div>
      )
  }
}

export default connect((state) => ({
todos: state.todos
}))(Todos)