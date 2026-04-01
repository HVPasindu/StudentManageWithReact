import "./EditStudent.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentContact, setStudentContact] = useState("");
  const [time, setTime] = useState("");

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
      return;
    }
    const studentData = JSON.parse(localStorage.getItem("editStudent"));
    if (studentData) {
      setStudentName(studentData.student_name || "");
      setStudentAge(String(studentData.student_age || ""));
      setStudentAddress(studentData.student_address || "");
      setStudentContact(studentData.student_contact || "");
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

  async function updateStudent() {
    if (!validate()) return;
    try {
      await axios.put(
        `https://student-api.acpt.lk/api/student/update/${id}`,
        { student_name: studentName, student_age: studentAge, student_address: studentAddress, student_contact: studentContact },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await Swal.fire({ icon: "success", title: "Updated", text: "Student updated successfully.", confirmButtonColor: "#0a246a" });
      navigate("/students");
    } catch (error) {
      Swal.fire({ icon: "error", title: "Update Failed", text: "Could not update student.", confirmButtonColor: "#0a246a" });
    }
  }

  return (
    <div className="edit_desktop">
      <div className="edit_dialog win-window">
        {/* Title Bar */}
        <div className="win-titlebar">
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="win-titlebar-icon">E</span>
            <span>Edit Student - {studentName || "..."}</span>
          </div>
          <div className="win-titlebar-controls">
            <span className="win-titlebar-btn" style={{ fontWeight: "bold", color: "#900" }}>&#x2715;</span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="win-panel-raised edit_toolbar">
          <button className="win-btn" onClick={() => navigate("/students")}>&#9664; Back to Students</button>
        </div>

        {/* Body */}
        <div className="edit_body">
          <div className="win-group-box">
            <span className="win-group-label">Update Student Information</span>

            <div className="win-form-field">
              <label className="win-label" htmlFor="edit_name">Student Name:</label>
              <input
                id="edit_name"
                className="win-input"
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </div>

            <div className="win-form-field">
              <label className="win-label" htmlFor="edit_age">Age:</label>
              <input
                id="edit_age"
                className="win-input"
                type="text"
                value={studentAge}
                onChange={(e) => setStudentAge(e.target.value.replace(/\D/g, ""))}
                style={{ maxWidth: "120px" }}
              />
            </div>

            <div className="win-form-field">
              <label className="win-label" htmlFor="edit_address">Address:</label>
              <input
                id="edit_address"
                className="win-input"
                type="text"
                value={studentAddress}
                onChange={(e) => setStudentAddress(e.target.value)}
              />
            </div>

            <div className="win-form-field">
              <label className="win-label" htmlFor="edit_contact">Contact Number:</label>
              <input
                id="edit_contact"
                className="win-input"
                type="text"
                value={studentContact}
                onChange={(e) => setStudentContact(e.target.value.replace(/\D/g, ""))}
                style={{ maxWidth: "200px" }}
              />
            </div>
          </div>

          <hr className="win-separator" style={{ margin: "12px 0" }} />

          <div className="edit_form_btns">
            <button className="win-btn primary" onClick={updateStudent}>Update Student</button>
            <button className="win-btn" onClick={() => navigate("/students")}>Cancel</button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="win-statusbar">
          <div className="win-statusbar-item">Edit Student</div>
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
          <span className="win-titlebar-icon" style={{ width: 12, height: 12, fontSize: 8 }}>E</span>
          Edit Student
        </div>
        <div className="win-taskbar-clock">{time}</div>
      </div>
    </div>
  );
}
