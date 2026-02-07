# CSS Media Queries 📱💻

This project demonstrates the use of **CSS Media Queries** to create a **responsive layout** that adapts to different screen sizes.  
The styling is done using **internal CSS**.

---

## 📁 Files Included

- **index.html** – Contains HTML structure and internal CSS for media queries

---

## 🎨 CSS Type Used

✅ **Internal CSS**  
All CSS is written inside the `<style>` tag within the `<head>` section of the HTML file.

---

## 📘 What are Media Queries?

**Media Queries** are a CSS technique used to apply styles based on:
- Screen width
- Device type
- Orientation (portrait / landscape)

They are essential for **responsive web design**.

---

## 🔹 Media Query Used in This Project

```css
@media only screen and (max-width: 480px) {
    body {
        background-color: rgb(206, 6, 16);
    }
    .boxes {
        flex-direction: column;
    }
}
```
## 📌 What it does:

- Changes background color on small screens

- Converts horizontal layout into a vertical layout

- Improves readability on mobile devices

---

## 🧪 Layout Explanation

- Default View (Desktop):

  - Boxes are displayed in a row using Flexbox

  - Background color is aqua

- Mobile View (≤ 480px):

  - Boxes stack vertically

  - Background color changes to red

---

## 🎯 Learning Outcomes

- Understand how media queries work

- Create responsive layouts

- Adapt UI for mobile screens

- Combine Flexbox with media queries

- Write clean internal CSS

---

## 🚀 Author

Ishand Rai
Frontend Web Development Learner
