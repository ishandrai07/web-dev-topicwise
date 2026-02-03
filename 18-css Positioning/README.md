# CSS Position Property 📍

This project demonstrates the use of different **CSS `position` values** to control how elements are placed on a webpage.  
All examples use **internal CSS** and are separated into multiple HTML files for clarity.

---

## 📁 Files Included

- **index.html** – Demonstrates `position: relative`
- **index2.html** – Demonstrates `position: absolute`
- **index3.html** – Demonstrates `position: fixed`
- **index4.html** – Demonstrates `position: sticky`

---

## 🎨 CSS Type Used

✅ **Internal CSS**  
All styling is written inside the `<style>` tag in each HTML file.

---

## 📘 CSS Position Types Covered

### 🔹 1. Relative Position (`position: relative`)
📄 **File:** `index.html`

- Element is positioned **relative to its normal position**
- Allows movement using `top`, `left`, `right`, `bottom`
- Space of the element is still preserved

Example:
```css
.box2 {
    position: relative;
    top: -35px;
    left: 28px;
}
```
## 🔹 2. Absolute Position (`position: absolute`)

📄 File: `index2.html`

- Element is positioned relative to the nearest positioned ancestor

- Removed from normal document flow

- Commonly used for popups, badges, overlays

Example:
```css
.box1 {
    position: absolute;
    top: 8px;
    left: 159px;
}
```
## 🔸 The parent container uses position: relative to control absolute positioning.

## 🔹 3. Fixed Position (`position: fixed`)

📄 File: `index3.html`

- Element is positioned relative to the viewport

- Stays fixed even when the page is scrolled

- Commonly used for headers, chat buttons, floating icons

Example:
```css
.box4 {
    position: fixed;
    bottom: 10px;
}
```
## 🔹 4. Sticky Position (`position: sticky`)

📄 File: `index4.html`

- Acts like `relative` until a scroll point is reached

- Then behaves like `fixed`

- Very useful for sticky headers
Example:
```css
.box1 {
    position: sticky;
    top: 0;
}
```
---

## 🧪 Common Properties Used

- `top`, `left`, `bottom`

- `margin`, `padding`

- `height`, `width`

- `border`

- `z-index` (commented for learning)
---

## ⭐ Extra Notes (Important for Interviews)

- `absolute` elements look for the nearest positioned ancestor

- `fixed` ignores parent elements completely

- `sticky` works only when the parent has enough scroll space

- `z-index` works only on positioned elements

- Default position value is `static`
---

## 🛠️ Technologies Used

- HTML5

- CSS3
---

## 🎯 Learning Outcomes

- Understand all major CSS position values

- Learn the difference between relative, absolute, fixed, and sticky

- Control element layout and overlapping

- Build real-world UI layouts like headers and floating elements

- Practice internal CSS usage
---

## 🚀 Author

Ishand Rai
Frontend Web Development Learner
