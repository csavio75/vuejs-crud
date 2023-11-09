<script setup>
import { inject, ref } from 'vue';
import axios from 'axios';

const products = ref([])
const url = inject('base_url') + '/products'

axios.get(url)
    .then(response => {
        products.value = response.data
    })
    .catch(error => console.log(error))
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
                        <i class="bi bi-pencil-square"></i>
                    </td>
                    <td>
                        <i class="bi bi-trash"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>