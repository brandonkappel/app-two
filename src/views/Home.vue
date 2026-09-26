<script setup lang="ts">
const tickets = ['1001', '1002', '1003'];
</script>

<template>
  <div>
    <h2>App Two</h2>
    <p>This is App Two's home route - a different app, different routes.</p>
    <ul>
      <li v-for="t in tickets" :key="t">
        <RouterLink :to="`/ticket/${t}`">Ticket #{{ t }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
