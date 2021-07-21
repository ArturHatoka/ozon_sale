// import axios from '../../plugins/axios'
// import cookie from 'cookie-universal-nuxt'

export default
{
    async logout ({ commit, redirect }, cookie) {
      try{

        const res = await this.$axios.$post('auth/logout');

          commit('SET_USER', {} );
          commit('SET_AUTH', false );
          cookie.remove('token')
          redirect("auth/login");

      } catch (e) {
        console.log(e.response)
      }
    }
}
