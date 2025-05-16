import './Dashboard.css'
import CreditScoreCard from "../dashboard-modules/CreditScoreCard"
import DefaultProbabilityCard from "../dashboard-modules/DefaultProbabilityCard"
import ExpectedLossCard from "../dashboard-modules/ExpectedLossCard"
export default function Dashboard() {
    return (
        <div className="dashboard-container"> 
            <header className="dashboard-header">
                <h1>Welcome Back!</h1>
            </header>
            <div className="dashboard-content">
                <CreditScoreCard />
                <DefaultProbabilityCard />
                <ExpectedLossCard />
            </div>
        
        
        
        
        </div>
    )
}