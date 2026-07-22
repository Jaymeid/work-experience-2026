import { A } from "storybook/internal/components";
import { AccountCard, CardTitle, Main, PageHeader, SavingsGoal,Navbar } from "../components";
import AccountCardSection from "./AccountCardSection";
import { Card } from "./card";
export function HomePage() {
  return(
  <Main aria-label="Student workspace">
    <Navbar
    bankName={"Bank"}/>

  <Card />
  
    <SavingsGoal 
    name={"Holiday"}
    saved={490}
    target={700} />


  
 <AccountCard name = "Current Balance" balance="£11,900"> </AccountCard>

   <h1>Good Afternoon, Name.</h1>
    <h3>Thank you for banking with us!</h3>
    
     <div style={{ marginBottom: '16px' }}>
       <AccountCard name = "Savings Amount" balance="£2,619"> </AccountCard>
     </div>
     
     <AccountCard name = "Spending" balance="Average of £2,009 spent monthly."> </AccountCard>
    <AccountCardSection />
    </Main>
)
}

