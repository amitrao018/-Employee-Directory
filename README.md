# Employee Directory - Freemarker UI Assignment

This is a responsive and interactive Employee Directory web app built using **HTML, CSS, JavaScript**, and **Freemarker templates**. It allows users to view, search, sort, and manage employee records.

## Features

- Responsive Dashboard
- Add/Edit Employee Form
- Client-side Search & Sort
- Freemarker templating using `<#list>` and `${}` syntax
- clean UI

## Folder Structure

index.ftl → Dashboard page
form.ftl → Add/Edit form
css/styles.css → Main styling
js/main.js → Dashboard logic
js/form.js → Form validation

## How to Run

1. Open `index.ftl` and `form.ftl` in any Freemarker-compatible setup
   (or simulate rendering in IntelliJ/Spring if needed).
2. No backend required — data is mocked using `<#assign>` in FTL files.

##  Screenshots

### Employee List (Dashboard)
![Dashboard](images/dashboard.png)

### Add/Edit Employee Form
![Form](images/form-page.png)


## Notes

- Purely frontend (no backend/API).
- Freemarker used to inject mock data.