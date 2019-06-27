import "reflect-metadata";
import { createConnection } from 'typeorm';
import { User } from './entity/user';
import { Log, ActionType } from './entity/log';

(async () => {
  const connection = await createConnection();
  const userRepo = await connection.getRepository(User);
  const logRepo = await connection.getRepository(Log);

  const newUser = new User();
  newUser.email = "sokolov@kl.com";
  newUser.lastEnterAt = new Date();

  const user = await userRepo.save(newUser);

  const newLog = new Log();
  newLog.url = "url";
  newLog.pixel = "pixel";
  newLog.action_type = ActionType.CREATE;

  const log = await logRepo.save(newLog);
})();