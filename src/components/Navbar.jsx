import { Landmark } from "lucide-react";
import styled from "styled-components";
import { Button } from "./Button";
import React from "react";

const Bar = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem clamp(1rem, 4vw, 3rem);

  background: #0A2540;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
`;

const Brand = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 800;
  colour: white;

  span{color: white;}
`;

const Links = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 680px) {
    display: none;
  }
`;

const LinkText = styled.a`
  color: ${({ theme }) => theme.colors.muted};
  font-weight: 700;
  text-decoration: none;
  color: #C9CFD6;
`;

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  width: 320px;
  height: 100vh;

    background: linear-gradient(
    180deg,
    #0A2540 0%,
    #071B2E 100%
  );

  color: white;
  padding: 2rem;

  border-left: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px 0 0 20px;

  box-shadow: -15px 0 20px rgba(0,0,0,0.10);
  z-index: 1000;
  
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const MenuSection = styled.div`
  margin-top: 2rem;

  h3 {
    color: #22D3EE;
    margin-bottom: 1rem;
  }

  a {
    display: block;
    color: white;
    text-decoration: none;
    margin: 12px 0;

    &:hover {
      color: #22D3EE;
    }
  }
`;

export function Navbar({ bankName, onDashboardClick }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    
    <Bar>
      <Brand>
        <Landmark size={24} color="white" />
        <span>{bankName}</span>
      </Brand>

      <Links aria-label="Main navigation">
        <LinkText href="/transactions">Transaction</LinkText>
        <LinkText href="#spending">Spending</LinkText>
        <LinkText href="#aboutus">About us</LinkText>
      </Links>

      <Button 
      variant="primary" onClick={toggleMenu} aria-label="Open menu">
        Menu

      </Button>
      {isMenuOpen && (
      <SideMenu>
        <CloseButton onClick={toggleMenu}>×</CloseButton>
        <MenuSection>
          <h3>Navigation</h3>
          <a href="/currentaccount">Current accounts</a>
          <a href="#spending">Spending</a>
          <a href="#transfer">Help</a>
        </MenuSection>
      </SideMenu>
      )}
    </Bar>
    
  );
}


