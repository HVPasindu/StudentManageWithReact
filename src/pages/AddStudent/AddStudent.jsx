import "./AddStudent.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddStudent() {
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentContact, setStudentContact] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    function tick() {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  function validate() {
    if (studentName.trim() === "") {
      Swal.fire({ icon: "warning", title: "Student name is required", confirmButtonColor: "#0a246a" });
      return false;
    }
    if (studentAge.trim() === "") {
      Swal.fire({ icon: "warning", title: "Student age is required", confirmButtonColor: "#0a246a" });
      return false;
    }
    if (!/^\d+$/.test(studentAge)) {
      Swal.fire({ icon: "warning", title: "Invalid age", text: "Numbers only.", confirmButtonColor: "#0a246a" });
      return false;
    }
    if (studentAddress.trim() === "") {
      Swal.fire({ icon: "warning", title: "Student address is required", confirmButtonColor: "#0a246a" });
      return false;
    }
    if (studentContact.trim() === "") {
      Swal.fire({ icon: "warning", title: "Student contact is required", confirmButtonColor: "#0a246a" });
      return false;
    }
    if (!/^\d{10}$/.test(studentContact)) {
      Swal.fire({ icon: "warning", title: "Invalid mobile number", text: "Must be exactly 10 digits.", confirmButtonColor: "#0a246a" });
      return false;
    }
    return true;
  }

  async function saveStudent() {
    if (!validate()) return;
    try {
      const formData = new FormData();
      formData.append("student_name", studentName);
      formData.append("student_age", studentAge);
      formData.append("student_address", studentAddress);
      formData.append("student_contact", studentContact);
      await axios.post("https://student-api.acpt.lk/api/student/save", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await Swal.fire({ icon: "success", title: "Success", text: "Student added successfully.", confirmButtonColor: "#0a246a" });
      navigate("/students");
    } catch (error) {
      Swal.fire({ icon: "error", title: "Failed", text: "Could not add student.", confirmButtonColor: "#0a246a" });
    }
  }

  return (
    <div className="add_desktop">
      <div className="add_dialog win-window">
        {/* Title Bar */}
        <div className="win-titlebar">
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="win-titlebar-icon">+</span>
            <span>Add New Student</span>
          </div>
          <div className="win-titlebar-controls">
            <span className="win-titlebar-btn" style={{ fontWeight: "bold", color: "#900" }}>&#x2715;</span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="win-panel-raised add_toolbar">
          <button className="win-btn" onClick={() => navigate("/students")}>&#9664; Back to Students</button>
        </div>

        {/* Body */}
        <div className="add_body">
          <div className="win-group-box">
            <span className="win-group-label">Student Information</span>

            <div className="win-form-field">
              <label className="win-label" htmlFor="add_name">Student Name:</label>
              <input
                id="add_name"
                className="win-input"
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter student full name"
              />
            </div>

            <div className="win-form-field">
              <label className="win-label" htmlFor="add_age">Age:</label>
              <input
                id="add_age"
                className="win-input"
                type="text"
                value={studentAge}
                onChange={(e) => setStudentAge(e.target.value.replace(/\D/g, ""))}
                placeholder="Enter age"
                style={{ maxWidth: "120px" }}
              />
            </div>

            <div className="win-form-field">
              <label className="win-label" htmlFor="add_address">Address:</label>
              <input
                id="add_address"
                className="win-input"
                type="text"
                value={studentAddress}
                onChange={(e) => setStudentAddress(e.target.value)}
                placeholder="Enter home address"
              />
            </div>

            <div className="win-form-field">
              <label className="win-label" htmlFor="add_contact">Contact Number:</label>
              <input
                id="add_contact"
                className="win-input"
                type="text"
                value={studentContact}
                onChange={(e) => setStudentContact(e.target.value.replace(/\D/g, ""))}
                placeholder="10-digit phone number"
                style={{ maxWidth: "200px" }}
              />
            </div>
          </div>

          <hr className="win-separator" style={{ margin: "12px 0" }} />

          <div className="add_form_btns">
            <button className="win-btn primary" onClick={saveStudent}>Save Student</button>
            <button className="win-btn" onClick={() => navigate("/students")}>Cancel</button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="win-statusbar">
          <div className="win-statusbar-item">Add New Student</div>
          <div className="win-statusbar-item">Ready</div>
        </div>
      </div>

      {/* Taskbar */}
      <div className="win-taskbar">
        <button className="win-start-btn">
          <span style={{ fontStyle: "italic" }}>Start</span>
        </button>
        <div className="win-taskbar-separator"></div>
        <div className="win-taskbar-task">
          <span className="win-titlebar-icon" style={{ width: 12, height: 12, fontSize: 8 }}>+</span>
          Add Student
        </div>
        <div className="win-taskbar-clock">{time}</div>
      </div>
    </div>
  );
}
