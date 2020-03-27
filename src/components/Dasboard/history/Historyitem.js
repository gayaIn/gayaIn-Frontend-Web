import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const UserItem = ({ user }) => {


  return (
    <Fragment>
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.status}</td>
      </tr>
    </Fragment>
  );
};

export default UserItem;
