import { db, User, Log } from "./db";
import { IUser } from './models/user';
import { LogAttributes, ActionType } from './models/log';

(async () => {
  await db.sync({ force: true });

  const userData: IUser = {
    login: "sokolov_alex",
  };

  const user = User.create(userData);

  console.log(user);

  const log: LogAttributes = {
    action_type: ActionType.CREATE,
    datetime: new Date(),
    pixel: '',
    url: '',
    user: userData
  };

  
  Log.create(log);


})()