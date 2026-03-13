"use client";
import { useState } from "react";
import "./Pagination.css";

interface PaginationProps {
  totalPages: number;
  onPageChange?: (page: number) => void;
}

// componente de paginacion
const Pagination = ({ totalPages = 8, onPageChange }: PaginationProps) => {

  // guardo en que pagina estoy
  const [currentPage, setCurrentPage] = useState(1);

  // funcion para cambiar de pagina
  const handlePageChange = (page: number) => {
    // que no se salga de los limites
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (onPageChange) {
      onPageChange(page);
    }
  };

  // aqui calculo que numeros mostrar segun en que pagina estoy
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];

    // si hay pocas paginas las muestro todas
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // siempre muestro la primera pagina
    pages.push(1);

    // si la pagina actual esta lejos del principio pongo puntitos
    if (currentPage > 3) {
      pages.push("...");
    }

    // muestro las paginas alrededor de la pagina actual
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    // si la pagina actual esta lejos del final pongo puntitos
    if (currentPage < totalPages - 3) {
      pages.push("...");
    }

    // siempre muestro la ultima pagina
    pages.push(totalPages);

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="paginacion">

      {/* boton para ir a la primera pagina */}
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className="paginacion-btn"
      >
        «
      </button>

      {/* boton pagina anterior */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="paginacion-btn"
      >
        ‹
      </button>

      {/* aqui pinto los numeros */}
      {visiblePages.map((page, i) => {

        // si es los puntitos pongo el span
        if (page === "...") {
          return (
            <span key={i} className="paginacion-puntos">
              …
            </span>
          );
        }

        // si no pongo el boton con el numero
        return (
          <button
            key={i}
            onClick={() => handlePageChange(page as number)}
            className={`paginacion-btn ${currentPage === page ? "paginacion-btn-activo" : ""}`}
          >
            {page}
          </button>
        );
      })}

      {/* boton pagina siguiente */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="paginacion-btn"
      >
        ›
      </button>

      {/* boton ultima pagina */}
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="paginacion-btn"
      >
        »
      </button>

    </div>
  );
};

export default Pagination;