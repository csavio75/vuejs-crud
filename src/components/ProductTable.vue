<script setup>
import { inject, onMounted, ref, watch } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { getStorage } from '../stores/localStorage';


const products = ref([])
const url = inject('base_url') + '/products'
const route = useRouter()
const token = getStorage('token')

const listProducts = () => {
    axios.get(url)
        .then(response => {
            products.value = response.data
        })
        .catch(error => console.log(error))
}

const updateProduct = (id) => {
    route.push(`/form/${id}`)
}

const deleteProduct = (id) => {
    const del = confirm("Voulez-vous vraiment supprimer ce produit?")
    if (del) {
        axios.defaults.headers.delete['Authorization'] = `Bearer ${token}`;
        axios.delete(url + '/' + id)
            .then(() => listProducts())
            .catch((err) => console.log(err))
    }
}

onMounted(() => {
    listProducts()
})

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
                        <i class="bi bi-pencil-square" id="icon-action" @click="updateProduct(product.id)"></i>
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