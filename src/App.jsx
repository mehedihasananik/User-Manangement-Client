import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSub = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts([...products, data]);
      });
  };

  return (
    <div className="text-3xl flex justify-center">
      <form onSubmit={handleSub}>
        <div className="flex flex-col w-[100%] gap-y-5 pt-10">
          <input className="border" type="text" name="name" id="" />
          <input className="border" type="email" name="email" id="" />
          <button type="submit">Submit</button>
        </div>
      </form>
      {products.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
}

export default App;
