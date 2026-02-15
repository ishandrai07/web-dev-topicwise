# CSS Flexbox Layout 📦✨

This project demonstrates the basics of **CSS Flexbox**, a powerful layout system used to create responsive and aligned layouts easily.  
All styling is implemented using **internal CSS**.

---

## 📁 Files Included

- **index.html** – Contains HTML structure and internal CSS demonstrating Flexbox properties

---

## 🎨 CSS Type Used

✅ **Internal CSS**  
All CSS is written inside the `<style>` tag in the `<head>` section of the HTML file.

---

## 📘 What is Flexbox?

**Flexbox (Flexible Box Layout)** is a CSS layout model designed to arrange elements in rows or columns efficiently.

It makes:
- Centering elements easy
- Spacing items simple
- Responsive design cleaner

---

## 🔹 Flex Container

The parent element becomes a flex container using:

```css
display: flex;
```
## 🔹 justify-content (Main Axis Alignment)

Controls horizontal alignment (by default).

```css
justify-content: center;
```

Other possible values:

- `flex-start`

- `flex-end`

- `space-between`

- `space-around`

- `space-evenly`

---

## 🔹 align-items (Cross Axis Alignment)

Controls vertical alignment.

```css
align-items: center;
```

Other values:

- flex-start

- flex-end

- stretch

---

## 🔹 gap Property

Adds spacing between flex items.

```css
gap: 5px;
```
Cleaner alternative to using margins.

---

## 🧪 Layout Explanation

- `.container` acts as the flex container

- `.items` are flex items

- Items are centered horizontally and vertically

- `gap` creates spacing between boxes

---

## ⭐ Extra Important Notes

- Default flex direction is `row`

- You can change direction using:

```css
flex-direction: column;
```
- Flexbox works on one dimension (row OR column)

- For 2D layouts, use CSS Grid

- Very commonly used for navbars, cards, and UI layouts

--- 

## 🎯 Learning Outcomes

- Understand how Flexbox works

- Center elements easily

- Control spacing between items

- Align elements horizontally and vertically

- Build responsive layouts

---

## 🚀 Author

Ishand Rai
Frontend Web Development Learner
