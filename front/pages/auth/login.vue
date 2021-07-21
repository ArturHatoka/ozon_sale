<template>
    <div>
        <h2>Login</h2>
        <label for="">
            <input type="text" required v-model="data.inputName">
        </label>
        <label for="">
            <input type="text" required v-model="data.inputPassword">
        </label>
        <button class="btn btn-success" @click="send">Send</button>

    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        name: "login",
        layout: "login",
        data: () => ({
            data: {
                inputName: 'tester',
                inputPassword: 'testertester',
            },
        }),
        methods:{
            ...mapMutations('user', ['SET_USER', 'SET_AUTH']),
            async send()
            {
                if (this.data.inputName !== '' && this.data.inputPassword !== '')
                {
                    const data = this.$axios.post('auth/login', {
                        name: this.data.inputName,
                        password: this.data.inputPassword,
                    }).then(response => {
                        if (response.data.accessToken) {

                            this.$cookies.set('token', response.data.accessToken);
                            // this.$axios.setHeader('Authorization', `Bearer ${this.$cookies.get('token')}`)

                            this.SET_AUTH(true);
                            this.SET_USER(response.data.user);
                            this.$router.push('/');
                        } else{
                            console.log('No accessToken')
                        }
                    }).catch(e => {
                        console.log(
                                e.response?.data?.message
                            )
                    })
                }
            },
        }
    }
</script>
