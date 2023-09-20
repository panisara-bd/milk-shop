import { colors } from '@/helpers/colors';
import { HOST } from '@/helpers/grapql-queries';
import { ProductType } from '@/types';
import { useRouter } from 'next/router';
import styled from 'styled-components';

type Props = {
  product: ProductType;
  id: string;
};

export const ProductCard = ({ product, id }: Props) => {
  const router = useRouter();
  return (
    <CardContainer key={product.id} onClick={() => router.push(id)}>
      <ImageContainer>
        <Image src={`${HOST}/${product.image}`} />
      </ImageContainer>
      <CardTexts>
        <Name>{product.name}</Name>
        <CardFooter>
          <Type>{product.type}</Type>
          <Qty>{product.storage} liters</Qty>
        </CardFooter>
      </CardTexts>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: ${colors.light};
  width: 290px;
  border-radius: 10px;
  overflow: hidden;
  border: 4px solid ${colors.lightBrown};
  cursor: pointer;

  &:hover {
    border: 4px solid ${colors.dark};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 50px;
  background-color: ${colors.darkBrown};
`;

const Image = styled.img`
  max-width: 100px;
`;

const CardTexts = styled.div`
  margin: 20px;
  margin-bottom: 15px;
`;

const Name = styled.h4`
  font-weight: 600;
  margin: 0;
`;

const CardFooter = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin: 0;
  margin-top: 30px;
`;

const Type = styled.p`
  margin: 0;
  color: ${colors.grey};
`;
const Qty = styled.p`
  margin: 0;
  color: ${colors.brownIsh};
`;
