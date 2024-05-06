import Pagination from "./components/pagination/Pagination";
import { data } from "./data/data";
import { useState } from "react";
import { paginate } from "./utils/paginate";
function App() {
  const [currentPageCount, setCurrentPageCount] = useState(0);
  const itemPerPage = 5;

  const handlePageChange = (page) => {
    setCurrentPageCount(page);
  };
  const dataArry = paginate(data, currentPageCount, itemPerPage);

  return (
    <div className="App">
      {dataArry.map((data) => (
        <div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl text-neutral-500">
            {data.name}
          </h1>
          <span className="text-3xl sm:text-5xl lg:text-6xl text-red-400">
            {data.age}
          </span>
        </div>
      ))}
      <Pagination
        itemCount={data.length}
        pageSize={itemPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPageCount}
      />
    </div>
  );
}

export default App;
