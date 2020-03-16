import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { editProduct, addProduct } from '../redux/actions/product';

class EditModals extends Component {
  state = {
    name: '',
    image: '',
    category: 0,
    price: '-',
    stock: '-',
  };
  onChangeImageHandler = e => {
    this.setState({
      image: e.target.files[0],
    });
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = e => {
    console.log('masuk sinilkasjdklas');
    e.preventDefault();

    const propsId = this.props.idProduct;
    let data = new FormData();
    data.append ('id', propsId)
    data.append('name', this.state.name);
    data.append('price', this.state.price);
    data.append('category', this.state.category);
    data.append('stock', this.state.stock);
    data.append('image', this.state.image);
    console.log(addProduct);

    this.props.dispatch(editProduct(data, propsId));
  };

  testSubmit = e => {
    console.log('button baru');
  };

  render() {
    const { idProduct, categorys } = this.props;
    console.log(idProduct);
    return (
      <div>
        <div
          className='modal fade'
          id='editModal'
          tabindex='-1'
          role='dialog'
          aria-labelledby='editModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='editModalLabel'>
                  Edit Product
                </h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <Form>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter name'
                      name='name'
                      onChange={this.onChangeHandler}
                      value={idProduct.name}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      name='category'
                      onChange={this.onChangeHandler}
                      as='select'
                    >
                      <option selected value={0} disabled>
                        Choose...
                      </option>
                      {categorys.map((category, index) => (
                        <option key={index} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Enter Price'
                      name='price'
                      onChange={this.onChangeHandler}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Stock</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Enter Stock'
                      name='stock'
                      onChange={this.onChangeHandler}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type='file'
                      placeholder='Enter image file'
                      name='image'
                      onChange={this.onChangeImageHandler}
                    />
                  </Form.Group>
                  <Button
                    onClick={this.onSubmitHandler}
                    data-dismiss='modal'
                    variant='primary'
                    type='submit'
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

export default connect()(EditModals);
