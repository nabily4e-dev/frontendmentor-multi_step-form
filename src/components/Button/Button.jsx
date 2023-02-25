/** @format */

import styled from '@emotion/styled';

export const Button = styled.button`
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  -webkit-appearance: button;
  cursor: pointer;
  border: none;
  text-transform: capitalize;
  background-color: #174b88;
  border-radius: 8px;
  color: #fff;
  padding: 15px 25px;
  
  /* hover effect */
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #174b88;
    background-color: #fff;
    box-shadow: 0 0 0 2px #174b88;
  }
  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #174b88;
    transition: all 0.3s ease-in-out;
    transform: skewX(-20deg);
    z-index: -1;
  }
  &:hover::after {
    content: '';
    position: absolute;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background-color: #174b88;
    transition: all 0.3s ease-in-out;
    transform: skewX(20deg);
    z-index: -1;
  }
`;
