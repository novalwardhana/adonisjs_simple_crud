'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/mahasiswa', 'MahasiswaController.index').prefix('api/v1')
Route.get('/mahasiswa/:id', 'MahasiswaController.show').prefix('api/v1')
Route.post('/mahasiswa/add', 'MahasiswaController.add').prefix('api/v1')
Route.put('/mahasiswa/update/:id', 'MahasiswaController.update').prefix('api/v1')
Route.delete('/mahasiswa/:id', 'MahasiswaController.delete').prefix('api/v1')
