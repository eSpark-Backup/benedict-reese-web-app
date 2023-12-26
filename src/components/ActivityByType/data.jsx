export const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const lineLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const yearsData = {
  2023: [
    [1450, 1800, 1600, 1400, 2000, 1800, 1900, 1700, 1500, 1750, 1850, 1650], // VLJ
    [1300, 1550, 1700, 1800, 1450, 2000, 1600, 1850, 1400, 1700, 1900, 1750], // Light
    [1500, 1700, 1800, 1600, 1750, 1850, 1650, 1400, 1900, 2000, 1500, 1700], // Medium
    [1600, 1400, 1850, 1700, 1600, 1750, 1800, 1500, 1700, 1600, 1550, 1900], // Large
    [1800, 1600, 1500, 1750, 1900, 1700, 1550, 2000, 1800, 1650, 1400, 1700], // VIP Airliner
  ],
  2022: [
    [1000, 1500, 1600, 1400, 2100, 1500, 1900, 1700, 1500, 1750, 1850, 1650], // VLJ
    [1300, 1550, 1700, 1500, 1000, 2100, 1600, 1850, 1400, 1700, 1900, 1750], // Light
    [1500, 1700, 1500, 1600, 1750, 1850, 1650, 1400, 1900, 2100, 1500, 1700], // Medium
    [1600, 1400, 1850, 1700, 1600, 1750, 1500, 1500, 1700, 1600, 1550, 1900], // Large
    [1500, 1600, 1500, 1750, 1900, 1700, 1550, 2100, 1500, 1650, 1400, 1700], // VIP Airliner
  ],
  2021: [
    [1250, 1800, 1750, 1400, 2000, 1800, 1900, 1700, 1500, 1750, 1850, 1650], // VLJ
    [1300, 2000, 1700, 1800, 1250, 2000, 1750, 1850, 1400, 1700, 1900, 1750], // Light
    [1500, 1700, 1800, 1750, 1750, 1850, 1650, 1400, 1900, 2000, 1500, 1700], // Medium
    [1750, 1400, 1850, 1700, 1750, 1750, 1800, 1500, 1700, 1750, 2000, 1900], // Large
    [1800, 1750, 1500, 1750, 1900, 1700, 2000, 2000, 1800, 1650, 1400, 1700], // VIP Airliner
  ],
  2020: [
    [1450, 1800, 1600, 1400, 2000, 1800, 1900, 1700, 1500, 1750, 1850, 1650], // VLJ
    [1300, 1550, 1700, 1800, 1450, 2000, 1600, 1850, 1400, 1700, 1900, 1750], // Light
    [1500, 1700, 1800, 1600, 1750, 1850, 1650, 1400, 1900, 2000, 1500, 1700], // Medium
    [1600, 1400, 1850, 1700, 1600, 1750, 1800, 1500, 1700, 1600, 1550, 1900], // Large
    [1800, 1600, 1500, 1750, 1900, 1700, 1550, 2000, 1800, 1650, 1400, 1700], // VIP Airliner
  ],
  2019: [
    [1450, 1800, 1600, 1400, 2000, 1800, 1900, 1700, 1500, 1750, 1850, 1650], // VLJ
    [1300, 1550, 1700, 1800, 1450, 2000, 1600, 1850, 1400, 1700, 1900, 1750], // Light
    [1500, 1700, 1800, 1600, 1750, 1850, 1650, 1400, 1900, 2000, 1500, 1700], // Medium
    [1600, 1400, 1850, 1700, 1600, 1750, 1800, 1500, 1700, 1600, 1550, 1900], // Large
    [1800, 1600, 1500, 1750, 1900, 1700, 1550, 2000, 1800, 1650, 1400, 1700], // VIP Airliner
  ],
};

export const datalabels = ["VLJ", "Light", "Medium", "Large", "VIP Airliner"];

export const darkSide = [
  "rgba(82, 71, 198, 1)", // VLJ
  "rgba(134, 125, 244, 1)", // Light
  "rgba(93, 148, 247, 1)", // Medium
  "rgba(93, 197, 194, 1)", // Large
  "rgba(141, 230, 230, 1)", // VIP Airliner
];

export const lineBg = [
  "#6C60FF", // VLJ
  "#CE2A96", // Light
  "#106CC2", // Medium
  "#FF8660", // Large
  "#04BF00", // VIP Airliner
];

export const lightSide = [
  "rgba(82, 71, 198, 0.2)", // VLJ
  "rgba(134, 125, 244, 0.2)", // Light
  "rgba(93, 148, 247, 0.2)", // Medium
  "rgba(93, 197, 194, 0.2)", // Large
  "rgba(141, 230, 230, 0.2)", // VIP Airliner
];

export const otherValues = {
  padding: {
    bottom: 0,
    top: -20,
  },
  color: "#000000",
  anchor: "end",
  align: "end",
  font: {
    weight: "normal",
    family: "poppins",
  },
};

export const legend = {
  position: "bottom",
  labels: {
    boxWidth: 37,
    color: "#000000",
    font: {
      size: 16,
      family: "poppins",
      weight: "normal",
    },
  },
};

export const lineLegend = {
  position: "bottom",
  labels: {
    boxWidth: 32,
    color: "#000000",
    font: {
      size: 12,
      family: "poppins",
      weight: 600,
    },
    padding: 20,
  },
};

export const scales = {
  x: {
    stacked: true,
    min: 0,
    max: 4,
    color: "#fff",
    border: {
      display: false, // Hide the x-axis border
    },
    grid: {
      display: false, // Hide the x-axis grid
    },
    ticks: {
      color: "#000000",
      font: {
        size: 22,
        family: "poppins",
        weight: "normal",
      },
    },
  },
  y: {
    stacked: true,
    beginAtZero: true,
    display: false, // Hide the y-axis
    grid: {
      display: false, // Hide the y-axis grid
    },
  },
};

export const lineScales = {
  x: {
    grid: {
      color: "#B11B6C",
      drawOnChartArea: false,
    },
    ticks: {
      color: "#1E1F50",
    },
    border: {
      color: "#B11B6C",
    },
  },
  y: {
    grace: 1,
    title: {
      display: true,
      text: "Number of Flights",
      color: "black",
      font: {
        size: 16,
        weight: 600,
      },
      padding: {
        bottom: 22,
      },
      align: "center",
      minRotation: 90,
    },
    ticks: {
      color: "#1E1F50",
    },
    grid: {
      drawOnChartArea: false,
      color: "#B11B6C",
    },
    border: {
      color: "#B11B6C",
    },
  },
};

export const customTooltip = {
  enabled: false, // Disable default tooltips to avoid overlap with datalabels
  custom: (tooltip) => {
    // Custom tooltip to display the total above each stacked bar
    if (tooltip.body && tooltip.body.length > 0) {
      const total = tooltip.body[0].lines[0];
      const tooltipElement = document.getElementById("custom-tooltip");
      if (tooltipElement) {
        tooltipElement.innerHTML = total;
        tooltipElement.style.visibility = "visible";
        tooltipElement.style.left = tooltip.caretX + "px";
        tooltipElement.style.top = tooltip.caretY + "px";
      }
    }
  },
};

export const scrollUsingMouse = (deltaY, x, labelLength) => {
  if (deltaY > 0) {
    if (x.max >= labelLength) {
      x.min = labelLength - 5;
      x.max = labelLength;
    } else {
      x.min += 1;
      x.max += 1;
    }
  }

  if (deltaY < 0) {
    if (x.min <= 0) {
      x.min = 0;
      x.max = 4;
    } else {
      x.min -= 1;
      x.max -= 1;
    }
  }
};

export const scrollUsingTouchpad = (deltaX, x, labelLength) => {
  if (deltaX > 0) {
    if (x.max >= labelLength) {
      x.min = labelLength - 5;
      x.max = labelLength;
    } else {
      x.min += 1;
      x.max += 1;
    }
  }

  if (deltaX < 0) {
    if (x.min <= 0) {
      x.min = 0;
      x.max = 4;
    } else {
      x.min -= 1;
      x.max -= 1;
    }
  }
};

export const years = ["2023", "2022", "2021", "2020", "2019"];
