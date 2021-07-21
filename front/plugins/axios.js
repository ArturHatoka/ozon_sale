export default ({ $cookies, $axios, redirect }) =>
{
    // $axios.setHeader('Authorization', `Bearer ${$cookies.get('token')}`)

    $axios.onRequest(config => {
        config.withCredentials = true;
        $axios.setHeader('Authorization', `Bearer ${$cookies.get('token')}`)
        return config;
    })


    // $axios.onError( async (error) => {
    //     const originalRequest = error.config;
    //     if(error.response.status === 401 && error.config && !error.config._isRetry ) {
    //         originalRequest._isRetry = true;
    //         // use default axios
    //         try{
    //             const response = await $axios.post('auth/refresh');
    //
    //             $cookies.set('token', response.data.accessToken);
    //             originalRequest.headers.Authorization = `Bearer ${$cookies.get('token')}`
    //             // console.log(originalRequest.headers)
    //             $axios.request(originalRequest);
    //         } catch (e) {
    //             console.log(
    //                'НЕ АВТОРИЗОВАН__'+ e.response?.data?.message
    //             )
    //         }
    //     } else{
    //         redirect('/auth/login')
    //     }
    //     throw error;
    // })
}
