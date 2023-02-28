import styled from 'styled-components';
import { useState } from 'react';

interface InsertCityNamePropsType {
  setCityName: (cityName: string) => void;
}

const InsertCityNameComponent = ({ setCityName }: InsertCityNamePropsType) => {
  const [city, setCity] = useState('seoul');

  const changeCityName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const clickChangcity = () => {
    setCityName(city);
  };

  return (
    <Container>
      <InputCityName type='text' onChange={changeCityName} value={city} />
      <SearchButton onClick={clickChangcity}>{'날씨 확인'}</SearchButton>
    </Container>
  );
};

export default InsertCityNameComponent;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputCityName = styled.input`
  border: none;
  border-radius: 10px;
  font-size: 20px;
`;
const SearchButton = styled.button`
  background-color: #81d1ff;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;
