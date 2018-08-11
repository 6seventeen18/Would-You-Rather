import React, { Component } from 'react'

class AddQuestion extends Component {
  render() {
    return (
      <div class='container text-center'>
      <h1 class="h3 mb-3 font-weight-normal">Create New Poll</h1>
        <div class='row'>
          <div class='col'></div>
          <div class='col-8'>
            <div class="jumbotron pt-4 pb-6">

              <form>
                <div className='form-group'>
                  <h5><label for="pollOption1" className="float-left">Poll Option 1</label></h5>
                  <input class="form-control form-control-lg" type="text" id="pollOption1" />
                </div>

                <div className='form-group'>
                  <h5><label for="pollOption2" className="float-left text-large">Poll Option 2</label></h5>
                  <input class="form-control form-control-lg" type="text" id="pollOption2" />
                </div>

                <button
                  className='btn btn-primary float-right'
                  type='submit'>
                    Submit
                </button>
              </form>

            </div>
          </div>
          <div class='col'></div>
        </div>
      </div>
    )
  }
}

export default AddQuestion
