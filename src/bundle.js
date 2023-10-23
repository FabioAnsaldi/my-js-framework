/*import User from './classes/User.js'*/
import Application from './core/classes/Application.js'
import View from './core/classes/View.js'
import Home from './pages/home/Home.js'
import Login from './pages/login/Login.js'
import Policy from './pages/policy/Policy.js'

/* Immediately-Invoked Function Expression (IIFE) */
(function () {
  const headerLinks = [
    { path: '/', label: 'home' },
    { path: '/login', label: 'login' }
  ]
  const footerLinks = [
    { path: '/policy', label: 'policy' }
  ]
  const header = new View({ html: '/src/components/header/header.html', links: headerLinks })
  const footer = new View({ html: '/src/components/footer/footer.html', links: footerLinks })
  const pages = [
    new Home({ path: '/', title: 'Home Page', before: header, html: '/src/pages/home/home.html', after: footer }),
    new Login({ path: '/login', title: 'LogIn Page', before: header, html: '/src/pages/login/login.html', after: footer }),
    new Policy({ path: '/policy', title: 'Policy Page', before: header, html: '/src/pages/policy/policy.html', after: footer })
  ]
  new Application(document.querySelector('#root'), pages)

})();