import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&family=Roboto:wght@400;700&display=swap');
 *{
   margin: 0;
   padding:0;
   box-sizing: border-box;
	 font-family: 'Helvetica', sans-serif;
 }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.h1`
  color: ${({ color }) => (color ? color : "blue")};
  text-align: center;
  margin: 2rem;
`;

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Column = styled.div`
  display: flex;
  flex-flow: column;
`;

export const Text = styled.span`
  font-size: 2rem;
  color: #000;
  font-weight: 600;
`;

export const Button = styled.button`
  border-radius: "5px";
  background: #001bff;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: #0a1573;
  }
`;

export default GlobalStyle;
