<template>
    <div>
        <h2>Register</h2>
        <h2 v-if="statusAlert">
            Success
        </h2>

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
    export default {
        name: "register",
        layout: "login",
        data: () => ({
            data: {
                inputName: 'tester',
                inputPassword: 'testertester',
            },

            statusAlert: false,
        }),
        methods:{
            send()
            {
                if (this.data.inputName !== '' && this.data.inputPassword !== '')
                {
                    this.$axios.post('auth/register', {
                        name: this.data.inputName,
                        password: this.data.inputPassword,
                    })
                    .then(res => {
                        console.log(res.data)
                        if (res.data)
                        {
                            // refreshToken
                            this.statusAlert = true;
                            setTimeout(() => {
                                this.statusAlert = false;
                            }, 2000)
                        }
                    })
                    .catch(e => {
                        console.log( e.response?.data?.message)
                    })
                }
            }
        }
    }
</script>
