<script setup>
import { inject, ref } from 'vue';
import axios from 'axios';
import { useUserStore } from '@/stores/user'

const products = ref([])
const url = inject('base_url') + '/products'
const store = useUserStore()

const listProducts = () => {
    axios.get(url)
        .then(response => {
            products.value = response.data
        })
        .catch(error => console.log(error))
}
listProducts()

const getProduct = (id) => {
    axios.get(url + '/' + id)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
}

const deleteProduct = (id) => {
    const del = confirm("Voulez-vous vraiment supprimer ce produit?")
    if (del) {
        axios.defaults.headers.delete['Authorization'] = `Bearer ${store.userData.token}`;
        axios.delete(url + '/' + id)
            .then(() => listProducts)
            .catch((err) => console.log(err))
    }
}
</script>

<template>
    <div class="container">
        <table class="table">
            <thead class="table-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.price }} MGA</td>
                    <td>
                        <i class="bi bi-pencil-square" id="icon-action" @click="getProduct(product.id)"></i>
                    </td>
                    <td>
                        <i class="bi bi-trash" id="icon-action" @click="deleteProduct(product.id)"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
#icon-action {
    cursor: pointer;
}
</style>