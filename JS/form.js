let employeeData = JSON.parse(localStorage.getItem("employees")) || employees;

const form = document.getElementById("employeeForm");
const idField = document.getElementById("empId");
const query = new URLSearchParams(window.location.search);
const editId = parseInt(query.get("id"));

if (editId) {
  const emp = employeeData.find(e => e.id === editId);
  if (emp) {
    document.getElementById("formTitle").textContent = "Edit Employee";
    idField.value = emp.id;
    document.getElementById("firstName").value = emp.firstName;
    document.getElementById("lastName").value = emp.lastName;
    document.getElementById("email").value = emp.email;
    document.getElementById("department").value = emp.department;
    document.getElementById("role").value = emp.role;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newEmp = {
    id: editId || Date.now(),
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
    department: document.getElementById("department").value.trim(),
    role: document.getElementById("role").value.trim()
  };

  if (editId) {
    const index = employeeData.findIndex(e => e.id === editId);
    employeeData[index] = newEmp;
  } else {
    employeeData.push(newEmp);
  }

  localStorage.setItem("employees", JSON.stringify(employeeData));
  alert("Employee saved successfully!");
  window.location.href = "index.html";
});




