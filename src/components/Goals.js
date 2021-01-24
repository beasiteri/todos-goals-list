import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddGoal,
  handleDeleteGoal
} from '../actions/goals'

class Goals extends React.Component {
  addItem = (e) => {
      e.preventDefault();

      this.props.dispatch(handleAddGoal(
          this.input.value,
          () => this.input.value = ''
      ))
  }

  removeItem = (goal) => {
      this.props.dispatch(handleDeleteGoal(goal));
  }

  //toggleItem = (id) => {
      //this.props.dispatch(handleToggleGoal(id));
  //}

  render() {
      return (
        <div className="goals">
          <h1>Goals</h1>
          <div className="d-inline-flex w-100 mb-3">
            <input className="form-control" type='text' placeholder='Add Goal' ref={(input) => this.input = input} />
            <button type="button" className="btn btn-dark w-50 ml-2" onClick={this.addItem}>Add Goal</button>
          </div>
          <List items={this.props.goals} remove={this.removeItem} toggle={this.toggleItem} />
        </div>
      )
  }
}

export default connect((state) => ({
goals: state.goals
}))(Goals)
