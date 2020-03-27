import React, { Component } from 'react';
import { Container, Col, Row, Button, Table } from 'react-bootstrap';
import UserItem from './Historyitem';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions/user';
import NewNavbar from '../../Layout/Navbar';

class History extends Component {
  state = {
    show: false,
    showEdit: false,
    showDelete: false,
    selectUser: null,
    selectUserDelete: null,
  };
  componentDidMount() {
    this.getAllUser();
  }

  getAllUser = async () => {
    await this.props.dispatch(getUser());
  };

  onLogout() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('token');
    localStorage.removeItem('isAuth');
    localStorage.removeItem('status');
    this.props.history.push('/login');
  }
  render() {
    console.log(this.props);
    const { user } = this.props;
    const itemUser = user.user.map((user, index) => (
      <UserItem
        user={user}
        key={index}
      />
    ));

    return (
      <Row style={{backgroundColor:'#ebebeb',height:'100vh'}}>
        <NewNavbar onClick={this.onLogout.bind(this)}/>
        <Container style={{ marginTop: '5%' }}>
          <Row style={{ marginBottom: '20px' }}>
            <Col sm={10}>
              <h5>History transactions</h5>
            </Col>
          </Row>
          <Table>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Role Id</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>{itemUser}</tbody>
          </Table>
        </Container>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(History);
