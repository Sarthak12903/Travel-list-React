import { useState } from "react";
import Logo from "../components/Logo";
import Form from "../components/Form";
import PackingList from "../components/PackingList";
import Stats from "../components/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Phone", quantity: 1, packed: false },
//   { id: 4, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        setItems={setItems}
        items={items}
        onDeleteItems={handleDeleteItems}
        onUpdate={handleToggleItems}
      />
      <Stats items={items} />
    </>
  );
}
