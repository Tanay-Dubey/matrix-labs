import React from "react";
import './App.css';
import Pause from "./images/pause.png";
import Stop from "./images/stop.png";
import Navbar from "./components/Navbar/Navbar";
import TextArea from "./components/TextArea/TextArea";
import Stripe from "./images/stripe.png";
import Amazon from "./images/amazon.png";
import Google from "./images/google.png";
import Microsoft from "./images/microsoft.jpg";
import Paypal from "./images/paypal.png";
import Walmart from "./images/walmart.png";
import Zoom from "./images/zoom.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Main">
        <TextArea />
        <div className="Bottom">
          <div>
            <div className="Fancy-Btns">
              <button>Try For Free</button>
              <button>Learn More</button>
            </div>
            <div className="LogoArea">
              <div>Trusted By The Greatest</div>
              <hr></hr>
              <div className="Logo1">
                <img style={{width:"4rem",height:"4rem"}} src={Stripe}></img>
                <img style={{width:"6rem",height:"2rem"}} src={Walmart}></img>
                <img style={{width:"4rem",height:"2rem"}} src={Zoom}></img>
              </div>
              <div className="Logo2">
                <img style={{width:"6rem",height:"2rem"}} src={Microsoft}></img>
                <img style={{width:"4rem",height:"1.5rem"}} src={Google}></img>
                <img style={{width:"4rem",height:"1.5rem"}} src={Paypal}></img>
                <img style={{width:"4rem",height:"2rem"}} src={Amazon}></img>
              </div>
            </div>
          </div>
          <div className="BlackCard">
            <button>Front end</button>
            <ul>
              <li>Updated Components</li>
              <hr></hr>
              <li>Platform Login Flow</li>
              <hr></hr>
              <li>Micro Interactions</li>
            </ul>
          </div>
        </div>
        <div className="Cards">
          <div className="PinkCard">
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "0.6rem", color: "gray" }}>
              <div>AMAZON PROJECT</div>
              <div>TUE, 30 AUG</div>
            </div>
            <div style={{ marginTop: "0.5rem" }}>Architecture Analysis</div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
              <div style={{ display: "flex", backgroundColor: "black", height: "3rem", padding: "0.5rem", borderRadius: "1.5rem", width: "7rem", justifyContent: "space-between" }}>
                <img src={Pause} style={{ width: "3rem", height: "3rem", backgroundColor: "white", borderRadius: "50%" }}></img>
                <img src={Stop} style={{ width: "3rem", height: "3rem", backgroundColor: "white", borderRadius: "50%" }}></img>
              </div>
              <div style={{ fontSize: "3rem" }}>
                1:38:47
              </div>
            </div>
          </div>
          <div className="BlueCard">
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "0.6rem", color: "gray" }}>
                  <div>EMPLOYEE</div>
                </div>
                <div style={{ marginTop: "0.5rem", color: "white" }}>Leonard Lauren</div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "0.6rem", color: "gray" }}>
                  <div>TOTAL 48:00</div>
                </div>
                <div style={{ marginTop: "0.5rem", color: "white" }}>Billable 42:00</div>
              </div>
            </div>
          </div>
          <div className="WhiteCard">
            <button>Design</button>
            <ul>
              <li><span>Design System</span></li>
              <hr></hr>
              <li><span>Platform Structure</span></li>
              <hr></hr>
              <li><span>Design Review</span></li>
            </ul>
          </div>
        </div>
        <div className="Lists">
          <div className="ListItem"><li>Create AM-5 Wireframes</li></div>
          <div className="ListItem"><li>Update BE-1 Userflow</li></div>
          <div className="ListItem" style={{ backgroundColor: "rgb(248, 147, 248)" }}><li>Platform Structure</li></div>
          <div className="ListItem" style={{ backgroundColor: "rgb(92, 92, 252)" }}><li>Design System</li></div>
          <div className="ListItem" style={{ backgroundColor: "rgb(127, 236, 127)" }}><li>5 more tasks</li></div>
        </div>
      </div>
    </div>
  );
}

export default App;
