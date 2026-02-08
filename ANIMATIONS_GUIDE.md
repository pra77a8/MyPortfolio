# Portfolio Animations Guide

## 🎨 Overview

Modern CSS animations and interactive effects have been added to the portfolio website using **Framer Motion** and custom **CSS keyframes**. The animations provide smooth scroll-triggered effects, hover interactions, and dynamic backgrounds similar to professional developer portfolios.

---

## 📦 Installed Libraries

### Framer Motion
```bash
npm install framer-motion
```
- Production-ready animation library for React
- Provides scroll-triggered animations with `useInView` hook
- Smooth transitions and gesture animations

---

## 🎭 Custom CSS Animations (globals.css)

### Keyframe Animations

#### 1. **Gradient Animation**
```css
@keyframes gradient-animation {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```
- **Usage**: `.animated-gradient` class
- **Effect**: Smooth moving gradient background
- **Applied to**: Hero section background

#### 2. **Float Animation**
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
```
- **Usage**: `.animate-float` class
- **Effect**: Gentle floating motion
- **Applied to**: Background decorative elements

#### 3. **Fade In**
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```
- **Usage**: `.animate-fade-in` class
- **Effect**: Element fades in with upward motion

#### 4. **Slide Animations**
- `slideInLeft`: Element slides in from left
- `slideInRight`: Element slides in from right
- `slideInUp`: Element slides in from bottom

#### 5. **Scale In**
```css
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
```
- **Usage**: `.animate-scale-in` class
- **Effect**: Element scales up while fading in

#### 6. **Pulse Glow**
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.5); }
  50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.8); }
}
```
- **Usage**: `.animate-pulse-glow` class
- **Effect**: Pulsing glow effect

### Utility Classes

#### Hover Effects
```css
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.hover-glow:hover {
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.6);
}
```

#### Delay Utilities
- `.delay-100` through `.delay-600`: Animation delays for stagger effects

---

## 🚀 Component Animations

### 1. **Hero Section** ([Hero.js](app/components/Hero.js))

**Features:**
- **Animated Gradient Background**: Moving gradient with floating decorative elements
- **Text Stagger Animation**: Each text element animates in sequence
- **Social Icon Hover**: Icons scale and rotate on hover
- **Profile Image**: Scales and rotates on hover

**Implementation:**
```jsx
<motion.h1 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  Hi, I'm <span className="text-yellow-300">Pranit Adhangle</span>
</motion.h1>

<motion.a
  whileHover={{ scale: 1.2, rotate: 5 }}
  whileTap={{ scale: 0.9 }}
>
  <FaGithub />
</motion.a>
```

**Background Effects:**
```jsx
<div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
```

---

### 2. **Navbar** ([Navbar.js](app/components/Navbar.js))

**Features:**
- **Slide Down on Load**: Navbar slides down from top
- **Underline Hover Effect**: Animated underline appears on hover
- **Mobile Menu Animation**: Smooth expand/collapse with stagger
- **Logo Scale**: Logo scales on hover

**Implementation:**
```jsx
<motion.nav 
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5 }}
>
  <motion.a
    whileHover={{ scale: 1.1 }}
  >
    {item.name}
    <motion.span
      className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary"
      whileHover={{ width: '100%' }}
    ></motion.span>
  </motion.a>
</motion.nav>
```

---

### 3. **About Section** ([About.js](app/components/About.js))

**Features:**
- **Scroll-Triggered Animation**: Section animates when entering viewport
- **Card Scale In**: Main card scales up with fade
- **Stats Stagger**: Each stat counter animates with delay

**Implementation:**
```jsx
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: "-100px" })

<motion.h2 
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.6 }}
>
  About Me
</motion.h2>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
>
  {stat.value}
</motion.div>
```

---

### 4. **Skills Section** ([Skills.js](app/components/Skills.js))

**Features:**
- **Card Stagger Animation**: Each skill category animates in sequence
- **Hover Lift Effect**: Cards lift up on hover
- **Skill Item Stagger**: Individual skills animate within each card
- **Hover Slide**: Skills slide right on hover

**Implementation:**
```jsx
<motion.div 
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.6, delay: idx * 0.2 }}
  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
>
  {category.skills.map((skill, skillIdx) => (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: idx * 0.2 + skillIdx * 0.1 }}
      whileHover={{ scale: 1.05, x: 10 }}
    >
      {skill.name}
    </motion.div>
  ))}
</motion.div>
```

---

### 5. **Projects Section** ([Projects.js](app/components/Projects.js))

**Features:**
- **Grid Stagger Animation**: Projects animate in sequence
- **Card Lift on Hover**: Projects float up with enhanced shadow
- **Smooth Transitions**: All interactions are fluid

**Implementation:**
```jsx
<motion.div 
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.6, delay: idx * 0.15 }}
  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
>
  {/* Project Card */}
</motion.div>
```

---

### 6. **Achievements Section** ([Achievements.js](app/components/Achievements.js))

**Features:**
- **Alternating Slide Animation**: Odd cards slide from left, even from right
- **Hover Scale**: Cards scale up on hover
- **Smooth Transitions**: Professional feel

**Implementation:**
```jsx
<motion.div 
  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
  transition={{ duration: 0.6, delay: idx * 0.2 }}
  whileHover={{ scale: 1.05, y: -10 }}
>
  {/* Achievement Card */}
</motion.div>
```

---

### 7. **Testimonials Section** ([Testimonials.js](app/components/Testimonials.js))

**Features:**
- **Scroll-Triggered Stagger**: Testimonials fade in sequentially
- **Hover Effects**: Cards lift and scale slightly
- **Smooth Form Integration**: Form remains interactive

**Implementation:**
```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.6, delay: idx * 0.15 }}
  whileHover={{ y: -10, scale: 1.03 }}
>
  {/* Testimonial Card */}
</motion.div>
```

---

### 8. **Contact Section** ([Contact.js](app/components/Contact.js))

**Features:**
- **Sequential Animation**: Title → Description → Button
- **Button Interactions**: Scale on hover and tap
- **Enhanced Shadow**: Button shadow intensifies on hover

**Implementation:**
```jsx
<motion.a 
  initial={{ opacity: 0, scale: 0.8 }}
  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  whileHover={{ scale: 1.1, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
  whileTap={{ scale: 0.95 }}
>
  Contact Me
</motion.a>
```

---

## 🎯 Key Animation Patterns

### Scroll-Triggered Animations
```jsx
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: "-100px" })

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.6 }}
>
```

**Parameters:**
- `once: true`: Animation plays only once
- `margin: "-100px"`: Trigger 100px before element enters viewport
- Animation triggers when `isInView` becomes true

### Stagger Effects
```jsx
{items.map((item, idx) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    transition={{ duration: 0.5, delay: idx * 0.1 }}
  >
    {item}
  </motion.div>
))}
```

**Pattern:**
- Each item delays by `index * 0.1s`
- Creates cascading animation effect

### Hover Interactions
```jsx
<motion.div
  whileHover={{ 
    scale: 1.05, 
    y: -10,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
  }}
  whileTap={{ scale: 0.95 }}
>
```

**Common Hover Effects:**
- `scale`: Size change
- `y`: Vertical movement
- `rotate`: Rotation
- `boxShadow`: Shadow enhancement

---

## 🎨 Color & Visual Effects

### Gradient Background
```css
.animated-gradient {
  background: linear-gradient(-45deg, #6366f1, #8b5cf6, #a855f7, #ec4899);
  background-size: 400% 400%;
  animation: gradient-animation 15s ease infinite;
}
```

### Floating Elements
```jsx
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float delay-300"></div>
</div>
```

---

## 📊 Performance Considerations

### Best Practices Implemented:

1. **`once: true`**: Animations play only once to reduce re-renders
2. **`will-change`**: Browser optimization hints (automatic in Framer Motion)
3. **CSS Transitions**: Simple hover effects use CSS instead of JS
4. **Lazy Viewport Detection**: Animations trigger only when near viewport
5. **Hardware Acceleration**: Transform properties use GPU acceleration

### Performance Tips:
- Animations use `transform` and `opacity` (GPU-accelerated)
- Avoid animating `width`, `height`, `margin` (causes layout recalculation)
- Use `transition` for simple effects, `motion` for complex sequences
- Stagger delays kept reasonable (100-200ms) to avoid lengthy load times

---

## 🚀 Usage Examples

### Adding Animation to New Component

```jsx
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function NewSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref}>
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        New Section
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        Content
      </motion.div>
    </section>
  )
}
```

### Custom Animation Variants

```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.div variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## 🎓 Learning Resources

### Framer Motion Documentation
- [Official Docs](https://www.framer.com/motion/)
- [Animation Controls](https://www.framer.com/motion/animation/)
- [Gestures](https://www.framer.com/motion/gestures/)
- [Scroll Animations](https://www.framer.com/motion/scroll-animations/)

### CSS Animations
- [MDN Keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
- [CSS Tricks Animation Guide](https://css-tricks.com/almanac/properties/a/animation/)

---

## 📝 Summary

Your portfolio now features:
- ✅ Smooth scroll-triggered animations on all sections
- ✅ Interactive hover effects on cards, buttons, and links
- ✅ Dynamic animated gradient background in Hero
- ✅ Stagger animations for lists and grids
- ✅ Professional transitions matching modern portfolio standards
- ✅ Optimized performance with GPU-accelerated animations
- ✅ Mobile-friendly responsive animations

**Live Preview**: http://localhost:3002

Enjoy your beautifully animated portfolio! 🎉
