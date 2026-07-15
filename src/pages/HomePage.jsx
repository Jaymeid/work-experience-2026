import { A } from "storybook/internal/components";
import { AccountCard, CardTitle, Main } from "../components";
import AccountCardSection from "./AccountCardSection";

export function HomePage() {
  return(
  <Main aria-label="Student workspace">
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

