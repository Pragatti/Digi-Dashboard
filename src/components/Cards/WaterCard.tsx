import React from 'react';
import { ArrowDown } from 'lucide-react';

export const WaterCard: React.FC = () => {
  return (
    <div className="card water-card">
      <div className="card-header">
        <div className="card-title">
          <img src="/ui_design_resources/drop.png" alt="Water" />
          <span>Water Consumption</span>
        </div>
        <button className="dropdown-btn">Yesterday</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, gap: '20px' }}>
        <div style={{
          width: 80, height: 80, borderRadius: '50%', background: 'rgba(63, 253, 224, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <img src="/ui_design_resources/drop.png" alt="Water Drop" style={{ width: 40 }} />
        </div>
        
        <div style={{
          fontSize: '3rem', fontWeight: 600, color: '#fff', 
          background: 'rgba(255, 255, 255, 0.03)', padding: '10px 40px', borderRadius: '40px',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          8.42m³
        </div>
      </div>

      <div style={{
        marginTop: '1.5rem',
        padding: '12px',
        background: 'rgba(63, 253, 224, 0.05)',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        color: '#3FFDE0',
        fontSize: '0.9rem',
        border: '1px solid rgba(63, 253, 224, 0.1)'
      }}>
        <ArrowDown size={16} />
        <span>1.2m³ less water used compare to last tuesday</span>
      </div>
    </div>
  );
};
