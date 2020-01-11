<template>
  <div id="app">
    <!-- ヘッダーメニュー -->
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Vue.js sand-box</b-navbar-brand>
      <!-- メニューリンク -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Home -->
        <b-navbar-nav>
          <b-nav-item to="/">ほーむ</b-nav-item>
        </b-navbar-nav>
        <!-- About -->
        <b-navbar-nav>
          <b-nav-item to="/about">あばうと</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- メインページ -->
    <b-container fluid>
      <b-row>
        <router-view/>
      </b-row>
    </b-container>
  </div>
</template>
