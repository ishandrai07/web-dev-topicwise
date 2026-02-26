# 🖼️ CSS Object-Fit & Background Image Practice

This project demonstrates how to properly display images using:

- `object-fit`
- `object-position`
- `background-image`
- `background-size`
- `background-position`

It compares the difference between using an `<img>` tag and using a background image in CSS.

---

## 📁 Files Included

- **1objfit-objcover.html** – Demonstrates `object-fit` and `object-position`
- **2bg-img.html** – Demonstrates `background-image` properties
- **gokuimage.webp** – Image used for demonstration

---

# 📌 1️⃣ Object-Fit & Object-Position (Using `<img>` Tag)

### 🔹 What This Example Shows

- How to control image fitting inside a fixed container
- Difference between `cover`, `contain`, and `fill`
- How to adjust visible portion using `object-position`

### 💻 Important CSS Used

```css
.cont{
    height:250px;
    width:250px;
    border: 5px solid rgb(29, 224, 45);
    background-color: lightgray;
}

img{
    height: 250px;
    width:250px;
    object-fit: cover;
    object-position: top right;
}
```

### 🧠 Explanation

- `object-fit: cover;` → Fills the container while maintaining aspect ratio (may crop image).
- `object-position: top right;` → Shows the top-right portion when cropping happens.
- `contain` → Shows full image but may leave empty space.
- `fill` → Stretches image to fit (may distort).

### 🎯 Concepts Learned

- How to prevent image distortion
- How cropping works in `cover`
- How to control visible part of image

---

# 📌 2️⃣ Background Image (Using CSS)

### 🔹 What This Example Shows

- Using image as a background instead of `<img>`
- Controlling size and position
- Covering entire container

### 💻 Important CSS Used

```css
.cont {
    height: 500px;
    width: 500px;
    border: 2px solid black;

    background: url("gokuimage.webp");
    background-size: cover;
    background-position: center center;
}
```

### 🧠 Explanation

- `background: url()` → Sets image as background
- `background-size: cover;` → Makes image cover full container
- `background-position: center center;` → Centers image
- `background-repeat: no-repeat;` → Prevents repetition (optional)

---

# 🔥 Difference Between `<img>` and Background Image

| Feature | `<img>` Tag | Background Image |
|----------|------------|------------------|
| Used for | Content images | Design / decoration |
| Controlled by | object-fit | background-size |
| Affects layout | Yes | No |
| SEO friendly | Yes | No |

---

# 🛠️ Technologies Used

- HTML5  
- CSS3  
- Internal CSS  

---

# 🚀 Learning Outcomes

After completing this project, you understand:

- How `object-fit` works
- Difference between `cover`, `contain`, and `fill`
- How `object-position` controls cropping
- When to use `<img>` vs `background-image`
- How to properly fit images inside containers

---

# 👨‍💻 Author

**Ishand Rai**  
B.Tech CSE Student  
Frontend Development Learner 🚀
