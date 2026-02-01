# CSS Overflow Property 📦🌊

This project demonstrates the use of the **CSS `overflow` property** to control how extra content is handled when it exceeds the size of a container.  
The example uses **internal CSS** for styling.

---

## 📁 Files Included

- **index.html** – Contains HTML structure and internal CSS demonstrating the overflow property

---

## 🎨 CSS Type Used

✅ **Internal CSS**  
All CSS is written inside the `<style>` tag in the `<head>` section of the HTML file.

---

## 📘 Concept Covered: Overflow Property

The **`overflow` property** controls what happens when content is too large to fit inside an element.

```css
overflow: auto;
```
## 🔹 Overflow Values Explained

- `visible` – Content overflows outside the box (default behavior)

- `hidden` – Extra content is clipped and not visible

- `scroll` – Scrollbars are always shown

- `auto` – Scrollbars appear only when needed (used in this project)
---
## 🧪 Example Code
```html
<div class="box">
    <p>Long paragraph content...</p>
</div>
```
```css
.box {
    border: 2px solid black;
    height: 10vh;
    width: 30vw;
    overflow: auto;
}
```
---

## 🎯 Learning Outcomes

- Understand what the CSS `overflow` property does

- Learn differences between `visible`, `hidden`, `scroll`, and `auto`

- Control overflowing content inside containers

- Use viewport units for responsive sizing

- Apply internal CSS effectively
---

## 🛠️ Technologies Used

- HTML5

- CSS3
---

## 🚀 Author

Ishand Rai
Frontend Web Development Learner
