import './AdDesigner.css'
import { useState } from "react";



export function AdDesigner() {
  const [flavor, setFlavor] = useState<string>("Chocolate");
  const [colorTheme, setColorTheme] = useState<boolean>(false);
  const [fontSizeInput, setSize] = useState<number>(25);

  function getAdClassName(): string {
    let classes = "ad-container ";
    return colorTheme ? classes + "dark" : classes + "light";
  }

  function getStyles() {
    return { fontSize: `${fontSizeInput}px` };
  }

  return (
    <div id="ad-designer">
      <h1>Ad Designer</h1>
      <div className={getAdClassName()}>
        <p>Vote For</p>
        <div style={getStyles()} id="ad-flavor">
          {flavor}
        </div>
      </div>
      <div id="flavor-div">
        <h3>What to Support</h3>
        <div className="buttons-container">
          <button
            onClick={() => setFlavor("Chocolate")}
            disabled={flavor === "Chocolate"}
          >
            Chocolate
          </button>
          <button
            onClick={() => setFlavor("Vanilla")}
            disabled={flavor === "Vanilla"}
          >
            Vanilla
          </button>
          <button
            onClick={() => setFlavor("Strawberry")}
            disabled={flavor === "Strawberry"}
          >
            Strawberry
          </button>
        </div>
      </div>
      <div className="color-theme-div">
        <h3>Color Theme</h3>
        <div className="buttons-container">
          <button
            onClick={() => {
              setColorTheme(false);
            }}
            disabled={!colorTheme}
          >
            Light
          </button>
          <button
            onClick={() => {
              setColorTheme(true);
            }}
            disabled={colorTheme}
          >
            Dark
          </button>
        </div>
      </div>
      <h3>Font Size</h3>
      <div id="font-size-div">
        <div className="buttons-container">
          <button
            onClick={() => setSize(fontSizeInput - 1)}
            disabled={fontSizeInput <= 0}
          >
            Down
          </button>
          <div>{fontSizeInput}</div>
          <button onClick={() => setSize(fontSizeInput + 1)}>Up</button>
        </div>
      </div>
    </div>
  );
}

//props controlled by parent
//state owns its own data
