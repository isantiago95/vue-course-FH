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

    <button @click="openModal">New item</button>

    <Modal v-if="isOpen" @on:close="closeModal">
        <template v-slot:header>
            <h2>Add new to-do</h2>
        </template>
        <template v-slot:body>
            <form @submit.prevent="createTodo(txtNewItem); closeModal()">
                <input type="text"
                    placeholder="New item description"
                    v-model="txtNewItem"
                    ref="txtRef" />
                <br>
                <br>
                <button type="submit">Create</button>
            </form>
        </template>
    </Modal>
</template>

<script>
import { onActivated, ref } from 'vue';
import useTodos from '../hooks/useTodos';
import Modal from '../components/Modal.vue';

export default {

    components: {
        Modal
    },

    setup() {
        const { currentTab, pending, getTodosByTab, toggleTodo, createTodo } = useTodos();

        const isOpen = ref(false);
        const txtRef = ref();
        const txtNewItem = ref("");

        onActivated(() => {
            if (txtRef.value) txtRef.value.select();
        });

        return {
            closeModal: () => isOpen.value = false,
            isOpen,
            openModal: () => isOpen.value = true,

            txtRef,
            txtNewItem,

            createTodo,
            currentTab,
            getTodosByTab,
            pending,
            toggleTodo,
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