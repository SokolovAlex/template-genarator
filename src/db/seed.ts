import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ActionType, Log } from './entity/log';
import { InputType, Parameter } from './entity/parameter';
import { ParameterValue } from './entity/parameterValue';
import { Template } from './entity/template';
import { Template2Parameter } from './entity/template2Parameter';
import { User } from './entity/user';

(async () => {
  const connection = await createConnection();
  const userRepo = await connection.getRepository(User);
  const logRepo = await connection.getRepository(Log);
  const paramRepo = await connection.getRepository(Parameter);
  const paramValueRepo = await connection.getRepository(ParameterValue);
  const templateRepo = await connection.getRepository(Template);
  const t2pRepo = await connection.getRepository(Template2Parameter);

  const newUser = new User();
  newUser.email = 'sokolov@kl.com';
  newUser.lastEnterAt = new Date();

  const user = await userRepo.save(newUser);

  const newLog = new Log();
  newLog.url = 'url';
  newLog.pixel = 'pixel';
  newLog.actionType = ActionType.Create;
  newLog.user = user;

  await logRepo.save(newLog);

  const newValue1 = new ParameterValue();
  newValue1.key = 'key1';
  newValue1.name = 'name1';
  newValue1.addedUser = user;

  const newValue2 = new ParameterValue();
  newValue2.key = 'key2';
  newValue2.name = 'name2';
  newValue2.addedUser = user;

  const value1 = await paramValueRepo.save(newValue1);
  await paramValueRepo.save(newValue2);

  const newParam = new Parameter();
  newParam.key = 'fake';
  newParam.name = 'fake';
  newParam.omnitureName = 'fake';
  newParam.userSupplied = 'fake';
  newParam.inputType = InputType.Checkbox;
  newParam.defaultValue = value1;

  const param = await paramRepo.save(newParam);

  const [ googleTemplate, yandexTemplate ] = await createTemplates(templateRepo);

  const newT2p = new Template2Parameter();
  newT2p.order = 1;
  newT2p.template = googleTemplate;
  newT2p.parameter = param;

  t2pRepo.save(newT2p);

  const newT2p2 = new Template2Parameter();
  newT2p2.order = 1;
  newT2p2.template = yandexTemplate;
  newT2p2.parameter = param;

  t2pRepo.save(newT2p2);
})();

const createTemplates = async (repo) => {
  const data1 = new Template();
  data1.key = 'GoogleAdWords';
  data1.name = 'Google AdWords';
  data1.active = true;
  data1.description = 'Only for direct integrations with Google AdWords. If you use Kenshoo, use that setup instead.';
  data1.pixelTemplate = 'GoogleAdWords';
  data1.trafficSource = 'Paid Search';
  data1.appendParameters = 'GoogleAdWords';

  const data2 = new Template();
  data2.key = 'YandexDirect';
  data2.name = 'Yandex Direct';
  data2.active = true;
  data2.description = 'Only for direct integrations with Yandex Direct. If you use Kenshoo, use that setup instead.';
  data2.pixelTemplate = 'YandexDirect';
  data2.trafficSource = 'Paid Search';
  data2.appendParameters = 'YandexDirect';

  const data3 = new Template();
  data3.key = 'Kenshoo';
  data3.name = 'Kenshoo';
  data3.active = true;
  data3.description = 'For all links comming from paid search which are integrated with kenshoo.com.';
  data3.pixelTemplate = 'Kenshoo';
  data3.trafficSource = 'Paid Search';
  data3.appendParameters = 'Kenshoo';

  const data4 = new Template();
  data4.key = 'NativeIPMs';
  data4.name = 'Native IPMs';
  data4.active = true;
  data4.description = 'This is a hint for users explaining what is this option for.';
  data4.pixelTemplate = 'pixelTemplate3';
  data4.trafficSource = 'IPM';
  data4.appendParameters = 'appendParameters3';

  const data5 = new Template();
  data5.key = 'AdobeCampaign';
  data5.name = 'Adobe Campaign';
  data5.active = true;
  data5.description = 'This is a hint for users explaining what is this option for.';
  data5.pixelTemplate = 'AdobeCampaign';
  data5.trafficSource = 'IPM';
  data5.appendParameters = 'AdobeCampaign';

  const data6 = new Template();
  data6.key = 'GoogleDoubleClickManager';
  data6.name = 'Google DoubleClick Manager';
  data6.active = true;
  data6.description = 'This is a hint for users explaining what is this option for.';
  data6.pixelTemplate = 'GoogleDoubleClickManager';
  data6.trafficSource = 'Display';
  data6.appendParameters = 'GoogleDoubleClickManager';

  return Promise.all([repo.save(data1), repo.save(data2), repo.save(data3),
    repo.save(data4), repo.save(data5), repo.save(data6)]);
};
