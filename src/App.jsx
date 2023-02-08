import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Category from "./components/Category";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import NavBar from "./components/NavBar";
import "./index.css";
import { items } from "./data"

function App() {
  const [itemsData, setItemsData] = useState(items);

  // Get all category
  const allCategory = ['الكل', ...new Set(items.map(item => item.category))];


  // Filter by category
  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items)
    } else {
      const newArr = items.filter((item) => item.category === cat)
      setItemsData(newArr)
    }
  }


  // Filter by search form
  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word)
      setItemsData(newArr)
    }
  }

  return (
    <div className="color-body">
      <NavBar filterbySearch={filterbySearch} />
      <Container>
        <Header />
        <Category filterbyCategory={filterbyCategory} allCategory={allCategory} />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;

// npm config set legacy-peer-deps true