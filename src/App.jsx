import { useState, useEffect } from "react";
import Header from "./Header";
import AddItem from "./AddItem";
import ShoppingList from "./ShoppingList";
import FilterButtons from "./FilterButtons";

function App() {
  const [list, setList] = useState("");

  const [lists, setLists] = useState(() => {
    const saved = localStorage.getItem("lists");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  
  function addList() {
    if (list.trim() === "") return;

    const newItem = {
      name: list,
      bought: false, 
    };

    setLists([...lists, newItem]);
    setList("");
    setFilter("all");
  }

  // ✅ DELETE ITEM
  function deleteItem(indexToDelete) {
    const updatedList = lists.filter(
      (_, index) => index !== indexToDelete
    );
    setLists(updatedList);
  }

  // ✅ TOGGLE BUY STATUS
  function toggleItem(indexToToggle) {
    const updatedList = lists.map((item, index) =>
      index === indexToToggle
        ? { ...item, bought: !item.bought }
        : item
    );
    setLists(updatedList);
  }

  // ✅ FILTER LOGIC 
  const filteredLists = lists.filter((item) => {
    if (filter === "bought") return !item.bought;
    if (filter === "pending") return item.bought;
    return true; // all
  });


  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  return (
    <div className="app-wrapper min-vh-100">
      <Header />

      <div className="container py-4 py-md-5" style={{ maxWidth: "680px" }}>

        {/* Summary bar */}
        <div className="summary-bar rounded-4 shadow p-4 mb-4 text-white text-center">
          <span className="summary-icon">🛒</span>
          <h2 className="fw-bold fs-4 mb-1 mt-2">My Shopping List</h2>
          <p className="mb-0 opacity-75 small">
            {lists.length} {lists.length === 1 ? "item" : "items"} total
            {lists.filter(i => i.bought).length > 0 &&
              ` · ${lists.filter(i => i.bought).length} bought`}
          </p>
        </div>

        <AddItem
          list={list}
          setList={setList}
          addList={addList}
        />

        <FilterButtons
          filter={filter}
          setFilter={setFilter}
        />

        <ShoppingList
          lists={filteredLists}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
        />

      </div>
    </div>
  );
}

export default App;