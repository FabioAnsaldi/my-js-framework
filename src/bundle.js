/*import User from './classes/User.js'*/
import Application from './core/classes/Application.js'
import View from './core/classes/View.js'
import Home from './pages/home/Home.js'
import Login from './pages/login/Login.js'

/* Immediately-Invoked Function Expression (IIFE) */
(function () {
  const header = new View({ html: '/src/components/header/header.html', links: [{ path: '/', label: 'home' }, { path: '/login', label: 'login' }] })
  const pages = [
    new Home({ path: '/', label: 'home', title: 'Home Page', before: header, html: '/src/pages/home/home.html' }),
    new Login({ path: '/login', label: 'login', title: 'LogIn Page', before: header, html: '/src/pages/login/login.html' })
  ]
  const app = new Application(document.querySelector('#root'), pages)

})();