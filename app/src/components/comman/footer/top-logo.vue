
<template>
  <button class="custom-button">
    <div class="text-container">
      <span class="title">Hardware and Software</span>
      <span class="subtitle">Services</span>
    </div>
  </button>
</template>

<style scoped>
.custom-button {
  display: flex;
  align-items: center;
  padding: 2px 16px;
  background-color: #000;
  color: #fff;
  outline: 2px solid #000;
  box-shadow: 5px 5px 0 #000;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 1px;
  gap: 10px;
  position: relative;
  overflow: hidden;
}

/* Yaltirash effekt */
.custom-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  opacity: 0;
  z-index: 1;
}

.custom-button:hover::before {
  opacity: 1;
  animation: gloss-slide 2s infinite;
}

@keyframes gloss-slide {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.custom-button:hover {
  transform: translate(-3px, -3px);
  box-shadow: 8px 8px 0 #000;
}

.custom-button:active {
  transform: translate(3px, 3px);
  box-shadow: none;
  background-color: #fff;
  color: #000;
  border-color: #000;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.1;
  text-align: left;
  z-index: 2;
}

.title {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.subtitle {
  font-size: 14px;
  text-transform: uppercase;
}
</style>
