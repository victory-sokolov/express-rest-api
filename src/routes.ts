import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/user.controller';
import {
	createUserSessionHandler,
	getUserSessionsHandler,
	invalidateUserSessionHandler
} from './controller/session.controller';
import { validateRequest, requiresUser } from './middleware';
import {
	createPostSchema,
	deletePostSchema,
	updatePostSchema
} from './schema/post.schema';
import {
	createUserSchema,
	createUserSessionSchema
} from './schema/user.schema';
import {
	createPostHandler,
	deletePostHandler,
	getPostHandler,
	updatePostHandler
} from './controller/post.controller';

export default function (app: Express) {
	app.get('/healthcheck', (req: Request, res: Response) => {
		res.sendStatus(200);
	});

	// Register user
	app.post('/api/users', validateRequest(createUserSchema), createUserHandler);
	// Login
	app.post(
		'/api/sessions',
		validateRequest(createUserSessionSchema),
		createUserSessionHandler
	);

	// Get user's sessions
	app.get('/api/sessions', requiresUser, getUserSessionsHandler);

	// Logout
	app.delete('/api/sessions', requiresUser, invalidateUserSessionHandler);

	// Create a post
	app.post(
		'/api/posts',
		[requiresUser, validateRequest(createPostSchema)],
		createPostHandler
	);

	// Update a post
	app.put(
		'/api/posts/:postId',
		[requiresUser, validateRequest(updatePostSchema)],
		updatePostHandler
	);

	// Get a post
	app.get('/api/posts/:postId', getPostHandler);

	// Delete a post
	app.delete(
		'/api/posts/:postId',
		[requiresUser, validateRequest(deletePostSchema)],
		deletePostHandler
	);
}
