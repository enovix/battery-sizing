import { useState } from "react";
import { Card, CardContent } from "./card";
import { Input } from "./input";
import { Button } from "./button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

import DownloadReport from "./downloadReport";

export default function BatterySizing() {
  const [load, setLoad] = useState("");
  const [backupTime, setBackupTime] = useState("");
  const [efficiency, setEfficiency] = useState("");
  const [dod, setDod] = useState("");
  const [batteryVoltage, setBatteryVoltage] = useState("");
  const [capacity, setCapacity] = useState(null);

  const isValidNumber = (value) => !isNaN(value) && value !== "";

  const calculateBatterySize = () => {
    if (
      !isValidNumber(load) ||
      !isValidNumber(backupTime) ||
      !isValidNumber(efficiency) ||
      !isValidNumber(dod) ||
      !isValidNumber(batteryVoltage)
    ) {
      alert("Please fill out all fields with valid values 😊");
      return;
    }

    if (efficiency <= 0 || efficiency > 1 || dod <= 0 || dod > 1) {
      alert("Efficiency and Depth of Discharge must be between 0 and 1");
      return;
    }

    const energyRequired = parseFloat(load) * parseFloat(backupTime);
    const usableCapacity = energyRequired / (parseFloat(efficiency) * parseFloat(dod));
    const requiredAh = usableCapacity / parseFloat(batteryVoltage);
    setCapacity(requiredAh.toFixed(2));
  };
  const resetFields = () => {
    setLoad("");
    setBackupTime("");
    setEfficiency("");
    setDod("");
    setBatteryVoltage("");
    setCapacity(null);
  };
  const data = [
    { name: "Load", value: parseFloat(load) || 0 },
    { name: "Backup Time", value: (parseFloat(backupTime) || 0) * 100 },
    { name: "Efficiency", value: (parseFloat(efficiency) || 0) * 100 },
    { name: "DoD", value: (parseFloat(dod) || 0) * 100 },
    { name: "Battery Voltage", value: (parseFloat(batteryVoltage) || 0) },
  ];

  return (
    <div className="p-4 cardContainer" >

      <Card>
        <CardContent className="p-4">
          <h4 className="text-2xl font-bold text-center mb-4">🔆 Solar Sizng</h4>

          <table className="input-table">
            <tbody>
              <tr>
                <td><label>Load (W)</label></td>
                <td><Input className="data" type="number" value={load} onChange={(e) => setLoad(e.target.value)} required /></td>
              </tr>
              <tr>
                <td><label>Backup Time (hours)</label></td>
                <td><Input className="data" type="number" value={backupTime} onChange={(e) => setBackupTime(e.target.value)} required /></td>
              </tr>
              <tr>
                <td><label>Efficiency (0-1)</label></td>
                <td><Input className="data" type="number" value={efficiency} onChange={(e) => setEfficiency(e.target.value)} required /></td>
              </tr>
              <tr>
                <td><label>Depth of Discharge (0-1)</label></td>
                <td><Input className="data" type="number" value={dod} onChange={(e) => setDod(e.target.value)} required /></td>
              </tr>
              <tr>
                <td><label>System Voltage (V)</label></td>
                <td><Input className="data" type="number" value={batteryVoltage} onChange={(e) => setBatteryVoltage(e.target.value)} required /></td>
              </tr>
            </tbody>
          </table>

          <div className="button-group">
            <Button onClick={calculateBatterySize}>⚡Calculate</Button>

            {/* these buttons will show only if the capacity is calculated */}
            {capacity && <Button onClick={resetFields} className="reset-button">🔄Reset</Button>}
            {capacity && <DownloadReport load={load} backupTime={backupTime} efficiency={efficiency} dod={dod} batteryVoltage={batteryVoltage} capacity={capacity} />}
          </div>

          {capacity && (
            <p className="result-text">
              Required Battery Capacity: <span>{capacity} Ah</span>
            </p>
          )}
        </CardContent>
      </Card>

      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-1">Input Parameters Visualization</h4>
        <LineChart width={300} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
}


// chat gpt please refer to the BatterySizing.jsx file for the code structure and logic.
// store the load and the required battery capacity in the local storage so that it can be used later in solar sizing calculations.
// The SolarSizing component will follow a similar structure, but will focus on solar plant sizing calculations
// the solar sizing calculations will include:
// 1. Load (kW) from the local storage and an input field for user to enter the peak sun hours per day
//   - This will be fisrt section with heading as "Energy: Load demand"
// 2. Required battery capcity(Ah) from the local storage as stored in the battery sizing component
//   - This will be second section with heading as "Energy: Battery charge requirement" after multiplying with the system voltage to get the energy in kWh.
// 3. input field for solar % net derating factor.
// 4. Require solar panel wattage (kW) will be calculated based on the load, backup time, and derating factor.
// 5. Energy load demand + energy battery charge requirement will be divided by the peak sun hrs and derating factor to get the required solar panel wattage (kW).

