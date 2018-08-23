import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

import { showLoading, hideLoading } from 'react-redux-loading-bar'

class AddQuestion extends Component {
  state = {
    pollOption1: '',
    pollOption2: '',
  }

  handleSubmitButtonState = () => {
    debugger
    if (this.state.pollOption1.length >= 3 && this.state.pollOption2.length >= 3) {
      document.getElementById('submitQuestion').disabled = false
    } else {
      document.getElementById('submitQuestion').disabled = true
    }
  }

  handleOption1Change = (e) => {
    const pollOption1 = e.target.value

    this.setState({
      pollOption1
    }, () => {
      this.handleSubmitButtonState()
    })
  }

  handleOption2Change = (e) => {
    const pollOption2 = e.target.value

    this.setState({
      pollOption2
    }, () => {
      this.handleSubmitButtonState()
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { pollOption1, pollOption2 } = this.state
    const { dispatch, id } = this.props

    this.setState(() => ({
      pollOption1: pollOption1,
      pollOption2: pollOption2
    }))

    document.getElementById('submitQuestion').setAttribute("disabled","disabled");

    dispatch(handleAddQuestion(pollOption1, pollOption2, id))
    .then(() => {
      this.props.history.push('/');
    })
  }

  render() {
    const { pollOption1, pollOption2 } = this.state

    return (
      <div className='container text-center'>
      <h1 className="h3 mb-3 font-weight-normal">Create New Poll</h1>
        <div className='row'>
          <div className='col'></div>
          <div className='col-8'>
            <div className="jumbotron pt-4 pb-6">

              <form onSubmit={this.handleSubmit}>
                <h4>Would You Rather</h4>
                <div className='form-group'>
                  <h5><label htmlFor="pollOption1" className="float-left">Poll Option 1</label></h5>
                  <input id="pollOption1" className="form-control form-control-lg" type="text" value={pollOption1} onChange={this.handleOption1Change} placeholder="Enter an option with at least 3 characters"/>
                </div>
                <h4>--OR--</h4>
                <div className='form-group'>
                  <h5><label htmlFor="pollOption2" className="float-left text-large">Poll Option 2</label></h5>
                  <input id="pollOption2" className="form-control form-control-lg" type="text" value={pollOption2} onChange={this.handleOption2Change} placeholder="Enter an option with at least 3 characters"/>
                </div>

                <button
                  id='submitQuestion'
                  className='btn btn-primary float-right'
                  type='submit'
                  disabled={true}>
                    Submit
                </button>
              </form>

            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    )
  }
}

export default connect()(AddQuestion)
