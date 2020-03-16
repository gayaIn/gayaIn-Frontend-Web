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
    selectProduct: null,
    selectProductDelete: null,
  };

  onClickHandler = e => {
    console.log(e.target.value);
    this.setState({
      idProduct: e.target.value,
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
  onSelectItemProductEdit = product => {
    this.setState({
      selectProduct: product,
      showEdit: true,
    });
  };

  onSelectProductDelete = product => {
    this.setState({
      selectProductDelete: product,
      showDelete: true,
    });
  };

  render() {
    const { products, categorys } = this.props;
    return (
      <Row>
        <Col sm='1'>
          <div>
            <button
              type='button'
              className='add btn btn-outline-light'
              data-toggle='modal'
              data-target='#exampleModal'
              style={{
                backgroundColor: 'transparent',
                border: '0px solid black',
                marginLeft: '7rem',
                marginTop: '7rem',
                possition: 'fixed',
              }}
            >
              <i className='material-icons' style={{ color: 'grey' }}>
                {' '}
                add_to_queue
              </i>
            </button>
          </div>
          <div></div>
        </Col>
        <Container>
          <NewNavbar onClick={this.onLogout.bind(this)} onhidden={true} />
          <NewModals categorys={categorys} />
          <EditModals idProduct={this.state.idProduct} categorys={categorys} />
          <DeleteModal idProduct={this.state.idProduct} />
          <Row style={{ marginTop: '20px', marginBottom: '20px' }}></Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>
                    <Button
                      onClick={this.onClickHandler}
                      data-toggle='modal'
                      data-target='#editModal'
                      variant='danger'
                      value={product.id}
                      variant='warning'
                      product={this.state.selectProduct}
                    >
                      Edit
                    </Button>{' '}
                    -
                    <Button
                      onClick={this.onClickHandler}
                      data-toggle='modal'
                      data-target='#deleteModal'
                      variant='danger'
                      value={product.id}
                    >
                      Delete
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
