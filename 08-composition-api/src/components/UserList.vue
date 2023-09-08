<template>
    <ul>
        <!-- <li v-for="user in users" :key="user.id">
            <h5>hola mundo</h5>
        </li> -->
        <slot v-for="user in users"
            :key="user.id"
            :user="user">
        </slot>
    </ul>
</template>

<script>
export default {

    props: {
        users: {
            type: Array,
            required: true
        }
    },

    setup() {

    }
};
</script>

<style scoped>
ul {
    list-style: none;
}
</style>