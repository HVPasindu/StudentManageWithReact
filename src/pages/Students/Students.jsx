import "./Students.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Students() {
  const [students, setStudents] = useState([]);
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
      return;
    }
    getStudents();
  }, []);

  async function getStudents() {
    try {
      const response = await axios.get("https://student-api.acpt.lk/api/student/getAll", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStudents(response.data);
    } catch (error) {
      Swal.fire({ icon: "error", title: "Failed", text: "Unable to load students.", confirmButtonColor: "#0a246a" });
    }
  }

  async function handleDelete(id) {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This student will be deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0a246a",
      cancelButtonColor: "#999",
      confirmButtonText: "Yes, Delete",
    });
    if (result.isConfirmed) {
      try {
        await axios.delete(`https://student-api.acpt.lk/api/student/delete/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        Swal.fire({ icon: "success", title: "Deleted", text: "Student deleted successfully.", confirmButtonColor: "#0a246a" });
        getStudents();
      } catch (error) {
        Swal.fire({ icon: "error", title: "Delete Failed", text: "Could not delete student.", confirmButtonColor: "#0a246a" });
      }
    }
  }

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="students_desktop">
      <div className="students_main_window win-window">
        {/* Title Bar */}
        <div className="win-titlebar">
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="win-titlebar-icon">S</span>
            <span>Student Management - All Students ({students.length})</span>
          </div>
          <div className="win-titlebar-controls">
            <span className="win-titlebar-btn">_</span>
            <span className="win-titlebar-btn">&#9633;</span>
            <span className="win-titlebar-btn" style={{ fontWeight: "bold", color: "#900" }}>&#x2715;</span>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="win-menubar">
          <span className="win-menu-item">File</span>
          <span className="win-menu-item">Edit</span>
          <span className="win-menu-item">View</span>
          <span className="win-menu-item" onClick={() => navigate("/add-student")} style={{ cursor: "pointer" }}>
            Student
          </span>
          <span className="win-menu-item">Help</span>
        </div>

        {/* Toolbar */}
        <div className="win-panel-raised students_toolbar">
          <button className="win-btn primary" onClick={() => navigate("/add-student")}>+ Add Student</button>
          <button className="win-btn" onClick={getStudents}>Refresh</button>
          <div className="students_toolbar_sep"></div>
          <button className="win-btn danger" onClick={logout}>Logout</button>
        </div>

        {/* Content */}
        <div className="students_content">
          {/* Sidebar */}
          <div className="students_sidebar win-panel">
            <div className="students_sidebar_title">Student Manager</div>
            <hr className="win-separator" />
            <div className="students_sidebar_link active">All Students</div>
            <div className="students_sidebar_link" onClick={() => navigate("/add-student")}>Add New</div>
            <hr className="win-separator" />
            <div className="students_sidebar_info">Total: {students.length}</div>
          </div>

          {/* Main list area */}
          <div className="students_list_area">
            {students.length > 0 ? (
              <table className="win-table students_table">
                <thead>
                  <tr>
                    <th style={{ width: "30px" }}>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th style={{ width: "130px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={student.id}>
                      <td style={{ color: "#666" }}>{index + 1}</td>
                      <td style={{ fontWeight: "bold" }}>{student.student_name}</td>
                      <td>{student.student_age}</td>
                      <td>{student.student_address}</td>
                      <td>{student.student_contact}</td>
                      <td>
                        <div className="students_row_btns">
                          <button
                            className="win-btn"
                            style={{ minWidth: "52px", fontSize: "10px" }}
                            onClick={() => {
                              localStorage.setItem("editStudent", JSON.stringify(student));
                              navigate(`/edit-student/${student.id}`);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="win-btn danger"
                            style={{ minWidth: "52px", fontSize: "10px" }}
                            onClick={() => handleDelete(student.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="students_empty_panel win-panel">
                <div className="students_empty_icon">[S]</div>
                <div className="students_empty_text">No students found.</div>
                <button className="win-btn primary" onClick={() => navigate("/add-student")}>
                  Add First Student
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Status Bar */}
        <div className="win-statusbar">
          <div className="win-statusbar-item">{students.length} student(s) loaded</div>
          <div className="win-statusbar-item">Student Management v1.0</div>
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
          <span className="win-titlebar-icon" style={{ width: 12, height: 12, fontSize: 8 }}>S</span>
          Student Management
        </div>
        <div className="win-taskbar-clock">{time}</div>
      </div>
    </div>
  );
}
