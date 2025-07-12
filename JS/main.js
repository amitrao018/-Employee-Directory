let employeeData = JSON.parse(localStorage.getItem("employees"));
if (!employeeData || employeeData.length === 0) {
  employeeData = window.employees;
  localStorage.setItem("employees", JSON.stringify(employeeData));
}

// Pagination
let showCount = 10;

// Render only first N employees
function renderEmployees(empList) {
  const container = document.getElementById("employeeList");
  container.innerHTML = "";

  const limitedList = empList.slice(0, showCount);

  if (limitedList.length === 0) {
    container.innerHTML = "<p>No employees found.</p>";
    return;
  }

  limitedList.forEach(emp => {
    const card = document.createElement("div");
    card.className = "employee-card";
    card.innerHTML = `
      <p class="emp-name"><strong>${emp.firstName} ${emp.lastName}</strong></p>
      <p><strong>Email</strong>: ${emp.email}</p>
      <p><strong>Department</strong>: ${emp.department}</p>
      <p><strong>Role</strong>: ${emp.role}</p>
      <div class="actions">
        <a href="form.html?id=${emp.id}">Edit</a>
        <button onclick="deleteEmployee(${emp.id})">Delete</button>
  </div>
    `;
    container.appendChild(card);
  });
}

// Delete functionality
function deleteEmployee(id) {
  const index = employeeData.findIndex(e => e.id === id);
  if (index > -1) {
    if (confirm("Are you sure you want to delete this employee?")) {
      employeeData.splice(index, 1);
      localStorage.setItem("employees", JSON.stringify(employeeData));
      renderEmployees(employeeData);
    }
  }
}

// Search
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = employeeData.filter(emp =>
    emp.firstName.toLowerCase().includes(query) ||
    emp.lastName.toLowerCase().includes(query) ||
    emp.email.toLowerCase().includes(query)
  );
  renderEmployees(filtered);
});

// Sort
document.getElementById("sortSelect").addEventListener("change", function () {
  const value = this.value;
  if (!value) return;

  employeeData.sort((a, b) =>
    a[value].toLowerCase().localeCompare(b[value].toLowerCase())
  );
  renderEmployees(employeeData);
});

// Show count change
document.getElementById("showCount").addEventListener("change", function () {
  showCount = parseInt(this.value);
  renderEmployees(employeeData);
});

// Initial render
renderEmployees(employeeData);










