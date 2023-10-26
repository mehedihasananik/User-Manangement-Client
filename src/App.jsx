import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(users);

  return (
    <div>
      <div className="pt-5">
        {users.map((user) => {
          return (
            <div
              className="flex justify-center py-2 items-center"
              key={user._id}
            >
              <div className="flex gap-x-8 border justify-center w-[20%] items-center">
                <h3>{user.name}</h3>
                <p>{user.age}</p>
                <p>{user.occupation}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
