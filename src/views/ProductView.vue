<script setup>
import { ref } from 'vue';
import ProductTable from '../components/ProductTable.vue';
import ProductForm from '../components/ProductForm.vue';
import Sidebar from '../components/sidebar.vue';
import { useRouter } from 'vue-router';


const route = useRouter()

const addProduct = () => {
    route.push("/form")
}
</script>

<template>
    <Sidebar>
        <h2>Products</h2>
        <button class="btn btn-primary btnAdd" @click="addProduct">Add</button>
        <ProductTable />
    </Sidebar>
</template>

<style scoped>
.btnAdd {
    margin: 1%;
}
</style>
