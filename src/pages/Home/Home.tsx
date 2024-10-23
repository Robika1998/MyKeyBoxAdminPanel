import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Search from "../../components/Search/Search";
import Modal from "../../components/Modal.tsx/Modal";
import Table from "../../components/Table/Table";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function Home() {
  const data: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];

  const columns: { header: string; accessor: keyof User }[] = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    alert("Button clicked!");
  };
  const handleSearch = (query: string) => {
    alert(`Searching for: ${query}`);
  };
  return (
    <div>
      <h1>Hello</h1>
      <Button label="Click Me" onClick={handleClick} />
      <Search onSearch={handleSearch} placeholder="Type your query..." />

      <div>
        <div>
          <h1>Hello</h1>

          <Button color="red" label="Open Modal" onClick={handleModalOpen} />

          <Modal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            title="My Modal"
          >
            <p>This is the content of the modal.</p>
            <Button label="Close" onClick={handleModalClose} />
          </Modal>
        </div>
      </div>
      <div>
        <h1>User List</h1>
        <Table<User> data={data} columns={columns} className="my-4" />
      </div>
    </div>
  );
}
