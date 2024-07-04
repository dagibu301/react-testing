import './styles.css';
import ProductList from './components/ProductList';
import { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

export default function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="container mx-auto">
      <div className='user-list-component'>
        <UserForm onUserAdd={onUserAdd} />
        <hr />
        <UserList users={users} />
      </div>
      <hr />
      <ProductList />
    </div>
  );
}
