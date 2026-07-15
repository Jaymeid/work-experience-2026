import { AccountCard, Main, PageHeader, SavingsGoal,Navbar } from "../components";
import { Card } from "./card";
export function HomePage() {
  return <Main aria-label="Student workspace">
    <Navbar
    bankName={"Bank"}/>

  <Card />
  
    <SavingsGoal 
    name={"Holiday"}
    saved={490}
    target={700} />


  </Main>;
}
