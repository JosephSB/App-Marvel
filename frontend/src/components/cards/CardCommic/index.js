import { FigCaption, Figure } from "./styles";

const CardCommic = ({ image, title }) => {
  return (
    <Figure>
      <img
        src={`${image.path}.${image.extension} `}
        alt={title}
        width={260}
        height={400}
      />
      <FigCaption>{title}</FigCaption>
    </Figure>
  );
};

export default CardCommic;
