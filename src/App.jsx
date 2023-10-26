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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="flex justify-center pt-5">
        <form className="flex flex-col w-[25%] gap-y-2" onSubmit={handleSubmit}>
          <input
            className="border px-2 py-1 capitalize "
            type="text"
            name=""
            id=""
            placeholder="name"
          />
          <input
            className="border px-2 py-1 capitalize "
            type="email"
            name=""
            id=""
            placeholder="email"
          />
          <div className="flex justify-center">
            <button
              className="text-white bg-blue-600 py-1.5 w-28 rounded-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

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
