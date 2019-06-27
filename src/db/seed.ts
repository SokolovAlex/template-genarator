import "reflect-metadata";
import { createConnection } from 'typeorm';
import { User } from './entity/user';
import { Log, ActionType } from './entity/log';
import { Parameter, InputType } from "./entity/parameter";
import { ParameterValue } from './entity/parameterValue';
import { Template } from './entity/template';
import { Template2Parameter } from './entity/template2Parameter';

(async () => {
  const connection = await createConnection();
  const userRepo = await connection.getRepository(User);
  const logRepo = await connection.getRepository(Log);
  const paramRepo = await connection.getRepository(Parameter);
  const paramValueRepo = await connection.getRepository(ParameterValue);
  const templateRepo = await connection.getRepository(Template);
  const t2pRepo = await connection.getRepository(Template2Parameter);

  const newUser = new User();
  newUser.email = "sokolov@kl.com";
  newUser.lastEnterAt = new Date();

  const user = await userRepo.save(newUser);

  const newLog = new Log();
  newLog.url = "url";
  newLog.pixel = "pixel";
  newLog.action_type = ActionType.Create;
  newLog.user = user;

  await logRepo.save(newLog);

  const newValue1 = new ParameterValue();
  newValue1.key = "key1";
  newValue1.name = "name1";
  newValue1.added_user = user;

  const newValue2 = new ParameterValue();
  newValue2.key = "key2";
  newValue2.name = "name2";
  newValue2.added_user = user;

  const value1 = await paramValueRepo.save(newValue1);
  await paramValueRepo.save(newValue2);

  const newParam = new Parameter();
  newParam.key = "fake";
  newParam.name = "fake";
  newParam.omniture_name = "fake";
  newParam.user_supplied = "fake";
  newParam.input_type = InputType.Checkbox;
  newParam.default_value = value1;

  const param = await paramRepo.save(newParam);

  const newTemplate = new Template();
  newTemplate.key = "fakeTemplateKey";
  newTemplate.name = "fakeTemplateName";
  newTemplate.active = true;
  newTemplate.description = "description";
  newTemplate.pixelTemplate = "pixelTemplate";
  newTemplate.trafficSource = "trafficSource";
  newTemplate.appendParameters = "appendParameters";
  
  const template = await templateRepo.save(newTemplate);

  const newT2p = new Template2Parameter();
  newT2p.order = 1;
  newT2p.template = template;
  newT2p.parameter = param;
  
  t2pRepo.save(newT2p);
})();