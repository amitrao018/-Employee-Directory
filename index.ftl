<#assign employees = [
  {"id": 1, "firstName": "Alice", "lastName": "Smith", "email": "alice@example.com", "department": "Engineering", "role": "Frontend Developer"},
  {"id": 2, "firstName": "Bob", "lastName": "Johnson", "email": "bob@example.com", "department": "HR", "role": "Recruiter"},
  {"id": 3, "firstName": "Charlie", "lastName": "Brown", "email": "charlie@example.com", "department": "Sales", "role": "Manager"}
]>
>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Employee Directory</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="page-wrapper">
    <header>
      <h1>Employee Directory</h1>
      <div class="search-bar">
        <input type="text" id="searchInput" placeholder="Search by name or email">
        <button id="filterBtn">Filter</button>
      </div>
    </header>

    <div class="top-controls">
      <div class="left-controls">
        Sort:
        <select id="sortSelect">
          <option value="">--Select--</option>
          <option value="firstName">First Name</option>
          <option value="department">Department</option>
        </select>
        Show:
        <select id="showCount">
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>
      <div class="right-controls">
        <a href="form.ftl" class="add-btn">Add Employee</a>
      </div>
    </div>

    <div class="employee-list">
      <#list employees as emp>
        <div class="employee-card">
          <p><strong>Name:</strong> ${emp.firstName} ${emp.lastName}</p>
          <p><strong>Email:</strong> ${emp.email}</p>
          <p><strong>Department:</strong> ${emp.department}</p>
          <p><strong>Role:</strong> ${emp.role}</p>
          <div class="actions">
            <a href="form.ftl?id=${emp.id}">Edit</a>
            <button onclick="alert('Delete will work with JS in a full app')">Delete</button>
          </div>
        </div>
      </#list>
    </div>
  </div>

  <footer>
    <p>© 2025 Employee Directory App. All rights reserved.</p>
  </footer>
</body>
</html>




