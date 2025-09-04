import { AuthController } from './Auth/AuthController.js';
import { ExampleController } from './controllers/ExampleController.js';
import { GiftController } from './controllers/GiftController.js';

class App {

  authController = new AuthController() // ☑️ you can remove this - example only

  giftController = new GiftController()
}

window['app'] = new App()


