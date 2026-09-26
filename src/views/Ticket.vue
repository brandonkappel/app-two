<script setup lang="ts">
defineProps<{ id: string }>();
</script>

<template>
  <div>
    <h2>App Two - Ticket Detail</h2>
    <p>
      Showing ticket #<strong>{{ id }}</strong>
    </p>
    <RouterLink to="/">Back to App Two home</RouterLink>
  </div>
</template>
