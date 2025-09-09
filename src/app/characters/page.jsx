"use client";
import React from "react";
import Link from "next/link";
import styles from "./characters.module.css";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { Pagination } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://ghibliapi.vercel.app/people");
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
      }
    }
    fetchData();
  }, []);

  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCharacters = characters.slice(startIndex, endIndex);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Characters from Studio Ghibli</h1>
      <div className={styles.cards}>
        {currentCharacters.map((character) => (
          <Link
            key={character.id || character.name}
            href={`/characters/${character.id}`}
            className={styles.cardLink}
          >
            <Card character={character} />
          </Link>
        ))}
      </div>
      <div className={styles.pagination}>
        <Pagination
          total={characters.length}
          showTotal={(total) => `Total ${total} usuários`}
          pageSize={pageSize}
          current={currentPage}
          showSizeChanger={true}
          pageSizeOptions={["5", "10", "20"]}
          onChange={handlePageChange}
          onShowSizeChange={handlePageChange}
        />
      </div>
      <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
    </div>
  );
}