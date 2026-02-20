# 🎬 CSS Transitions & Transformations Project

This project demonstrates how to use **CSS Transitions**, **2D Transform**, and **3D Transform with Perspective** using internal CSS.

It contains two examples:

- `index.html` → 2D Transform with transition
- `index2.html` → 3D Rotate effect with perspective

---

## 📁 Files Included

- **index.html** – Demonstrates 2D transform using `translate()` and width change with transition.
- **index2.html** – Demonstrates 3D transform using `rotateX()` with perspective.
- Both files use **Internal CSS** (inside `<style>` tag).

---

# 📌 1️⃣ Transition Property Example (index.html)

## 🔹 What This Example Shows

- Use of `transition-property`
- Use of `transition-duration`
- Use of `transition-timing-function`
- Use of `transition-delay`
- 2D Transform using `translateX()` and `translateY()`
- Width animation effect

---

## 💻 How It Works

When you hover over the green box:

- It moves diagonally using `transform`
- Its width increases
- The animation happens smoothly because of transition

---

## 🔍 Important CSS Used

```css
.box {
    transition-property: transform width;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    transition-delay: 0.4s;
}

.box:hover {
    transform: translateX(10vh) translateY(10vw);
    width: 30vw;
}
```

---

## 🎯 Key Concepts Learned

- Transition makes property changes smooth
- Multiple properties can be transitioned
- Hover state triggers animation
- Transform does not affect document flow

---

# 📌 2️⃣ 3D Rotate with Perspective (index2.html)

## 🔹 What This Example Shows

- 3D transform using `rotateX()`
- Use of `perspective`
- Smooth rotation using transition

---

## 💻 How It Works

- The black container uses `perspective`
- When you hover over the yellow box:
  - It rotates on the X-axis
  - Creates a 3D flip effect

---

## 🔍 Important CSS Used

```css
.cont {
    perspective: 800px;
}

.box {
    transition-property: transform;
    transition-duration: 1.5s;
    transition-timing-function: ease-in-out;
    transition-delay: 0.5s;
}

.box:hover {
    transform: rotateX(-80deg);
}
```


---

## 🚀 Learning Outcomes

After completing this project, you understand:

- What is CSS Transition
- How to animate properties smoothly
- Difference between 2D and 3D transforms
- How perspective works
- How hover effects create interactive UI

---

## 👨‍💻 Author

**Ishand Rai**  
B.Tech CSE Student  
Frontend Development Learner 🚀
