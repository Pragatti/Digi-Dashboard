import React, { useState } from "react";
import ReactECharts from "echarts-for-react";

export const LightsCard: React.FC = () => {
  const [isOn, setIsOn] = useState(true);

  const option = {
    graphic: [
      {
        type: "text",
        left: "18%",
        top: "74%",
        style: {
          text: "2700k",
          fill: "#8c9fa8",
          fontSize: 14,
        },
      },
      {
        type: "text",
        right: "18%",
        top: "74%",
        style: {
          text: "5000k",
          fill: "#8c9fa8",
          fontSize: 14,
        },
      },
    ],

    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        center: ["50%", "70%"],
        radius: "90%",
        min: 2700,
        max: 5000,
        splitNumber: 7,
        axisLine: {
          lineStyle: {
            width: 15, // changed from 12
            color: [
              [0.6956, "#3FFDE0"],
              [1, "#fff"],
            ],
          },
        },
        progress: {
      show: true,
      width: 15,
      roundCap: true, // rounded ends
      overlap: false, // ensures start/end rounding works correctly
      itemStyle: {
        color: "#3FFDE0",
      },
    },

        pointer: {
          icon: "circle",
          length: "20%",
          width: 25,
          offsetCenter: [0, "-85%"],
          itemStyle: {
            color: "#fff",
            borderColor: "#3FFDE0",
            borderWidth: 5,
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowBlur: 10,
          },
        },
        axisTick: {
          length: 15,
          distance: -45, // increase distance to create gap
          lineStyle: { color: "auto", width: 2 },
        },

        splitLine: {
          length: 15,
          distance: -45, // slightly larger for major lines
          lineStyle: { color: "auto", width: 2 },
        },
        axisLabel: {
          show: false,
        },
        title: {
          offsetCenter: [0, "-70%"],
        },
        detail: {
          fontSize: 32,
          fontWeight: "bold",
          offsetCenter: [0, "-20%"],
          valueAnimation: true,
          color: "#3FFDE0",
          formatter: "{value}k",
        },
        data: [{ value: 4300 }],
      },
    ],
  };

  return (
    <div className="card lights-card card-glow-top">
      <div className="card-header">
        <div className="card-title">
          <img
            src="/ui_design_resources/light.png"
            alt="Lights"
            style={{ width: 20 }}
          />
          <span>Lights</span>
        </div>
        <div
          className={`toggle-switch ${isOn ? "active" : ""}`}
          onClick={() => setIsOn(!isOn)}
        >
          <div className="knob"></div>
        </div>
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
