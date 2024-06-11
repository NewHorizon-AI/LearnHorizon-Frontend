import Link from 'next/link';
import React from 'react';

interface User {
  _id: string;
  name: string;
  username: string;
  password: string;
  followers: number;
  editPermissions: boolean;
  biography: string;
  creationDate: string;
  email: string;
  image: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user._id}>
        <Link href={`/user/${user._id}`}>
          {user._id},{user.name}
        </Link>
      </li>
    ))}
  </ul>
);

export default UserList;
