<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Contact</h2>
          <ul class="footer-list">
            <li>
              <a href="tel:0912345678"> <i class="fas fa-fw fa-phone"></i>&emsp;0912345678 </a>
            </li>
            <li>
              <a href="mailto:0912345678">
                <i class="far fa-fw fa-envelope"></i>&emsp;blazer030@gmail
              </a>
            </li>
            <li><i class="fas fa-fw fa-map-marker-alt"></i>&emsp;高雄市前鎮區55號</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h2>Quink Links</h2>
          <ul class="footer-list">
            <li><router-link class="nav-link" to="/">首頁</router-link></li>
            <li><router-link class="nav-link" to="/news">最新消息</router-link></li>
            <li><router-link class="nav-link" to="/products">商品列表</router-link></li>
            <li><router-link class="nav-link" to="/faq">常見問題</router-link></li>
            <li><router-link class="nav-link" to="/contact">聯絡我們</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <p>
        無商業用途，僅供學習使用
      </p>
    </div>
  </footer>
</template>
