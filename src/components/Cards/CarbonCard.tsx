import React from "react";
import ReactECharts from "echarts-for-react";

export const CarbonCard: React.FC = () => {
  const option = {
    tooltip: { trigger: "item" },
    series: [
      {
        name: "Carbon Intensity",
        type: "pie",
        z: 1,
        radius: ["50%", "80%"],
        center: ["50%", "52%"],
        startAngle: 220,
        padAngle: 0,
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderWidth: 0,
          borderColor: "transparent",
        },
        label: {
          show: true,
          position: "inside",
          formatter: "{c}%\n{b}",
          fontSize: 11,
          color: "#000",
          fontWeight: 600,
          backgroundColor: "#fff",
          padding: [4, 10],
          borderRadius: 20,
          lineHeight: 16,
          shadowColor: "rgba(0,0,0,0.2)",
          shadowBlur: 6,
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 30, name: "Coal", itemStyle: { color: "#C06C52" } },
          { value: 20, name: "Hydro", itemStyle: { color: "#F1B55A" } },
          { value: 20, name: "Nuclear", itemStyle: { color: "#9E52F3" } },
          { value: 15, name: "Wind", itemStyle: { color: "#32F0D4" } },
          { value: 10, name: "Solar", itemStyle: { color: "#F36868" } },
        ],
      },
    ],
    graphic: {
      type: "group",
      left: "center",
      top: "center",
      zlevel: 100,
      z: 100,
      children: [
        {
          type: "rect",
          zlevel: 101,
          z: 101,
          shape: { r: 24, width: 180, height: 44 },
          style: {
            fill: "rgba(212, 201, 201, 0.6)",
            shadowColor: "rgba(0,0,0,0.25)",
            shadowBlur: 12,
          },
          position: [-90, -22],
        },
        {
          type: "text",
          zlevel: 102,
          z: 102,
          position: [0, 0],
          style: {
            text: "95gm CO2/kwh",
            textAlign: "center",
            textVerticalAlign: "middle",
            fill: "#000",
            fontSize: 16,
            fontWeight: 600,
          },
        },
      ],
    },
  };

  return (
    <div className="card carbon-card">
      <div className="card-header">
        <div className="card-title">
          <img
            src="/ui_design_resources/air.png"
            alt="Carbon"
            style={{ width: 20 }}
          />
          <span>Carbon Intensity</span>
        </div>
        <button className="dropdown-btn">Current</button>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <ReactECharts
          option={option}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
};
