import express from 'express';

export default class IndexController {
  public static index(req: express.Request, res: express.Response) {
    return res.json({ msg: 'Wellcome!' });
  }
}
