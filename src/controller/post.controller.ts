import { Request, Response } from 'express';
import { get } from 'lodash';
import {
	createPost,
	deletePost,
	findAndUpdate,
	findPost
} from '../service/post.service';

export async function createPostHandler(req: Request, res: Response) {
	const userId = get(req, 'user._id');
	const body = req.body;

	const post = await createPost({ ...body, user: userId });
	return res.send(post);
}

export async function updatePostHandler(req: Request, res: Response) {
	const postId = get(req, 'params.postId');
	const userId = get(req, 'user._id');
	const update = req.body;

	const post = await findPost({ postId });

	if (!post) {
		return res.sendStatus(404);
	}

	if (String(post.user) !== userId) {
		return res.sendStatus(401);
	}

	const updatePost = await findAndUpdate({ postId }, update, { new: true });

	return res.send(updatePost);
}

export async function getPostHandler(req: Request, res: Response) {
	const postId = get(req, 'params.postId');
	const post = await findPost({ postId });

	if (!post) {
		return res.sendStatus(404);
	}

	return res.send(post);
}

export async function deletePostHandler(req: Request, res: Response) {
	const postId = get(req, 'params.postId');
	const userId = get(req, 'user._id');

	const post = await findPost({ postId });

	if (!post) {
		return res.sendStatus(404);
	}

	if (String(post.user) !== String(userId)) {
		return res.sendStatus(401);
	}

	await deletePost({ postId });

	return res.sendStatus(200);
}
