import React, { useState } from "react";
import "../../Styles/Notes.css"; // Adjust the path as necessary

export default function Notes() {
  const [open, setOpen] = useState({
    intro: false,
    contributors: false,
    recommendations: false,
  });

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="notes-container">
      {/* Section 1 */}
      <div className="notes-section">
        <h2 className="accordion-title" onClick={() => toggle("intro")}>
          {open.intro ? "▼" : "▶"} 📘 Understanding Solar System Derating Factor
        </h2>
        {open.intro && (
          <div className="accordion-content">
            <p>
              When designing a solar power system, it’s important to account for real-world losses that reduce the ideal output of your solar array. These losses are captured under what is known as the <strong>System Derating Factor</strong>, expressed as a percentage (%) or decimal value (e.g. 0.77 for 77%).
            </p>
          </div>
        )}
      </div>

      {/* Section 2 */}
      <div className="notes-section">
        <h3 className="accordion-title" onClick={() => toggle("contributors")}>
          {open.contributors ? "▼" : "▶"} ⚙️ Common Derating Contributors
        </h3>
        {open.contributors && (
          <ul className="notes-list accordion-content">
            <li><strong>MPPT Efficiency:</strong> MPPTs typically operate at 95–98%.</li>
            <li><strong>Wiring Losses:</strong> Resistance in cables causes 1–3% loss.</li>
            <li><strong>Array Temperature and Mismatch:</strong> High temps & mismatch reduce output. Loss: 2–10%.</li>
            <li><strong>Battery Losses:</strong> Charging/discharging batteries causes 5–15% loss.</li>
            <li><strong>Shading:</strong> Even slight shading can reduce output by over 20%.</li>
          </ul>
        )}
      </div>

      {/* Section 3 */}
      <div className="notes-section">
        <h3 className="accordion-title" onClick={() => toggle("recommendations")}>
          {open.recommendations ? "▼" : "▶"} ✅ Recommendations
        </h3>
        {open.recommendations && (
          <ul className="notes-list accordion-content">
            <li>Use high-efficiency MPPT controllers or inverters (≥98%).</li>
            <li>Optimize wiring: use properly sized copper cables, short runs.</li>
            <li>Install panels with airflow and avoid mixing different models.</li>
            <li>Choose high-efficiency batteries (e.g., LiFePO₄).</li>
            <li>Conduct a shading analysis before panel placement.</li>
            <li>Use a default derating factor of <strong>0.75–0.85</strong>, customizable per site.</li>
          </ul>
        )}
      </div>
    </div>
  );
}
