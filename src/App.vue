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
          <b-nav-item to="/">HOME</b-nav-item>
        </b-navbar-nav>
        <!-- Todo -->
        <b-navbar-nav>
          <b-nav-item to="/todo">TODO</b-nav-item>
        </b-navbar-nav>
        <!-- Draggable -->
        <b-navbar-nav>
          <b-nav-item to="/draggable">ドラッグ＆ドロップ</b-nav-item>
        </b-navbar-nav>
        <!-- TinyMCE -->
        <b-navbar-nav>
          <b-nav-item to="/editor">エディター</b-nav-item>
        </b-navbar-nav>
        <!-- Components-Method -->
        <b-navbar-nav>
          <b-nav-item to="/parent">親子コンポーネント</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- メインページ -->
    <b-container fluid>
      <router-view/>
    </b-container>
  </div>
</template>
