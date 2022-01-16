import {
  ContainerCard,
  ContainerInfoCard,
  Figure,
  Image,
  Text,
  Link,
} from "./styles";

const CardCharacter = ({ name, thumbnail, id }) => {
  return (
    <Link exact="true" to={`/Character/${id}`} activeclassname="active">
      <ContainerCard>
        <div>
          <Figure>
            <Image
              src={thumbnail.path + "." + thumbnail.extension}
              width={200}
            />
          </Figure>
        </div>
        <ContainerInfoCard>
          <Text>{name.toUpperCase()} </Text>
        </ContainerInfoCard>
      </ContainerCard>
    </Link>
  );
};

export default CardCharacter;
