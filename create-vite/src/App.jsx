import { useState } from "react";
import "./App.css";

const App = () => {
  return <ColorPaletteGenerator />;
};

export default App;

const ColorPaletteGenerator = () => {
  const colors = {
    red: [
      "#ff0033", // Vivid Red
      "#e60029",
      "#cc0022",
      "#b3001c",
      "#990016",
      "#800011",
      "#66000d",
      "#4d0009",
    ],
    green: [
      "#00cc44", // Fresh Green
      "#00b33c",
      "#009933",
      "#00802b",
      "#006622",
      "#004d1a",
      "#003311",
      "#001a09",
    ],
    blue: [
      "#007bff", // Bold Blue
      "#0069e6",
      "#0059cc",
      "#0049b3",
      "#003999",
      "#002a80",
      "#001c66",
      "#00104d",
    ],
    orange: [
      "#ff6600", // Bright Orange
      "#e65c00",
      "#cc5200",
      "#b34700",
      "#993d00",
      "#803300",
      "#662900",
      "#4d1f00",
    ],
    purple: [
      "#9c27b0", // Intense Purple
      "#8923a1",
      "#761f91",
      "#631b81",
      "#511771",
      "#3e1261",
      "#2b0e51",
      "#190941",
    ],
    pink: [
      "#ff1493", // Hot Pink
      "#e61285",
      "#cc1077",
      "#b30e69",
      "#990c5b",
      "#80094d",
      "#66083f",
      "#4d062f",
    ],
    magenta: [
      "#ff00ff", // Pure Magenta
      "#e600e6",
      "#cc00cc",
      "#b300b3",
      "#990099",
      "#800080",
      "#660066",
      "#4d004d",
    ],
    yellow: [
      "#ffcc00", // Warm Yellow
      "#e6b800",
      "#cca300",
      "#b38f00",
      "#997a00",
      "#806600",
      "#665200",
      "#4d3d00",
    ],
    cyan: [
      "#00ffff", // Neon Cyan
      "#00e6e6",
      "#00cccc",
      "#00b3b3",
      "#009999",
      "#008080",
      "#006666",
      "#004d4d",
    ],
    teal: [
      "#008080", // Bold Teal
      "#007373",
      "#006666",
      "#005959",
      "#004d4d",
      "#004040",
      "#003333",
      "#002626",
    ],
    lime: [
      "#bfff00", // Fresh Lime
      "#ace600",
      "#99cc00",
      "#85b300",
      "#729900",
      "#5e8000",
      "#4b6600",
      "#384d00",
    ],
    coral: [
      "#ff4500", // Soft Coral
      "#e63e00",
      "#cc3700",
      "#b33000",
      "#992900",
      "#802200",
      "#661b00",
      "#4d1400",
    ],
    indigo: [
      "#4b0082", // Deep Indigo
      "#440077",
      "#3d006b",
      "#35005f",
      "#2e0054",
      "#260048",
      "#1f003c",
      "#180030",
    ],
    brown: [
      "#8b4513", // Earthy Brown
      "#7a3e11",
      "#6a3710",
      "#59300e",
      "#49290c",
      "#38220a",
      "#281b08",
      "#181306",
    ],
    gold: [
      "#ffd700", // Shiny Gold
      "#e6c200",
      "#ccad00",
      "#b39900",
      "#998400",
      "#806f00",
      "#665a00",
      "#4d4500",
    ],
    silver: [
      "#c0c0c0", // Sleek Silver
      "#a6a6a6",
      "#8c8c8c",
      "#737373",
      "#595959",
      "#404040",
      "#262626",
      "#0d0d0d",
    ],
    olive: [
      "#808000", // Classic Olive
      "#737300",
      "#666600",
      "#595900",
      "#4d4d00",
      "#404000",
      "#333300",
      "#262600",
    ],
    charcoal: [
      "#36454f", // Deep Charcoal
      "#2e3d46",
      "#26343d",
      "#1f2c34",
      "#17232b",
      "#0f1a22",
      "#071219",
      "#000910",
    ],
    alpha: [
      "#607d8b", // Steel Gray (for alpha transparency demos)
      "#78909c",
      "#90a4ae",
      "#b0bec5",
      "#cfd8dc",
      "#e0e0e0",
      "#eceff1",
      "#f5f5f5",
    ],
  };
  console.log(Object.keys(colors));

  const [filteredColors, setFilteredColors] = useState(colors);

  const handleColorsFilterd = (e) => {
    const value = e.target.value.toLowerCase();
    if (
      value === "red" ||
      value === "green" ||
      value === "blue" ||
      value === "orange"||
      value === "purple" ||
      value === "pink" ||
      value === "magenta" ||
      value === "yellow"||
      value === "teal" ||
      value === "lime" ||
      value === "coral" ||
      value === "indigo"||
      value === "brown"||
      value === "gold" ||
      value === "silver"||
      value === "olive"||
      value === "charcoal"||
      value === "alpha"
    ) {
      setFilteredColors({ value: colors[value] });
    } else {
      setFilteredColors(colors); // If input doesn't match, show all colors
    }
  };

  const handleCopy = (color) => {
    navigator.clipboard.writeText(color);
  };

  return (
    <div className="container">
      <span>HUESCAPE.</span>
      <div className="headerSection">
        <h1>Color Palette Generator</h1>
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Search colors red, green, blue, alpha..."
          onChange={handleColorsFilterd}
        />
      </div>
      <div className="colorSection">
        {Object.keys(filteredColors).map((colorKey) =>
          filteredColors[colorKey].map((color, index) => (
            <div key={index} className="box">
              <div
                id="color1"
                style={{
                  backgroundColor: color,           
                }}
              ></div>
              <span id="colorId">
                {color}
                <i className="fa fa-copy" onClick={() => handleCopy(color)}></i>
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
