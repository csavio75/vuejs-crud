<script setup>
</script>

<template>
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Product name">
    </div>
    <div class="mb-3">
        <label for="slug" class="form-label">Slug</label>
        <input type="text" class="form-control" id="slug" placeholder="Product slug">
    </div>
    <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" rows="3"></textarea>
    </div>
    <div class="mb-3">
        <label for="name" class="form-label">Price</label>
        <input type="number" class="form-control" id="price" placeholder="Price">
    </div>
    <div>
        <button class="btn btn-success">Save</button>
    </div>
</template>