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
          <Button
            className='Button'
            variant='warning'
            size='sm'
            onClick={onClickEdit}
          >
            <i className='fas fa-edit'></i>
          </Button>{' '}
          -{' '}
          <Button
            className='Button'
            variant='danger'
            size='sm'
            onClick={onClickDelete}
          >
            <i className='fas fa-trash'></i>
          </Button>
        </td>
      </tr>
    </Fragment>
  );
};

export default UserItem;
