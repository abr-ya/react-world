import { useState, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import {
  StyledForm, InputContainer, Input, StyledReactSelect,
} from './styled/Form.styled';

// eslint-disable-next-line react/prop-types
function Form({ changeHandler }) {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const regionValue = region?.value || '';
    changeHandler({ search, region: regionValue });
  }, [search, region]);

  const selectOptions = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ];

  return (
    <StyledForm>
      <InputContainer>
        <IoSearch />
        <Input onChange={(e) => setSearch(e.target.value)} value={search} />
      </InputContainer>
      <StyledReactSelect
        options={selectOptions}
        placeholder="Filter by Region"
        isClearable // включаем возможность очистить
        isSearchable={false} // отменяем возможность поиска
        value={region}
        onChange={setRegion}
      />
    </StyledForm>
  );
}

export default Form;
