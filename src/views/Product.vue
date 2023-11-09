<script setup>
import { ref } from 'vue';
import ProductTable from '../components/ProductTable.vue';
import ProductForm from '../components/ProductForm.vue';

const showForm = ref(false)

const addProduct = () => {
    showForm.value = !showForm.value
}
</script>

<template>
    <div class="container-fluid">
        <h2>Products</h2>
        <button class="btn btn-primary btnAdd" @click="addProduct">{{ showForm ? 'Back' : 'Add' }}</button>
        <ProductForm v-if="showForm" />
        <ProductTable v-else />
    </div>
</template>

<style scoped>
.btnAdd {
    margin: 1%;
}
</style>
