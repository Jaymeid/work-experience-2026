import styled from "styled-components";


const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  gap: 30px;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  max-width: 1100px;
  padding: 0;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
`;

const Image = styled.img`
  width: 700px;
  height: 380px;
  object-fit: cover;
`;

const TextBox = styled.div`
  padding: 30px;
`;

const Title = styled.h3`
  color: #0A2540;
  font-size: 28px;
  line-height: 1.4;
  margin: 0;
`;

const Description = styled.p`
  color: #475569;
  font-size: 18px;
  line-height: 1.6;
`;

export function Card() {
  return (
    <CardContainer>
      <Image
        src="https://t3.ftcdn.net/jpg/08/08/99/46/360_F_808994683_OUZEZt581lOYP0H2zGRXMZKJ5g87jkjx.jpg"
        alt="Photo"
      />
      <TextBox>
        <Title>
          Reliable Banking Made Simple
        </Title>

        <Description>
          Experience secure and reliable banking designed around your needs.
          We provide simple financial solutions, modern digital tools, and
          dedicated customer support to help you manage your money with
          confidence.
        </Description>
      </TextBox>
    </CardContainer>
  );
}