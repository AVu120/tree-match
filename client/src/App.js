import { useEffect, useState } from "react";
import "./App.css";
import Match from "./components/Match/Match";
import Introduction from "./components/Introduction/Introduction";
import Questions from "./components/Question/Question";

function App() {
  const [shownSection, setShownSection] = useState("introduction"); // 3 sections in total: introduction, question and match.
  const [data, setData] = useState({ question: null, match: null });

  const toggleSection = (section) => {
    switch (section) {
      case "introduction":
        return <Introduction setShownSection={setShownSection} />;
      case "question":
        return <Questions data={data} setData={setData} />;
      default:
        return <Match data={data} setShownSection={setShownSection} />;
    }
  };

  // Show match component when a match is detected in the api response.
  useEffect(() => {
    if (!data.match) return;
    setShownSection("match");
  }, [data.match]);

  return (
    <div className="App">
      <div className="window">{toggleSection(shownSection)}</div>
      <a
        className="wallpaper_attribution"
        href="https://www.freepik.com/free-vector/kids-planting-tree-city-park-children-with-gardening-tools-working-with-green-plants-outdoors_11235616.htm#page=1&query=garden%20planting&position=0"
      >
        Background designed by pch.vector / Freepik
      </a>
    </div>
  );
}

export default App;
