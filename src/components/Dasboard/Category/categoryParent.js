import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Row, Button, Table, Col } from 'react-bootstrap';
import NewNavbar from '../../Layout/Navbar';
import AddCategoryModals from './addCategory';
import EditCategoryModals from './editCategory';
import DeleteCategoryModal from './deleteCategory';

class CategoryParent extends Component {
  state = {
    idCategory: '',
  };

  onClickHandler = e => {
    console.log(e.target.value);
    this.setState({
      idCategory: e.target.value,
    });
  };

  onLogout() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('token');
    localStorage.removeItem('status');
    localStorage.removeItem('isAuth');
    this.props.history.push('/login');
  }

  render() {
    const { categorys } = this.props;
    console.log(categorys);
    return (
      <Row>
        <NewNavbar onClick={this.onLogout.bind(this)} onhidden={true} />
        <AddCategoryModals />
        <EditCategoryModals idCategory={this.state.idCategory} />
        <DeleteCategoryModal idCategory={this.state.idCategory} />
        <Row style={{ marginTop: '20px', marginBottom: '20px' }}></Row>
        <Container>
          <div className='mt-3'>
            <Button
              type='button'
              className=' btn btn-primary btn-outline-light'
              data-toggle='modal'
              data-target='#exampleModal'
            >
              Add
            </Button>
          </div>
          <Table className='mt-3'>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categorys.map((category, index) => (
                <tr key={index}>
                  <td>{category.category_id}</td>
                  <td>{category.name}</td>
                  <td>
                    <Button
                      onClick={this.onClickHandler}
                      data-toggle='modal'
                      data-target='#editCategoryModal'
                      variant='danger'
                      value={category.id}
                      variant='warning'
                    >
                      <i className='fas fa-edit'></i>
                    </Button>{' '}
                    -
                    <Button
                      onClick={this.onClickHandler}
                      data-toggle='modal'
                      data-target='#deleteCategoryModal'
                      variant='danger'
                      value={category.id}
                    >
                      <i className='fas fa-trash'></i>
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
  };
};

export default connect(mapStateToProps)(CategoryParent);
