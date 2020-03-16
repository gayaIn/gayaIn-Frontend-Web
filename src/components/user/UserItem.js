import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const UserItem = ({ user, onSelectItemUserEdit, onSelectUserDelete }) => {
  const onClickEdit = e => {
    e.preventDefault();
    onSelectItemUserEdit(user);
  };

  const onClickDelete = e => {
    e.preventDefault();
    onSelectUserDelete(user);
  };

  return (
    <Fragment>
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.status}</td>
        <td>{user.created_at}</td>

        <td>
          <Button variant='warning' size='sm' onClick={onClickEdit}>
            Edit
          </Button>{' '}
          -{' '}
          <Button variant='danger' size='sm' onClick={onClickDelete}>
            Delete
          </Button>
        </td>
      </tr>
    </Fragment>
  );
};

export default UserItem;
