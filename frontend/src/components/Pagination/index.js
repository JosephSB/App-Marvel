import BtnPage from "../Buttons/BtnPage";
import { ContainerPagination, Icon } from "./styles";

const Pagination = ({ page, setPage }) => {
  const handlePage = (e) => setPage(parseInt(e.target.value));
  const lastPage = () => setPage(77);
  const nextPage = () => {
    if (page < 78) setPage(page++);
  };

  const prevPage = () => {
    if (page >= 1) setPage(page--);
    else setPage(0);
  };
  const firstPage = () => setPage(0);

  return (
    <ContainerPagination>
      <Icon onClick={firstPage} className="fas fa-backward fa-2x" />
      <Icon onClick={prevPage} className="fas fa-caret-left fa-2x" />
      <BtnPage handlePage={handlePage} active="true" pag={page} />
      <BtnPage handlePage={handlePage} pag={page + 1} />
      <BtnPage handlePage={handlePage} pag={page + 2} />

      <Icon onClick={nextPage} className="fas fa-caret-right fa-2x" />
      <Icon onClick={lastPage} className="fas fa-forward fa-2x" />
    </ContainerPagination>
  );
};

export default Pagination;
