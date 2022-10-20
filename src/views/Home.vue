<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Mini E-Ticaret</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              exact-active-class="router-link-active"
              class="nav-link"
              :to="{ name: 'home' }"
              >Anasayfa</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              exact-active-class="router-link-active"
              class="nav-link"
              :to="{ name: 'productsUi' }"
              >Ürünler</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              exact-active-class="router-link-active"
              class="nav-link"
              :to="{ name: 'basket' }"
              >Sepet</router-link
            >
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Ara"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Ara</button>
        </form>
      </div>
    </div>
  </nav>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.router-link-active {
  color: #198754 !important;
}
</style>
