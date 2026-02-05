# CSS Variables (Custom Properties) 🎨

This project demonstrates the use of **CSS Variables (also called Custom Properties)** to manage colors efficiently and dynamically using **internal CSS**.

---

## 📁 Files Included

- **index.html** – Contains HTML structure and internal CSS demonstrating CSS variables

---

## 🎨 CSS Type Used

✅ **Internal CSS**  
All CSS is written inside the `<style>` tag in the `<head>` section of the HTML file.

---

## 📘 What are CSS Variables?

CSS variables allow you to **store values (like colors, sizes, spacing)** in one place and reuse them throughout your stylesheet.

They are declared using:
```css
--variable-name
```
And accessed using:
```css
var(--variable-name)
```
## 🔹 Declaring Global Variables (`:root`)

The `:root` selector defines global variables that can be used anywhere in the document.

```css
:root {
    --color: blue;
    --seccolor: yellow;
}
```
✔ Declared once
✔ Reused multiple times
✔ Easy to update theme colors

---

## 🔹 Using CSS Variables

The variables are used to style different elements:

```css
.b {
    background-color: var(--color);
}

.c {
    background-color: var(--seccolor);
}
```
This makes styling clean, reusable, and maintainable.

---

## 🔹 Local Variable Override (Important Concept)

CSS variables can be overwritten locally inside specific selectors.

```css
ul li:first-child {
    --color: orange;
    background-color: var(--color);
}
```
## 📌 Here:

`--color` is overridden only for the first `<li>`

The global `--color` remains unchanged elsewhere

---

## 🧪 Layout Explanation

- Navigation bar uses `--color` for background

- Paragraph uses `--seccolor`

- First list item overrides the global color variable

- Flexbox is used to display navigation items horizontally

---

## ⭐ Extra Notes (Interview Useful)

- CSS variables follow scope rules like programming variables

- Local variables override global variables

- CSS variables work with all CSS properties

- Very useful for themes, dark mode, and large projects

- Unlike preprocessor variables, CSS variables work at runtime
  
---

## 🎯 Learning Outcomes

- Understand what CSS variables are

- Declare global and local CSS variables

- Override variables locally

- Use var() function effectively

- Write cleaner and scalable CSS
  
---

## 🚀 Author

Ishand Rai
Frontend Web Development Learner
