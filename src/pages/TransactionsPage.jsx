import { AccountCard, TransactionList } from "../components";
import { transactions } from "../data/bankingData";
import { Main } from "../components";
import { HomePage } from "./HomePage";
import styled from "styled-components";

const LinkText = styled.button`
  color: white;
  font-weight: 700;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.green700};
  padding: 4px;
`;


export function TransactionsPage() {
  return <Main>
  
    <AccountCard
    height="150px"
    balance="Transactions"/>
   
    <div style={{marginTop: "1rem"}}>
    <TransactionList 
    transactions={transactions}
    />
    </div>

    <div style={{marginTop: "1rem"}}>
    
      <LinkText onClick={() => window.location.href="/"}>Back to homepage</LinkText>
    
    </div>
  </Main>;
}