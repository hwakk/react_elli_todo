import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

// 투두앱
// - 전체 아이템들 보여주기
// - 아이템 추가
// - 아이템 삭제
// - 아이템 체크박스
// - 아이템 필터링
// - 다크모드
// - 로컬스토리지 저장

const filters = ["all", "completed", "active"];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={handleFilterChange}
      />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
