import React, {
  useState, useEffect, useCallback, useMemo,
} from 'react';

const filter = (users, query) => {
  console.log('filtering ...');
  return users.filter((user) => user.name.toLowerCase().includes(query));
};

const UsersList = ({ users, query }) => {
  const filtered = useMemo(() => filter(users, query), [users, query]);
  return filtered.map((user) => <div key={user.id}>{user.name}</div>);
};

const UseMemoComponent = () => {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    console.log('requesting ...');
    const data = await new Promise((resolve) => {
      resolve([
        { id: 1, name: 'Nathália' },
        { id: 2, name: 'Yuki' },
        { id: 3, name: 'Pacheco' },
      ]);
    });

    setUsers(data);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleOnChange = (e) => setQuery(e.target.value);
  const handleOnClick = () => setCount(count + 1);

  return (
    <div>
      <input type="text" onChange={handleOnChange} />
      <button type="button" onClick={handleOnClick}>Increment</button>
      <UsersList users={users} query={query} />
    </div>
  );
};

export default UseMemoComponent;
