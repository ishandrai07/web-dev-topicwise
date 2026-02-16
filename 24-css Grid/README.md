# CSS Grid Layout 🧩✨

This project demonstrates the use of **CSS Grid**, a powerful two-dimensional layout system used to design complex and responsive web layouts easily.  
All styling is implemented using **internal CSS**.

---

## 📁 Files Included

- **index.html** – Contains HTML structure and internal CSS demonstrating CSS Grid properties

---

## 🎨 CSS Type Used

✅ **Internal CSS**  
All CSS is written inside the `<style>` tag in the `<head>` section of the HTML file.

---

## 📘 What is CSS Grid?

CSS Grid is a **two-dimensional layout system** that allows you to control both:

- Rows
- Columns

It is ideal for building:
- Web page layouts
- Dashboards
- Complex UI structures

---

## 🔹 Creating a Grid Container

```css
.container {
    display: grid;
}
```
This turns the container into a grid layout.

--- 

## 🔹 Defining Columns and Rows

```css
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 2fr 2fr 1fr;
```
- `fr` (fraction unit) distributes available space

- Creates 3 columns and 4 rows

---

## 🔹 Gap Between Grid Items

```css
gap: 5px;
```
Adds spacing between grid cells.

---

## 🔹 Grid Item Positioning

Header (Spanning Across Columns)

```css
.item1 {
    grid-column: 1 / 5;
}
```
Spans across multiple columns.

---

Sidebar (Spanning Rows)

```css
.item2 {
    grid-row: 2 / 4;
}
```

Spans across multiple rows.

---

Content Areas

```css
.item3 {
    grid-column: 2 / 4;
}
```

Defines custom placement inside the grid.

---

Footer (Full Width)

```css
.item6 {
    grid-row: 4 / 5;
    grid-column: 1 / 5;
}
```

Spans entire bottom row.

---

## 🧪 Layout Structure Created

- This grid creates a layout similar to:

- Header (Top full width)

- Sidebar (Left side)

- Multiple content sections (Center)

- Footer (Bottom full width)

--- 

## ⭐ Extra Important Notes

- CSS Grid works in two dimensions (rows + columns)

- `fr` unit makes layouts flexible

- Grid allows overlapping elements

- More powerful for full-page layouts than Flexbox

- Flexbox = 1D layout (row OR column)

- Grid = 2D layout (row AND column)

---

## 🎯 Learning Outcomes

- Understand CSS Grid fundamentals

- Define grid rows and columns

- Span elements across rows and columns

- Use fr units effectively

- Build structured page layouts

---

## 🚀 Author

Ishand Rai
Frontend Web Development Learner

