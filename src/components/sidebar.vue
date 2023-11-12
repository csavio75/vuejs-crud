<script setup>
import { RouterLink } from 'vue-router';
import { inject } from 'vue';
import axios from 'axios'
import { clearStorage, getStorage } from '../stores/localStorage';


const url = inject('base_url') + '/logout'
const token = getStorage('token')

const loggedOut = () => {
    axios.defaults.headers.post['Authorization'] = `Bearer ${token}`;
    axios.post(url)
        .then(() => {
            clearStorage('token')
        })
        .catch((err) => console.log(err))
}
</script>

<template>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span class="fs-5 d-none d-sm-inline">e-Prod</span>
                    </a>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link align-middle px-0">
                                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/products" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">About</span>
                            </RouterLink>
                        </li>
                    </ul>
                    <hr>
                    <div class="dropdown pb-4">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                            id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30"
                                class="rounded-circle">
                            <span class="d-none d-sm-inline mx-1">Charlot</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <RouterLink to="/login" @click="loggedOut" class="dropdown-item">Sign out
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col py-3">
                <slot></slot>
            </div>
        </div>
    </div>
</template>