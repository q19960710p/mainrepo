import { BaseContext } from 'koa'

export { userController }

class UserController {
	/** @param {BaseContext} ctx */
	find(ctx) {
		ctx.body = ['frank', 'jeff']
	}

	/** @param {BaseContext} ctx */
	findOne(ctx) {
		ctx.body = { name: 'frank' }
	}

	/** @param {BaseContext} ctx */
	create(ctx) {}

	/** @param {BaseContext} ctx */
	update(ctx) {}

	/** @param {BaseContext} ctx */
	delete(ctx) {
		ctx.status = 204
	}
}

const userController = new UserController()
