# CSS Display Property 📦

This project demonstrates the usage of the **CSS `display` property** to control how HTML elements are rendered on a webpage using **internal CSS**.

---

## 📁 Files Included

- **index.html** – Contains HTML and internal CSS demonstrating display properties

---

## 🎨 CSS Type Used

✅ **Internal CSS**  
All CSS is written inside the `<style>` tag in the `<head>` section of the HTML file.

---

## 📘 Concept Covered: Display Property

The **`display` property** defines how an element is displayed on the page.

### 🔹 Values Used / Demonstrated

- `block` – Takes full width and starts on a new line  
- `inline` – Takes only required width, no height or margin control  
- `inline-block` – Behaves like inline but allows height, width, padding, and margin  
- `none` – Completely removes the element from the page  

---

## 🧪 Example Code

### HTML
```html
<div class="box">Display property 1........</div>
<div class="box box1">Property 2...........</div>
<div class="box">Display property 3........</div>
```
### CSS
```css
.box {
    border: 2px solid black;
    display: inline-block;
    padding: 30px;
    margin: 30px;
}
```
---
## ✨ Key Observations

- Elements with `inline-block` stay in the same line

- Padding and margin work properly with `inline-block`

- Changing the `display` value changes layout behavior instantly
---
## 🛠️ Technologies Used

- HTML5

- CSS3
---
## 🎯 Learning Outcomes

- Understand the display property

- Learn differences between block, inline, and inline-block

- Practice layout control using CSS

- Use internal CSS effectively
---
## 🚀 Author

Ishand Rai
Frontend Web Development Learner
