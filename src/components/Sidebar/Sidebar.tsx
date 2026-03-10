import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <a href="#" className="nav-item active">
        <img src="/ui_design_resources/nav-icons/home.svg" alt="Home" />
        <span>Home</span>
      </a>
      <a href="#" className="nav-item">
        <img src="/ui_design_resources/nav-icons/pie.svg" alt="Analyse" />
        <span>Analyse</span>
      </a>
      <a href="#" className="nav-item">
        <img src="/ui_design_resources/nav-icons/tiles.svg" alt="Control" />
        <span>Control</span>
      </a>
    </aside>
  );
};
