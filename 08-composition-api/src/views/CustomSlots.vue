<template>
    <h1>Aprendiendo Slots</h1>

    <button @click="openModal">Abrir modal</button>

    <modal v-if="isOpen" title="Hola Mundo" @on:close="closeModal">
        <template v-slot:body>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </template>
        <template v-slot:footer>
            <button @click="closeModal">Salir</button>
        </template>
        <template v-slot:header>
            <h2>Titulo del modal</h2>
        </template>
    </modal>
</template>

<script>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';

export default {

    components: {
        Modal
    },

    setup() {

        const isOpen = ref(false);

        return {
            isOpen,

            closeModal: () => isOpen.value = false,
            openModal: () => isOpen.value = true
        };
    }
}

</script>

<style scoped></style>