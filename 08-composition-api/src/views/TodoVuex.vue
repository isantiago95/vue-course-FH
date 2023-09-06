<template>
    <h1>Thanos To-Do List</h1>

    <h4>Tasks: {{ pending.length }}</h4>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();

        return {
            pending: computed(() => store.getters['pendingTodos'])
        };

    }
}

</script>

<style scoped></style>