import styled from "styled-components";

export const Container = styled.form`
  height: 3rem;

  display: flex;
  margin: 3.5rem 1.5rem 2.2rem;

  background: var(--input-background);
  border-radius: 0.6rem;

  font-weight: 400;
  line-height: 3rem;

  img {
    width: 16px;

    margin: 1rem;
  }
`;

export const SearchInputComponent = styled.input`
  width: 100%;

  background: var(--input-background);

  border: none;
  outline: none;

  border-radius: 0.6rem;

  &::placeholder {
    color: var(--placeholder);
  }
`;
