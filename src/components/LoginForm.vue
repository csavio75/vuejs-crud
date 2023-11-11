<script setup>
import { inject, ref } from 'vue';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';
import axios from 'axios';


const store = useUserStore()
const route = useRouter()
const url = inject('base_url') + '/login'
const email = ref('')
const password = ref('')

const loginSubmit = () => {
    axios.post(url, {
        'email': email.value,
        'password': password.value
    })
        .then((res) => {
            store.loggedUser(res.data)
            store.isAuthenticated = true
            route.push('/')
        })
        .catch((err) => console.error(err))
}
</script>

<template>
    <section class="vh-100" style="background-color: #47c6f8;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-xl-10">
                    <div class="card" style="border-radius: 1rem;">
                        <div class="row g-0">
                            <div class="col-md-6 col-lg-5 d-none d-md-block">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                    alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
                            </div>
                            <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                <div class="card-body p-4 p-lg-5 text-black">

                                    <form>

                                        <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account
                                        </h5>

                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="email">Email address</label>
                                            <input type="email" id="email" class="form-control form-control-lg"
                                                v-model="email" />
                                        </div>

                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="password">Password</label>
                                            <input type="password" id="password" class="form-control form-control-lg"
                                                v-model="password" />
                                        </div>

                                        <div class="pt-1 mb-4">
                                            <button class="btn btn-dark btn-lg btn-block" type="button"
                                                @click="loginSubmit">Login</button>
                                        </div>

                                        <RouterLink to="/login" class="small text-muted">Forgot password?
                                        </RouterLink>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>