<template>
  <div class="spin-container">
    <div class="spin"></div>
  </div>
</template>

<style lang="scss" scoped>
.spin-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.13);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.9px);
  z-index: 9999;

  .spin {
    width: 40px;
    height: 40px;
    border: 3px solid transparent;
    border-radius: 50%;
    border-top-color: #ff8800;
    animation: spin 1s ease-in-out infinite;
  }
}

@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
