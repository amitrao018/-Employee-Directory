<#assign employee = employee! {
  "id": "",
  "firstName": "",
  "lastName": "",
  "email": "",
  "department": "",
  "role": ""
}>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Add/Edit Employee</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="page-wrapper">
    <header>
      <h1>Employee Directory</h1>
    </header>

    <main class="form-container">
      <h2 id="formTitle">${employee.id?has_content?string("Edit", "Add")} Employee</h2>
      <form id="employeeForm">
        <input type="hidden" id="empId" value="${employee.id!}">

        <label>First Name
          <input type="text" id="firstName" value="${employee.firstName!}" required>
        </label>
        <label>Last Name
          <input type="text" id="lastName" value="${employee.lastName!}" required>
        </label>
        <label>Email
          <input type="email" id="email" value="${employee.email!}" required>
        </label>
        <label>Department
          <input type="text" id="department" value="${employee.department!}" required>
        </label>
        <label>Role
          <input type="text" id="role" value="${employee.role!}" required>
        </label>

        <button type="submit">Save</button>
      </form>
    </main>
  </div>

  <footer>
    <p>© 2025 Employee Directory App. All rights reserved.</p>
  </footer>
</body>
</html>


