import React from 'react';
import ReactECharts from 'echarts-for-react';
import { MoreVertical } from 'lucide-react';

export const EnergyCard: React.FC = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['M', 'T', 'W', 'T', 'F', 'S', 'Today'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#8c9fa8', margin: 16 }
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [
      {
        data: [120, 180, 100, 220, 160, 90, 130],
        type: 'bar',
        barWidth: '45%',
        itemStyle: {
          color: '#3FFDE0',
          borderRadius: [4, 4, 4, 4]
        }
      }
    ]
  };

  return (
    <div className="card energy-card">
      <div className="card-header">
        <div className="card-title">
          <img src="/ui_design_resources/flash.png" alt="Energy" />
          <span>Energy Consumption</span>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="dropdown-btn">Last 7 Day</button>
          <button className="action-btn">
            <MoreVertical size={16} />
          </button>
        </div>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
      </div>
    </div>
  );
};
