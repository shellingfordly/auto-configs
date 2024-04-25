<script setup lang="ts"></script>

<template>
  <div id="div" class="w-500px h-200px fcc bg-blue hp hbg-red b b-black">
    <img src="/vite.svg" class="w-10" alt="Vite logo" />
    <div class="vite hc-[#fff]">vite</div>
  </div>
  <div
    class="hover>.child:(flex,justify-between,bg-red,text-xl) aaa w-100 h-100 bg-green"
  >
    <div class="child bg-yellow">
      <div>1</div>
      <div>2</div>
    </div>
    <button class="cp hover:(w-20 bg-gray-400 c-white)" p1>hover</button>
  </div>
</template>
