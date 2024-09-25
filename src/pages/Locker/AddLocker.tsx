import React, { useState } from "react";

interface Locker {
  lockerName: string;
  dealerId: string;
}

export default function AddLocker() {
  const [lockerName, setLockerName] = useState<string>("");
  const [dealerId, setDealerId] = useState<string>("");
  const [lockers, setLockers] = useState<Locker[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (lockerName && dealerId) {
      const newLocker: Locker = { lockerName, dealerId };
      setLockers([...lockers, newLocker]);
      setLockerName("");
      setDealerId("");
    }
  };

  const filteredLockers = lockers.filter((locker) =>
    locker.lockerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalLockers = filteredLockers.length;
  const totalPages = Math.ceil(totalLockers / itemsPerPage);
  const indexOfLastLocker = currentPage * itemsPerPage;
  const indexOfFirstLocker = indexOfLastLocker - itemsPerPage;
  const currentLockers = filteredLockers.slice(
    indexOfFirstLocker,
    indexOfLastLocker
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex relative">
      <div className="max-w-md bg-custom-blue p-10 rounded-md shadow-md absolute mt-20 w-96">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Add New Locker
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="lockerName"
              className="block text-sm font-medium text-white"
            >
              Locker Name
            </label>
            <input
              type="text"
              id="lockerName"
              value={lockerName}
              onChange={(e) => setLockerName(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter Locker Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="dealerId"
              className="block text-sm font-medium text-white"
            >
              Dealer ID
            </label>
            <input
              type="text"
              id="dealerId"
              value={dealerId}
              onChange={(e) => setDealerId(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter Dealer ID"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 mt-5"
          >
            Submit
          </button>
        </form>
      </div>

      <div
        className="flex-1 p-8 ml-96 overflow-y-auto"
        style={{ maxHeight: "100vh" }}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Locker List</h2>

        <div className="mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border bg-custom-blue text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search Locker Name"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
            <thead>
              <tr className="bg-custom-blue text-white text-left">
                <th className="py-2 px-4 border-b">Locker Name</th>
                <th className="py-2 px-4 border-b">Dealer ID</th>
              </tr>
            </thead>
            <tbody>
              {currentLockers.length > 0 ? (
                currentLockers.map((locker, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{locker.lockerName}</td>
                    <td className="py-2 px-4 border-b">{locker.dealerId}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="py-2 px-4 text-center border-b">
                    No lockers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 border rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
