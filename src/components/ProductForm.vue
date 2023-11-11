<script setup>
import axios from 'axios';
import { inject, ref } from 'vue';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';

const name = ref('')
const slug = ref('')
const description = ref('')
const price = ref(0)

const url = inject('base_url') + '/products'
const store = useUserStore()

const route = useRouter()

const saveProduct = () => {
    axios.defaults.headers.post['Authorization'] = `Bearer ${store.userData.token}`;
    axios.post(url, {
        'name': name.value,
        'slug': slug.value,
        'description': description.value,
        'price': price.value
    })
        .then(() => route.push("/product"))
        .catch((err) => console.log(err))
}
</script>

<template>
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Product name" v-model="name">
    </div>
    <div class="mb-3">
        <label for="slug" class="form-label">Slug</label>
        <input type="text" class="form-control" id="slug" placeholder="Product slug" v-model="slug">
    </div>
    <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" rows="3" v-model="description"></textarea>
    </div>
    <div class="mb-3">
        <label for="name" class="form-label">Price</label>
        <input type="number" class="form-control" id="price" placeholder="Price" v-model="price">
    </div>
    <div>
        <button class="btn btn-success" @click="saveProduct">Save</button>
    </div>
</template>