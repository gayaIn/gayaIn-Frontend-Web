import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import { connect } from "react-redux";
import { editCategory } from "../../redux/actions/category";

class EditCategoryModals extends Component {
  state = {
    name: '',
  };

  onChangeHandler = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentWillReceiveProps({ category }) {
    this.onSetValue(category);
  }

  onSetValue = category => {
      console.log(category)
    this.setState({
      category_id: category.category_id,
      name: category.name,
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();

    const propsId = this.state.category_id;
    const data = {
      name: this.state.name
    };

    this.props.dispatch(editCategory(data, propsId));
  };

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="editCategoryModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="editCategoryModal"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="categoryModalLabel">
                  Edit Category
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Form>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChangeHandler}
                    />
                  </Form.Group>
                  <Button
                    onClick={this.onSubmitHandler}
                    data-dismiss="modal"
                    variant="primary"
                    type="submit"
                    style={{backgroundColor:'#f1a98c', border: 'transparent'}}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(EditCategoryModals);
