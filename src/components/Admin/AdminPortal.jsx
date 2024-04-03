// AdminPage.jsx
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import "./AdminPage.css"; // Import the external CSS file

const AdminPage = () => {
  const [ren, setRen] = useState(false);

  return (
    <div className="AdminPageContainer">
      <Sidebar />
      <div className="AdminPageContent">
        <div>
          <h1 className="AdminPageHeading">Hello Admin</h1>

          <div className="AdminStatsContainer">
            <div className="AdminStatBox EarningsMonthly">
              <h3>EARNINGS (MONTHLY)</h3>
              <h3>Rs. 4,00,000</h3>
            </div>

            <div className="AdminStatBox EarningsAnnual">
              <h3>EARNINGS (ANNUAL)</h3>
              <h3>Rs. 2,15,000,000</h3>
            </div>

            <div className="AdminStatBox Tasks">
              <h3>TASKS</h3>
              <h3>50%</h3>
            </div>

            <div className="AdminStatBox PendingRequests">
              <h3>PENDING REQUESTS</h3>
              <h3>18</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
