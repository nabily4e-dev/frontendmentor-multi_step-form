/** @format */

import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input`
  border-radius: 7px;
  padding: 15px;
  width: 100%;
  border: 1px solid ${({ error }) => (error ? 'red' : 'rgba(0, 0, 0, 0.267)')};
`;

export const Label = styled.label`

  margin-bottom: 5px;
`;

export const Error = styled.span`
  font-size: 12px;
  color: red;
`;
