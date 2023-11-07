<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-secondary" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Reporting</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/about" class="nav-link">About</RouterLink>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-secondary" type="button">Search</button>
                </form>
            </div>
        </div>
    </nav>
    <RouterView />
</template>