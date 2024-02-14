import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "../Componenets/TemplateData.json";
import NavBar1 from "../NavBar1";
import Header from './Header'
import { Footer } from "antd/es/layout/layout";


function UserStatus() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);

      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost:8080/services?id=${searchTerm}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          setUserData(response.data);
;
          setError(null);
        } else if (response.status === 404) {
          setUserData([]); // Set an empty array when ID is not found
          setError("No record found.");
        } else {
          const errorMessage = response.data.message || "Unknown error";
          setError(`Failed to fetch user data: ${errorMessage}`);
        }
      } catch (error) {
        setError(`Error fetching user data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm.trim() !== "") {
      fetchUserData();
    }
  }, [searchTerm]);

  const handleTrackButtonClick = () => {
    setShowResults(true);
  };

  return (
    <div>
      <NavBar1 />
      <div className="bod">
        <div className="templateContainer">
          <div className="searchInput_Container">
            <input
              id="searchInput"
              type="number"
              placeholder="Search by ID..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>

          <button className="button-42" onClick={handleTrackButtonClick}>
            Track
          </button>

          {showResults && (
            <div className="template_Container">
              {loading ? (
                <p>Loading...</p>
              ) : userData.length === 0 ? (
                <p>No matching data found.</p>
              ) : (
                userData.map((val) => (
                  <div className="card" key={val.id} style={{ color: '#FAFA37' }}>
                    <div>
                      <strong>ID:</strong> {val.id}
                    </div>
                    <div>
                      <strong>Name:</strong> {val.name}
                    </div>
                    <div>
                      <strong>Mobile:</strong> {val.mobile}
                    </div>
                    <div>
                      <strong>Email:</strong> {val.email}
                    </div>
                    <div>
                      <strong>Aadhar No:</strong> {val.aadharNo}
                    </div>
                    <div>
                      <strong>Scheme:</strong> {val.scheme}
                    </div>
                    <div>
                      <strong>Loan Amount:</strong> {val.amount}
                    </div>
                    <div>
                      <strong>Current Salary:</strong> {val.salary}
                    </div>
                  </div>
                ))
              )}
              {error && <p>{error}</p>}
              {!loading && userData.length === 0 && !error && <p>No record found.</p>}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserStatus;



// import React, { useState } from "react";
// import './LoanStatus'
// import data from "../Componenets/TemplateData.json";
// import NavBar1 from "../NavBar1";
// import Header from './Header'
// import { Footer } from "antd/es/layout/layout";
// function UserStatus() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showResults, setShowResults] = useState(false);

//   // Function to check if the input is a valid number
//   const isValidNumber = (input) => {
//     const parsedNumber = parseInt(input, 10);
//     return !isNaN(parsedNumber) && parsedNumber > 0;
//   };

//   const filteredData = isValidNumber(searchTerm)
//     ? data.filter((val) => val.id.toString().includes(searchTerm))
//     : [];

//   const handleTrackButtonClick = () => {
//     setShowResults(true);
//   };

//   return (
//     <div className='App1'>
//     <NavBar1/>
//      <div className="SideMenuAndPageContent">
//      <Header/>
     
//      <div className="das">
//     <div className="templateContainer">
//         <div className="searchInput_Container1">
//           <input
//             id="searchInput"
//             type="number"
//             placeholder="Search by ID..."
//             onChange={(event) => {
//               setSearchTerm(event.target.value);
//             }}
//           />
//         </div>
        
//         <button className="button-421" onClick={handleTrackButtonClick}>Track</button>
//         {showResults && isValidNumber(searchTerm) && (
//           <div className="template_Container">
//             {filteredData.length === 0 ? (
//               <p>No matching data found.</p>
//             ) : (
//               filteredData.map((val) => (
//                 <div className="template" key={val.id}>
//                   <div>
//                     <strong>ID:</strong> {val.id}
//                   </div>
//                   <div>
//                     <strong>Name:</strong> {val.name}
//                   </div>
//                   <div>
//                     <strong>Mobile:</strong> {val.mobile}
//                   </div>
//                   <div>
//                     <strong>Email:</strong> {val.email}
//                   </div>
//                   <div>
//                     <strong>Aadhar No:</strong> {val.aadharNo}
//                   </div>
//                   <div>
//                     <strong>Scheme:</strong> {val.scheme}
//                   </div>
//                   <div>
//                     <strong>Loan Amount:</strong> {val.loanAmount}
//                   </div>
//                   <div>
//                     <strong>Current Salary:</strong> {val.currentSalary}
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>

//     </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// }

// export default UserStatus;
