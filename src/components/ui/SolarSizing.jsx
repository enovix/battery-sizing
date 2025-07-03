import { useState, useEffect } from "react";
import { Card, CardContent } from "./card";
import { Input } from "./input";
import { Button } from "./button";

export default function SolarSizing() {
  const [load, setLoad] = useState(0);
  const [batteryCapacity, setBatteryCapacity] = useState(0);
  const [batteryVoltage, setBatteryVoltage] = useState("");
  const [sunHours, setSunHours] = useState("");
  const [deratingFactor, setDeratingFactor] = useState("");
  const [solarWattage, setSolarWattage] = useState(null);


  useEffect(() => {
    const storedLoad = parseFloat(localStorage.getItem("load")) || 0;
    const storedCapacity = parseFloat(localStorage.getItem("batteryCapacity")) || 0;
    const storedVoltage = localStorage.getItem("batteryVoltage") || "";

    setLoad(storedLoad);
    setBatteryCapacity(storedCapacity);
    setBatteryVoltage(storedVoltage);

  }, []);

  const isValid = (val) => !isNaN(val) && val !== "" && parseFloat(val) > 0;

  const calculateSolarSize = () => {
    if (!isValid(sunHours) || !isValid(deratingFactor) || !isValid(batteryVoltage)) {
      alert("Please enter valid inputs (sun hours, derating factor, voltage)");
      return;
    }

    const loadKWh = load / 1000;
    const batteryEnergyKWh = (batteryCapacity * parseFloat(batteryVoltage)) / 1000;
    const totalEnergyKWh = loadKWh + batteryEnergyKWh;

    const deratedHours = parseFloat(sunHours) * parseFloat(deratingFactor);

    if (deratedHours <= 0) {
      alert("Derated sun hours must be greater than zero");
      return;
    }

    const requiredSolarKW = totalEnergyKWh / deratedHours;
    setSolarWattage(requiredSolarKW.toFixed(2));
  };

  const reset = () => {
    setSunHours("");
    setDeratingFactor("");
    setBatteryVoltage("");
    setSolarWattage(null);
    setLoad(0);
    setBatteryCapacity(0);

    // Clear localStorage

    localStorage.removeItem("load");
    localStorage.removeItem("batteryCapacity");
    localStorage.removeItem("batteryVoltage");
  };

  return (
    <div className="p-4 cardContainer text-left">

        <marquee className="scrolling" behavior="scroll" direction=""> <h5>⚠️ Make sure to design the Battery Requirement first</h5></marquee>
 
      <Card>
        <CardContent className="p-4 text-left">
          <h4 className="text-2xl font-bold text-center mb-4">🔆 Solar Plant Sizing</h4>

          <div className="mb-4">
            <h6 className="text-lg font-semibold mb-2">1️⃣ Energy: Load Demand</h6>
            <p>Load from battery sizing: <strong>{load} W</strong></p>
          </div>

          <div className="mb-4">
            <h6 className="text-lg font-semibold mb-2">2️⃣ Energy: Battery Charge Requirement</h6>
            <p>Battery capacity: <strong>{batteryCapacity} Ah</strong></p>
            <Input
              type="number"
              placeholder="Enter Battery Voltage (V)"
              value={batteryVoltage}
              onChange={(e) => setBatteryVoltage(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <h6 className="text-lg font-semibold mb-2">3️⃣ Solar Resource</h6>
            <Input
              type="number"
              placeholder="Peak Sun Hours / Day"
              value={sunHours}
              onChange={(e) => setSunHours(e.target.value)}
            />
            <br />
            <br />
            <Input
              type="number"
              placeholder="Derating Factor (0–1)"
              value={deratingFactor}
              onChange={(e) => setDeratingFactor(e.target.value)}
            />
          </div>

          <div className="button-group mb-2 mt-1">
            <Button onClick={calculateSolarSize}>⚡ Calculate</Button>
            {solarWattage && <Button onClick={reset} className="reset-button">🔄 Reset</Button>}
          </div>

          {solarWattage && (
            <p className="result-text">
              Required Solar Panel Wattage: <strong>{solarWattage} kW</strong>
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
