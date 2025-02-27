function UserList({ users }) {
  const renderedUsers = users.map((user) => {
    return (
      <tr key={user.name} data-testid='userRow'>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid='usersTBody'>{renderedUsers}</tbody>
    </table>
  );
}

export default UserList;
