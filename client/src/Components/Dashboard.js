import React, { useState } from "react";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";

function Dashboard() {
  const [refresh, setRefresh] = useState(false);

  const reloadProducts = () => {
    setRefresh(!refresh);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Inventory Dashboard</h1>

      <AddProduct onProductAdded={reloadProducts} />
      <hr />
      <ProductList key={refresh} />
    </div>
  );
}

export default Dashboard;
