<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      
      <div class="carousel-item active">
        <img :src="images[0].image" class="d-block w-100" :alt="images[0].id">
      </div>
      
      <div class="carousel-item">
        <img :src="images[1].image" class="d-block w-100" :alt="images[1].id">
      </div>
      
      <div class="carousel-item">
        <img :src="images[2].image" class="d-block w-100" :alt="images[2].id">
      </div>
    
      </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
// Aquí va el código Javascript
</script>

<style>

</style>