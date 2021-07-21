<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span @click="$router.push('/')" class="navbar-brand">Main</span>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul v-if="GET_IS_AUTH" class="navbar-nav mr-auto">

                <li class="nav-item"><span @click="$router.push('/rooms')" class="nav-link">Rooms</span></li>

            </ul>

            <div
                v-if="!GET_IS_AUTH"
                class="d-flex align-items-center"
            >
                <div @click="$router.push('/auth/login')" class="h4 btn btn-info mr-3">
                    Войти
                </div>
                <div @click="$router.push('/auth/register')" class="h4 btn btn-info">
                    Регистрация
                </div>
            </div>
            <div
                class="d-flex align-items-center"
                v-else
            >
                <div class="mr-3">
                    {{ GET_USER.name }}
                </div>
                <button @click="logout" class="btn btn-info">
                    Выйти
                </button>
            </div>

        </div>
    </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: 'Header',
    data: () => ({
    }),
    computed: {
        ...mapGetters('user', ['GET_USER', 'GET_IS_AUTH'])
    },
    methods: {
        ...mapMutations('user', ['SET_USER', 'SET_AUTH']),
        async logout(){
          await this.$store.dispatch('user/logout', this.$cookies)
        }
    }
}
</script>
