import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';  // No need for "../src/components/Login"
import Register from './Register';  // Similarly adjust other paths
import OrganizationLogin from './OrganizationLogin';
import OrganizationRegister from './OrganizationRegister';
import AccountTypeSelection from '../components/AccountTypeSelection'
 


const App = () => {
  const [isRegistering, setIsRegistering] = useState(false); 
  const [selectedType, setSelectedType] = useState(''); 

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleSelectType = (type) => {
    console.log('Account Type Selected:', type);
    setSelectedType(type); 
  };

  return (
    <Router> {/* Wrap your entire application inside the Router */}
      <div className="flex justify-center items-center h-screen">
        {/* If account type is not selected, show AccountTypeSelection */}
        {selectedType === '' && <AccountTypeSelection onSelectType={handleSelectType} />}

        {/* If 'Volunteer' is selected, show the Login/Register form */}
        {selectedType === 'Volunteer' && (
          isRegistering ? (
            <Register toggleForm={toggleForm} />
          ) : (
            <Login toggleForm={toggleForm} />
          )
        )}

        {/* If 'Organization' is selected, show the Organization Login/Register form */}
        {selectedType === 'Organization' && (
          isRegistering ? (
            <OrganizationRegister toggleForm={toggleForm} />
          ) : (
            <OrganizationLogin toggleForm={toggleForm} />
          )
        )}
      </div>
    </Router>
  );
};

export default App;
