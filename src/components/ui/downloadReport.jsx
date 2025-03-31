import { jsPDF } from "jspdf";
import { Button } from "./button.jsx"; // Import your button UI component

// Functional component to generate and download a PDF report
export default function DownloadReport({ load, backupTime, efficiency, dod, batteryVoltage, capacity }) {
  // Function to create and download the PDF
  const downloadPDF = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Set title font style
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Battery Sizing Report", 20, 20);

    // Set normal font for details
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    // Add input parameters and calculated capacity
    doc.text(`Load (W): ${load}`, 20, 40);
    doc.text(`Backup Time (hours): ${backupTime}`, 20, 50);
    doc.text(`Efficiency (0-1): ${efficiency}`, 20, 60);
    doc.text(`Depth of Discharge (DoD): ${dod}`, 20, 70);
    doc.text(`Battery Voltage (V): ${batteryVoltage}`, 20, 80);
    doc.text(`Required Battery Capacity (Ah): ${capacity}`, 20, 100);

    // Save the PDF file
    doc.save("Battery_Sizing_Report.pdf");
  };

  return (
    <Button onClick={downloadPDF} className="download-button">📥Report</Button>
  );
}
