import { Routes, Route, BrowserRouter } from "react-router-dom"
import Sidebar from "./Sidebar"
import Dashboard from "./pages/Dashboard"
import LoanApplicationSearch from "./pages/LoanApplicationSearch"
export default function App() {

  return (
    <BrowserRouter >
    <div className="app-container">
      {/* Left hand side panel will always be visible */}
      <Sidebar />

      <div className="content-area">
        {/* Right side view changes based on route selected */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/loan-application-search" element={<LoanApplicationSearch/>} />
          <Route path="/loan-application-entry" element={<LoanApplicationEntry/>} />

        </Routes>
      </div>
    </div>
    </ BrowserRouter >


  )
}

