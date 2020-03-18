import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/product';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> desain-web

import { Container, Row, Button, Table, Col } from 'react-bootstrap';
import NewNavbar from '../Layout/Navbar';
import NewModals from '../Product/addModal';
import EditModals from '../Product/editModal';
import DeleteModal from '../Product/deleteModal';

class ProductDash extends Component {
  state = {
    idProduct: '',
<<<<<<< HEAD
    selectProduct: null,
    selectProductDelete: null,

    activePage: 1,
    sort: 'id',
    by: 'ASC',
    searchName: '',
    activeCategory: '',
  };

  onClickHandler = e => {
    console.log(e.target.value);
    this.setState({
      selectProduct: product,
      idProduct: e.target.value,
=======
    selectProduct: [],
    selectProductDelete: [],
  };

  onClickHandler = e => {
    console.log(e)
    this.setState({
      idProduct: e,
>>>>>>> desain-web
    });
  };

  getProducts = () => {
<<<<<<< HEAD
    const data = {};
    this.props.dispatch(getProducts(data));
=======
    this.props.dispatch(getProducts());
>>>>>>> desain-web
  };

  componentDidMount() {
    this.getProducts();
  }

<<<<<<< HEAD
  onClickMenu = e => {
    this.setState({ activeCategory: e.target.id });
    if (e.target.id === '') this.setState({ activeCategory: '' });
    const data = {
      activePage: 1,
      activeCategory: e.target.id,
      searchName: '',
      sort: this.state.sort,
      by: this.state.by,
    };
    this.props.dispatch(getProducts(data));
  };

  //Sort
  onSort = e => {
    this.setState({ sort: e.target.id });
    const data = {
      activePage: 1,
      activeCategory: this.state.activeCategory,
      searchName: '',
      sort: e.target.id,
      by: this.state.by,
    };
    this.props.dispatch(getProducts(data));
  };

  //SortBy
  onBy = e => {
    this.setState({ by: e.target.id });
    const data = {
      activePage: 1,
      activeCategory: this.state.activeCategory,
      searchName: '',
      sortBy: this.state.sort,
      sort: e.target.id,
    };
    this.props.dispatch(getProducts(data));
  };

  //On search
  onChangeSearch = e => {
    this.setState({ searchName: e.target.value });
    const data = {
      activePage: 1,
      activeCategory: '',
      searchName: e.target.value,
      sort: this.state.sort,
      by: this.state.by,
    };
    this.props.dispatch(getProducts(data));
  };

  //Pagination
  changePage = e => {
    this.setState({ activePage: e });
    const data = {
      activePage: e,
      activeCategory: this.state.activeCategory,
      searchName: this.state.searchName,
      sort: this.state.sort,
      by: this.state.by,
    };
    this.props.dispatch(getProducts(data));
  };

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

=======
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

  productDelete = (e,product) => {
    this.setState({
      selectProductDelete: product,
    });
  };

>>>>>>> desain-web
  render() {
    const { products, categorys } = this.props;
    return (
      <Row>
        <NewNavbar onClick={this.onLogout.bind(this)} onhidden={true} />
        <NewModals categorys={categorys} />
<<<<<<< HEAD
        <EditModals
          idProduct={this.state.idProduct}
          categorys={categorys}
          selectProduct={this.state.selectProduct}
        />
        <DeleteModal idProduct={this.state.idProduct} />
        <Row style={{ marginTop: '20px', marginBottom: '20px' }}></Row>
        <Container>
          <nav class='navbar navbar-light bg-light'>
            <ul class='navbar nav bg-light' style={{ background: '#eef0eb' }}>
              <li class='nav-item'>
                <Link class='nav-link' id='' onClick={this.onClickMenu}>
                  All
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link' id='food' onClick={this.onClickMenu}>
                  Foods
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link' id='drink' onClick={this.onClickMenu}>
                  Drinks
                </Link>
              </li>
              <li class='nav-item dropdown'>
                <Link
                  class='nav-link dropdown-toggle'
                  data-toggle='dropdown'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  By
                </Link>
                <div class='dropdown-menu'>
                  <Link class='dropdown-item' id='name' onClick={this.onBy}>
                    Name
                  </Link>
                  <Link class='dropdown-item' id='price' onClick={this.onBy}>
                    Price
                  </Link>
                </div>
              </li>
              <form className='form-inline'>
                <input
                  className='form-control mr-sm-2'
                  type='search'
                  placeholder='Search'
                  onChange={this.onChangeSearch}
                />
              </form>
            </ul>
          </nav>
=======
        <EditModals categorys={categorys} product={this.state.selectProduct} />
        <DeleteModal idProduct={this.state.idProduct} product={this.state.selectProductDelete} />
        <Row style={{ marginTop: '20px', marginBottom: '20px' }}></Row>
        <Container>
>>>>>>> desain-web
          <div className='Button mt-3'>
            <Button
              type='button'
              className=' btn btn-primary btn-outline-light'
              data-toggle='modal'
              data-target='#exampleModal'
            >
              Add
            </Button>
          </div>
<<<<<<< HEAD
          <Table bordered hover className='mt-3'>
            <thead>
              <tr>
                <th>id</th>
=======
          <Table className='mt-3'>
            <thead>
              <tr>
>>>>>>> desain-web
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
<<<<<<< HEAD
=======
                <th>Brand</th>
>>>>>>> desain-web
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
<<<<<<< HEAD
                  <td>{product.id}</td>
=======
>>>>>>> desain-web
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
<<<<<<< HEAD
                  <td>
                    <Button
                      className='Button'
                      onClick={this.onClickHandler}
=======
                  <td>{product.brand}</td>
                  <td>
                    <Button
                      className='Button'
                      onClick={() => (this.productEdit(product))}
>>>>>>> desain-web
                      data-toggle='modal'
                      data-target='#editModal'
                      variant='danger'
                      value={product.id}
                      variant='warning'
<<<<<<< HEAD
                      product={this.state.selectProduct}
=======
>>>>>>> desain-web
                    >
                      <i className='fas fa-edit'></i>
                    </Button>{' '}
                    -
                    <Button
                      className='Button'
<<<<<<< HEAD
                      onClick={this.onClickHandler}
                      data-toggle='modal'
                      data-target='#deleteModal'
                      variant='danger'
                      value={product.id}
                    >
                      <i class='fas fa-trash'></i>
=======
                      onClick={() => (this.onClickHandler(product.id))}
                      data-toggle='modal'
                      data-target='#deleteModal'
                      variant='danger'
                    >
                      <i class='fas fa-trash' ></i>
>>>>>>> desain-web
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
