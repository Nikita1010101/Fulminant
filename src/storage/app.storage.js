import { AppState } from '../../core/state/states/app.state'
import { models } from './app.models'
import { productsState } from './states/product'
import { userState } from './states/user'

const storage = new AppState()

storage.setValue(models.product, productsState)
storage.setValue(models.user, userState)
