export default async ({ store, redirect, app, $axios, $cookies }) =>
{
    if (!store.state.user.isAuth)
    {
        try {
            console.log(
                'Middleware'
            )
            const response = await $axios.post('auth/refresh');
                console.log(response, 'response')
                if (response.data.accessToken) {
                    $cookies.set('token', response.data.accessToken);
                    // $axios.setHeader('Authorization', `Bearer ${$cookies.get('token')}`)
                    store.commit('user/SET_USER', response.data.user);
                    store.commit('user/SET_AUTH', true);
                    console.log('Success accessToken...');
                } else{
                    console.log('No accessToken')
            }
        } catch (e) {
            console.log(
                e.response?.data?.message
            )
        }
        // const cookieToken = app.$cookies.get('token');
        // if ( cookieToken && cookieToken.length )
        // {
        //     axios.post('http://localhost:3001/auth/checkCookie', {
        //         token: cookieToken,
        //     }).then( res => {
        //         if (res.data.token){
        //             store.dispatch('user/ACTION_SET_TOKEN', cookieToken)
        //         } else{
        //             redirect('/auth/login')
        //         }
        //     }).catch( error => {
        //         console.log('Error check cookie__' + error)
        //     })
        // } else{
        //     redirect('/auth/login')
        // }
    }

    // if ( app.$cookies.get('room_id') ){
    //     redirect('/game/'+app.$cookies.get('room_id'))
    // }
}
