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
<<<<<<< HEAD
=======
    brand: '',
>>>>>>> desain-web
  };
  onChangeImageHandler = e => {
    this.setState({
      image: e.target.files[0],
    });
  };

<<<<<<< HEAD
  componentWillReceiveProps({ selectProduct }) {
    this.onSetValue(selectProduct);
  }

  onSetValue = selectProduct => {
    this.setState({
      name: selectProduct.name,
      image: selectProduct.image,
      category: selectProduct.category,
      brand: selectProduct.brand,
      additional: selectProduct.additional_category,
      stock: selectProduct.stock,
      price: selectProduct.price,
      promo: selectProduct.promo_id,
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
    data.append('id', propsId);
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
    const { idProduct, categorys, selectProduct } = this.props;
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

=======
  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentWillReceiveProps({ product }) {
    this.onSetValue(product);
    console.log(product)
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

>>>>>>> desain-web
export default connect()(EditModals);
