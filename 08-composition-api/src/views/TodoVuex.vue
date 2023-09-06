<template>
    <h1>Lista tareas Thanos</h1>
    <h4>Pending: {{ pending.length }}</h4>
    <hr>

    <button
        :class="{ 'active': currentTab === 'all' }"
        @click="currentTab = 'all'">
        All
    </button>
    <button
        :class="{ 'active': currentTab === 'pending' }"
        @click="currentTab = 'pending'">
        Pending
    </button>
    <button
        :class="{ 'active': currentTab === 'completed' }"
        @click="currentTab = 'completed'">
        Completed
    </button>

    <div>
        <ul>
            <li v-for="todo in getTodosByTab" :key="todo.id"
                :class="{ 'completed': todo.completed }">
                {{ todo.text }}
            </li>
        </ul>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();

        const currentTab = ref('all');

        return {
            currentTab,

            pending: computed(() => store.getters['pendingTodos']),
            completed: computed(() => store.getters['completedTodos']),
            all: computed(() => store.getters['allTodos']),
            getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value))
        };

    }
}

</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 300px;
    text-align: left;
}

li {
    cursor: pointer;
}

.active {
    background-color: #2c3e50;
    color: #fff;
}

.completed {
    text-decoration: line-through;
}
</style>