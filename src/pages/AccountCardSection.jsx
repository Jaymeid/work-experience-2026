<div
    style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
    }}
></div>
      
    function AccountCard2({ name, email }) {
    return (
        <div className="account-card">
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}
    
function AccountCardSection() {
    return (
        
<div style ={{ display: "flex" , gap: "20px" , flexWrap: "wrap"}}>

    
            <AccountCard2 name="Open Saving Pots" email="Split money into your personal savings goals." />
            <AccountCard2 name="Spending Insights" email="View your transaction data and spending patterns." />
            <AccountCard2 name="Card Controls" email="Fixing or replacing your card." />
        </div>
    );
}

export default AccountCardSection;