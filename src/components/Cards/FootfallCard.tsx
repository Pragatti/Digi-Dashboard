import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';

export const FootfallCard: React.FC = () => {
  const option = {
    tooltip: {
      trigger: 'axis'
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
      boundaryGap: false,
      data: ['M', 'T', 'W', 'T', 'F', 'S', 'Today'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#8c9fa8', margin: 16 }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 150,
      splitLine: {
        lineStyle: { color: 'rgba(255, 255, 255, 0.05)' }
      },
      axisLabel: { color: '#8c9fa8' }
    },
    series: [
      {
        data: [110, 125, 105, 120, 100, 125, 100],
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle: {
          color: '#3FFDE0',
          width: 3
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(63, 253, 224, 0.3)' },
            { offset: 1, color: 'rgba(63, 253, 224, 0)' }
          ])
        }
      }
    ]
  };

  return (
    <div className="card footfall-card">
      <div className="card-header">
        <div className="card-title">
          <img src="/ui_design_resources/users.png" alt="Footfall" />
          <span>Footfall</span>
        </div>
        <button className="dropdown-btn">Last 7 Day</button>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
      </div>
    </div>
  );
};
