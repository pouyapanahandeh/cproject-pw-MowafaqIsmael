<template>
  <div class="row full-width">
    <div class="container">
      <q-img
        src="../../assets/imgs/MI-1.jpeg"
        alt="Avatar"
        class="image"
      ></q-img>
      <div class="overlay">
        <div class="text">Plan Details come</div>
      </div>
    </div>
  </div>
</template>
<style>
.container {
  position: relative;
  width: 50%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #23b5d3;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}

.container:hover .overlay {
  bottom: 0;
  height: 100%;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
