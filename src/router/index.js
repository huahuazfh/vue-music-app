import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/Home'
import Music from 'pages/music/Music'
import MusicVideo from 'pages/mv/MusicVideo'
import User from 'pages/user/User'
import Search from 'pages/search/Search'

// Search
import SearchSongs from 'pages/search/components/Songs'
import SearchSingers from 'pages/search/components/Singers'
import SearchAlbums from 'pages/search/components/Albums'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/music',
      component: Home,
      children: [
        {
          path: '/music',
          name: 'Music',
          component: Music
        },
        {
          path: '/mv',
          name: 'MusicVideo',
          component: MusicVideo
        },
        {
          path: '/user',
          name: 'User',
          component: User
        }
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      children: [
        {
          path: 'songs',
          name: 'SearchSongs',
          component: SearchSongs
        },
        {
          path: 'singers',
          name: 'SearchSingers',
          component: SearchSingers
        },
        {
          path: 'albums',
          name: 'SearchAlbums',
          component: SearchAlbums
        }
      ]
    }
  ]
})