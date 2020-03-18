import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/product';

import { Container, Row, Button, Table, Col } from 'react-bootstrap';
import NewNavbar from '../Layout/Navbar';
import NewModals from '../Product/addModal';
import EditModals from '../Product/editModal';
import DeleteModal from '../Product/deleteModal';

class ProductDash extends Component {
  state = {
    idProduct: '',
    selectProduct: [],
    selectProductDelete: [],
  };

  onClickHandler = e => {
    console.log(e)
    this.setState({
      idProduct: e,
    });
  };

  getProducts = () => {
    this.props.dispatch(getProducts());
  };

  componentDidMount() {
    this.getProducts();
  }

  onLogout() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('token');
    localStorage.removeItem('status');
    localStorage.removeItem('isAuth');
    this.props.history.push('/login');
  }

  productEdit = product => {
    this.setState({
      selectProduct: product,
    });
  };


  render() {
    const { products, categorys } = this.props;
    return (
      <Row style={{backgroundColor:'#ebebeb'}}>
        <NewNavbar onClick={this.onLogout.bind(this)} onhidden={true} />
        <NewModals categorys={categorys} />
        <EditModals categorys={categorys} product={this.state.selectProduct} />
        <DeleteModal idProduct={this.state.idProduct} product={this.state.selectProductDelete} />
        <Row style={{ marginTop: '20px', marginBottom: '20px'}}></Row>
        <Container style={{ marginTop: '5%' }}>
          <Row style={{marginTop:'20px'}}>
            <Col sm={10}>
              <h5>Manage product</h5>
            </Col>
            <Col sm={2}>
            <Button
              type='button'
              className=' btn btn-primary btn-outline-light'
              data-toggle='modal'
              data-target='#exampleModal'
              style={{backgroundColor:'#f1a98c', border: 'transparent'}}
            >
              Add
            </Button>
            </Col>
          </Row>
          <Table className='mt-3'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Brand</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td><img src={product.image} style={{height:'50px', width:'50px', borderRadius:'10px'}} /></td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.brand}</td>
                  <td>
                    <Button
                      className='Button'
                      onClick={() => (this.productEdit(product))}
                      data-toggle='modal'
                      data-target='#editModal'
                      variant='danger'
                      value={product.id}
                      variant='warning'
                      style={{backgroundColor:'transparent', border: 'transparent'}}
                    >
                      <i className='fas fa-edit' style={{color:'#929394'}}></i>
                    </Button>{' '}
                    - {' '}
                    <Button
                      className='Button'
                      onClick={() => (this.onClickHandler(product.id))}
                      data-toggle='modal'
                      data-target='#deleteModal'
                      variant='danger'
                      style={{backgroundColor:'transparent', border: 'transparent'}}
                    >
                      <i class='fas fa-trash' style={{color:'#929394'}} ></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    categorys: state.categorys.categorys,
    products: state.products.products,
  };
};

export default connect(mapStateToProps)(ProductDash);
