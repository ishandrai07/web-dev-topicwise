# CSS Transforms 🎯✨

This project demonstrates the use of various **CSS transform properties** such as `rotate`, `scale`, `skew`, and `translate` to visually manipulate HTML elements.  
All styling is implemented using **internal CSS**.

---

## 📁 Files Included

- **index.html** – Contains HTML structure and internal CSS demonstrating CSS transform properties

---

## 🎨 CSS Type Used

✅ **Internal CSS**  
All CSS is written inside the `<style>` tag in the `<head>` section of the HTML file.

---

## 📘 What is CSS Transform?

The `transform` property allows you to:

- Rotate elements
- Scale elements
- Skew elements
- Translate (move) elements
- Apply multiple transformations at once

Transforms modify the **appearance of an element without affecting document flow**.

---

## 🔹 Transform Properties Demonstrated

### 1️⃣ Rotate (2D Rotation)

```css
transform: rotate(20deg);
```
✔ Rotates element clockwise
✔ Triggered on hover in this project

### 3️⃣ RotateY (3D Rotation - Y Axis)

```css
transform: rotateY(70deg);
```
✔ Rotates element along vertical axis

### 4️⃣ RotateZ (Z Axis Rotation)

```css
transform: rotateZ(50deg);
```
✔ Similar to normal 2D rotate

### 5️⃣ Scale

```css
transform: scale(1.5);
transform: scaleX(1.5);
transform: scaleY(1.5);
```
✔ Increases or decreases element size
✔ Can scale uniformly or on a specific axis

### 6️⃣ Skew

```css
transform: skew(7deg);
transform: skewX(7deg);
transform: skewY(9deg);
```
✔ Tilts the element
✔ Distorts shape along X or Y axis

### 7️⃣ Translate (Move Element)

```css
transform: translateX(50%);
transform: translateY(50%);
```

✔ Moves element relative to its own size
✔ Does not affect surrounding elements

### 8️⃣ Multiple Transforms Together

```css
transform: translateX(50%) skew(25deg) translateY(50%);
```
✔ Multiple transforms can be combined
✔ Applied from left to right

---

## 🧪 Layout Explanation

- Main container uses Flexbox

- Each small box demonstrates a different transform

- Hover effect is used for dynamic rotation

- Transform effects do not disturb layout structure

---

## ⭐ Extra Important Notes

- Transforms do NOT affect document flow

- 3D transforms may require perspective for better effect

- Order of transform functions matters

- Use transition for smooth animation (can be added later)

- Commonly used in UI animations and interactive effects

---

## 🎯 Learning Outcomes

- Understand CSS transform property

- Apply 2D and 3D rotations

- Use scale, skew, and translate

- Combine multiple transform functions

- Create interactive UI effects

--- 

## 🚀 Author

Ishand Rai
Frontend Web Development Learner
