
import { useState, useEffect } from 'react'

function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className="bg-slate-800 text-white p-8 m-4 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">
        User List
      </h2>

      {users.map(user => (
        <div key={user.id} className="mb-3">
          <h3 className="font-bold">{user.name}</h3>
          <p className="text-gray-400">{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default UserList
