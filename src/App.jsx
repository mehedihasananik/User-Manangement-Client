
import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/users"
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
  <div>
   {products.length}
  </div>
  )
}

export default App
