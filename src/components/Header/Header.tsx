import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/ui_design_resources/ds-logo.svg" alt="DigiSpace Logo" />
      
      </div>
      <div className="user-profile">
        <img src="/ui_design_resources/users.png" alt="User Profile" />
      </div>
    </header>
  );
};
