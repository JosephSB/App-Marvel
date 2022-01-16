import { BtnPag } from "./styles";

const BtnPage = ({ handlePage, pag, active }) => {
  return (
    <BtnPag
      aria-current={active}
      onClick={pag <= 77 && handlePage}
      value={pag <= 77 && pag}
    >
      {pag <= 77 && pag}
    </BtnPag>
  );
};

export default BtnPage;
