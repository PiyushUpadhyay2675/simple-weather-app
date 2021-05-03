import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
function App() {
  const [location, setLocation] = useState({
    lat: 0,
    long: 0,
  });
  const getLoc = () => {
    window.navigator.geolocation.getCurrentPosition((res) => {
      setLocation({
        lat: res.coords.longitude,
        long: res.coords.longitude,
      });
    });
  };
  getLoc();

  return (
    <div id="container">
      <Header />
      <Card location={location} />
    </div>
  );
}

export default App;
