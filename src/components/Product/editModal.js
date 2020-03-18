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
    brand: '',
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

  componentWillReceiveProps({ product }) {
    this.onSetValue(product);
}

  onSetValue = (product) => {
    this.setState({
        id: product.id,
        name: product.name,
        image: product.image,
        category: product.description,
        brand: product.brand,
        stock: product.stock,
        price: product.price,
    })
}

  onSubmitHandler = e => {
    console.log('masuk sinilkasjdklas');
    e.preventDefault();

    const propsId = this.props.product.id;
    let data = new FormData();
    data.append('name', this.state.name);
    data.append('image', this.state.image);
    data.append('category', this.state.category);
    data.append('brand', this.state.brand);
    data.append('stock', this.state.stock);
    data.append('price', this.state.price);
    console.log(addProduct);

    this.props.dispatch(editProduct(data, propsId));
  };

  render() {
    const { categorys } = this.props;
    console.log(this.props);
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
                      value={this.state.name}
                      onChange={this.onChangeHandler}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      name='category'
                      value={this.state.category}
                      onChange={this.onChangeHandler}
                      as='select'
                    >
                      <option selected value={0} disabled>
                        Choose...
                      </option>
                      {categorys.map((category, index) => (
                        <option key={index} value={category.category_id}>
                          {category.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type='number'
                      value={this.state.price}
                      placeholder='Enter Price'
                      name='price'
                      onChange={this.onChangeHandler}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Stock</Form.Label>
                    <Form.Control
                      type='number'
                      value={this.state.stock}
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
                  <Form.Group>
                    <Form.Label>brand</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter Brand'
                      name='brand'
                      value={this.state.brand}
                      onChange={this.onChangeHandler}
                    />
                  </Form.Group>
                  <Button
                    onClick={this.onSubmitHandler}
                    data-dismiss='modal'
                    variant='primary'
                    type='submit'
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

export default connect()(EditModals);
