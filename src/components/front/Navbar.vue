<template>
  <header>
    <nav class="navbar navbar-static-top fixed-top d-none d-md-block">
      <div class="container">
        <div class="header mt-2 mb-4">
          <div class="header_tool row">
            <div class="col-sm-4 search_area">
              <!-- <input type="text" class="form-control" placeholder="請輸入關鍵字進行搜尋">
                <button type="button"><i class="fas fa-search"></i></button> -->
            </div>
            <div class="col-sm-4 logo">
              <router-link class="navbar-brand" to="/">
                <i class="fab fa-pagelines"></i> TreeLife
              </router-link>
            </div>
            <div class="col-sm-4 tool_area">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <router-link to="/cart"><i class="fas fa-shopping-cart"></i></router-link>
            </div>
          </div>
        </div>
        <div class="col-xs-12">
          <ul class="nav menu">
            <li><router-link class="nav-link" to="/">首頁</router-link></li>
            <li><router-link class="nav-link" to="/news">最新消息</router-link></li>
            <li><router-link class="nav-link" to="/products">商品列表</router-link></li>
            <li><router-link class="nav-link" to="/notice">購物說明</router-link></li>
            <li><router-link class="nav-link" to="/contact">聯絡我們</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-primary d-block d-md-none">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <i class="fab fa-pagelines"></i> TreeLife
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/news">最新消息</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">商品列表</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/notice">購物說明</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">聯絡我們</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
