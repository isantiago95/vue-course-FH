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
                :class="{ 'completed': todo.completed }"
                @dblclick="toggleTodo(todo.id)">
                {{ todo.text }}
            </li>
        </ul>
    </div>
</template>

<script>
import useTodos from '../hooks/useTodos';

export default {
    setup() {
        const { currentTab, pending, getTodosByTab, toggleTodo } = useTodos();

        return {
            currentTab,
            getTodosByTab,
            pending,
            toggleTodo
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