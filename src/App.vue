<template>
  <div id="app">
    <!-- ヘッダーメニュー -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Vue.js sand-box</a>
      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#Navber" aria-controls="Navber" aria-expanded="false" aria-label="ナビゲーションの切替">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- メニューリンク -->
      <div class="collapse navbar-collapse" id="Navber">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">
              ほーむ
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">
              あばうと
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- メインページ -->
    <div class="container-fluid">
      <div class="row">
        <router-view/>
      </div>
    </div>
  </div>
</template>
