import React, { useMemo, useState } from "react";

function Searchfilter() {
  const [search, setSearch] = useState("");

  
  const items = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `Product ${i + 1}`,
  }));

 
  const filteredItems = useMemo(() => {
    console.log("Filtering running...");

    return items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search Filter</h1>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Results: {filteredItems.length}</h3>

      {filteredItems.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Searchfilter;