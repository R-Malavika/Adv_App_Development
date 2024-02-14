import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar";
import Footer from "../Footer.jsx";
import "./UserStatus.css";

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
      <NavBar />
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
