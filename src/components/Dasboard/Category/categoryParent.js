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
    selectCategory: [],
  };

  onClickHandler = event => {
    console.log(event);
    this.setState({
      idCategory: event,
    });
  };

  categoryEdit = category => {
    this.setState({
      selectCategory: category,
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
    return (
      
      <Row style={{backgroundColor:'#ebebeb',height:'100vh'}}>
        <NewNavbar onClick={this.onLogout.bind(this)} onhidden={true} />
        <AddCategoryModals />
        <EditCategoryModals idCategory={this.state.idCategory} category={this.state.selectCategory} />
        <DeleteCategoryModal idCategory={this.state.idCategory} />
        <Row style={{ marginTop: '20px', marginBottom: '20px' }}></Row>
        <Container style={{ marginTop: '5%' }}>
        <Row style={{marginTop:'20px'}}>
            <Col sm={10}>
              <h5>Manage category</h5>
            </Col>
            <Col sm={2}>
            <Button
              type='button'
              className=' btn btn-primary btn-outline-light'
              data-toggle='modal'
              data-target='#categoryModal'
              style={{backgroundColor:'#f1a98c', border: 'transparent'}}
            >
              Add
            </Button>
            </Col>
          </Row>
          <Table className='mt-3' style={{width:'80%', marginLeft:'8%'}}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categorys.map((category, index) => (
                <tr key={index}>
                  <td><img src={category.image} style={{height:'50px', width:'100px', borderRadius:'7px'}} /></td>
                  <td>{category.name}</td>
                  <td>
                    <Button
                      onClick={() => (this.categoryEdit(category))}
                      data-toggle='modal'
                      data-target='#editCategoryModal'
                      variant='danger'
                      variant='warning'
                      style={{backgroundColor:'transparent', border: 'transparent'}}
                    >
                      <i className='fas fa-edit' style={{color:'#929394'}}></i>
                    </Button>{' '}
                    - {' '}
                    <Button
                      onClick={() => (this.onClickHandler(category.category_id))}
                      data-toggle='modal'
                      data-target='#deleteCategoryModal'
                      variant='danger'
                      style={{backgroundColor:'transparent', border: 'transparent'}}
                    >
                      <i className='fas fa-trash' style={{color:'#929394'}}></i>
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
