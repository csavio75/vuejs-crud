<script setup>
import axios from 'axios';
import { inject, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getStorage } from '../stores/localStorage';

const name = ref('')
const slug = ref('')
const description = ref('')
const price = ref(0.0)

const url = inject('base_url') + '/products'
const router = useRouter()
const route = useRoute()
const token = getStorage('token')
const id = ref(route.params.id)

const saveProduct = () => {
    axios.defaults.headers.post['Authorization'] = `Bearer ${token}`;
    axios.post(url, {
        'name': name.value,
        'slug': slug.value,
        'description': description.value,
        'price': price.value
    })
        .then(() => router.push({ name: 'list' }))
        .catch((err) => console.log(err))
}

const getProduct = (id) => {
    axios.get(url + '/' + id)
        .then((res) => {
            name.value = res.data.name
            slug.value = res.data.slug
            description.value = res.data.description
            price.value = res.data.price
        })
        .catch((err) => console.log(err))
}

const updateProduct = (id) => {
    axios.defaults.headers.put['Authorization'] = `Bearer ${token}`;
    axios.put(`${url}/${id}`, {
        'name': name.value,
        'slug': slug.value,
        'description': description.value,
        'price': price.value
    })
        .then(() => router.push({ name: 'list' }))
        .catch((err) => console.log(err))
}

onMounted(() => {
    if (route.params) {
        getProduct(id.value)
    }
})
</script>

<template>
    <form @submit.prevent="route.params.id ? updateProduct(route.params.id) : saveProduct()">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Product name" v-model="name" required>
        </div>
        <div class="mb-3">
            <label for="slug" class="form-label">Slug</label>
            <input type="text" class="form-control" id="slug" placeholder="Product slug" v-model="slug" required>
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" rows="3" v-model="description"></textarea>
        </div>
        <div class="mb-3">
            <label for="name" class="form-label">Price</label>
            <input type="number" class="form-control" id="price" placeholder="Price" v-model="price" required>
        </div>
        <div>
            <button class="btn btn-success">Save</button>
        </div>
    </form>
</template>