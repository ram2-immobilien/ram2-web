import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAngleLeft,
  faAngleRight,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Pagination.css";


interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

// componente de paginacion
const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {

  // funcion para cambiar de pagina
  const handlePageChange = (page: number) => {
    // que no se salga de los limites
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
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

    // siempre muestro la primera
    pages.push(1);

    // si la pagina actual esta lejos del principio pongo puntitos
    if (currentPage > 3) {
      pages.push("...");
    }

    // muestro la pagina anterior, la actual y la siguiente
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    // si la pagina actual esta lejos del final pongo puntitos
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    // siempre muestro la ultima
    pages.push(totalPages);

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="paginacion-contenedor">
      <div className="paginacion">

        {/* boton para ir a la primera pagina */}
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="paginacion-btn"
        >
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>

        {/* boton pagina anterior */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="paginacion-btn"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
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
          <FontAwesomeIcon icon={faAngleRight} />
        </button>

        {/* boton ultima pagina */}
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="paginacion-btn"
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </button>

      </div>
    </div>
  );
};

export default Pagination;