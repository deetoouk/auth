import express from 'express';
import { dispatch } from '../cqrs';
import CreateUser from '../user/commands/CreateUser';

export default class UserController {
  public static index(req: express.Request, res: express.Response) {
    return res.json({ msg: 'Users listing' });
  }

  public static create(req: express.Request, res: express.Response) {
    const response = dispatch(
      new CreateUser(
        req.body.email,
        req.body.password,
        req.body.passwordConfirm,
        req.body.firstName,
        req.body.lastName,
      ),
    );

    return res.json({ success: response });
  }
}
