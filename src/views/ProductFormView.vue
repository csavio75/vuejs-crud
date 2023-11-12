<script setup>
import { useRouter } from 'vue-router';
import ProductForm from '../components/ProductForm.vue';
import Sidebar from '../components/sidebar.vue';


const route = useRouter()
const goBack = () => {
    route.push('/products')
}
</script>

<template>
    <Sidebar>
        <button class="btn btn-primary" @click="goBack">Back</button>
        <ProductForm />
    </Sidebar>
</template>