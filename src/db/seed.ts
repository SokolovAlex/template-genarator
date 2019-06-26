import { db, User, Log } from "./db";
import { IUser } from './models/user';
import { ActionType } from './models/log';

(async () => {
  await db.sync({ force: true });

  const userData: IUser = {
    login: "sokolov_alex",
  };

  const user = await User.create(userData);
  console.log(user);

  const log = await user.createLog({
    datetime: new Date(),
    action_type: ActionType.CREATE,
    url: "2",
    pixel: "4"
  });

  console.log("============");

  console.log(log);

  console.log("============");

  const ourUser = await User.findByPk('sokolov_alex', {
    include: [User.associations.logs],
    rejectOnEmpty: true, // Specifying true here removes `null` from the return type!
  });
  console.log(ourUser.logs![0]);

  console.log(ourUser.logs!);

  console.log("============");

})()