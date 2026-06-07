import MegaMenu from "./components/MegaMenu";
import Header from "./components/Header";
import Box from "./components/Simple-Box-Roll";
import KeyFrameAnim from "./components/Key-Frame-Animation";
import ParallapticBackground from "./components/Parallaptic-background";

import "./App.css";

function App() {
  return (
    <main className="app-content">
      <Header />

      <section className="fx-zone">
        <div className="fx-bg" aria-hidden="true">
          <div className="haze haze-1" />
          <div className="haze haze-2" />
          <div className="haze haze-3" />
          <div className="grain" />
        </div>

        <div className="fx-content">
          <MegaMenu />
          <Box />
          <KeyFrameAnim />
          <ParallapticBackground />
        </div>
      </section>
    </main>
  );
}

export default App;
