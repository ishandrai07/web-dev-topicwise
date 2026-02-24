# 🎞️ CSS Animations Practice Project

This project demonstrates the use of **CSS Animations**, **@keyframes**, and different animation properties using both **External CSS** and **Internal CSS**.

It contains three animation examples:

- `animation1.html` → Basic animation using External CSS
- `animation2.html` → Square movement animation using keyframes
- `practice3.html` → Dual-axis bouncing ball animation
- `style1.css` → External CSS file used in animation1.html

---

## 📁 Files Included

- **animation1.html** – Links external CSS file for animation.
- **animation2.html** – Uses internal CSS to animate a box around the screen.
- **practice3.html** – Uses two animations together (X-axis + Y-axis).
- **style1.css** – Contains animation properties and keyframes for animation1.

---

# 📌 1️⃣ Animation Using External CSS (animation1.html)

### 🔹 What This Example Shows

- Linking external CSS file
- Basic animation using `@keyframes`
- Animation direction (alternate)
- Animation delay
- Background color change
- Transform movement using `translateX()`

### 🔍 Important CSS Used (style1.css)

```css
.box {
    animation-name: move;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    animation-delay: 1s;
}

@keyframes move {
    from {
        transform: translateX(0);
        background-color: yellow;
    }
    to {
        transform: translateX(75vw);
        background-color: rgb(57, 5, 247);
    }
}
```

### 🎯 Concepts Learned

- How to use external CSS
- Animation shorthand property
- Infinite looping animation
- Smooth motion using easing

---

# 📌 2️⃣ Square Path Animation (animation2.html)

### 🔹 What This Example Shows

- Use of `@keyframes` with percentage values
- Absolute positioning
- Infinite animation loop
- Moving element in a square path

### 🔍 Important CSS Used

```css
.box {
    animation-name: move;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes move {
    0%   { left: 0; top: 10px; }
    25%  { left: 80vw; top: 10px; }
    50%  { left: 80vw; top: 80vh; }
    75%  { left: 0; top: 80vh; }
    100% { left: 0; top: 10px; }
}
```

### 🎯 Concepts Learned

- Percentage-based animation stages
- Moving elements along custom paths
- Positioning with `relative` and `absolute`
- Creating continuous looping effects

---

# 📌 3️⃣ Dual Animation (practice3.html)

### 🔹 What This Example Shows

- Applying multiple animations to one element
- X-axis and Y-axis movement
- Alternate animation direction
- Delay in animation start
- Bouncing ball effect

### 🔍 Important CSS Used

```css
.box {
    animation: 
        movey 1s ease-out infinite alternate 2s,
        movex 4s linear infinite alternate 2s;
}

@keyframes movex {
    from { left: 0; }
    to   { left: 100%; }
}

@keyframes movey {
    from { bottom: 0; }
    to   { bottom: 50%; }
}
```

### 🎯 Concepts Learned

- Multiple animations in one property
- Combining linear and ease timing
- Creating bouncing effects
- Understanding animation shorthand syntax

---

# 🔥 Key CSS Animation Properties Used

- `animation-name`
- `animation-duration`
- `animation-iteration-count`
- `animation-direction`
- `animation-timing-function`
- `animation-delay`
- `@keyframes`
- `transform`
- `position: absolute / relative`

---

# 🛠️ Technologies Used

- HTML5  
- CSS3  
- CSS Animations  
- External & Internal CSS  

---

# 🚀 Learning Outcomes

After completing this project, you understand:

- How CSS animations work
- Difference between transition and animation
- How to create smooth motion effects
- How to use keyframes
- How to apply multiple animations
- How positioning affects animation movement

---

# 👨‍💻 Author

**Ishand Rai**  
B.Tech CSE Student  
Frontend Development Learner 🚀
