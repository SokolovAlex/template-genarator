import React from 'react';
import { getTemplates, checkTemplate } from './../../api/templates';
import { Template } from '../../../db/entity/template';
import { Title } from './../../UIKit/Title';
import { TrafficInfo, TemplateInfo } from '../../models/traffic';
import TemplateContext from './template-context';
import Traffic from './../../components/Traffic/Traffic';
import { Container } from '../../components/styled';

interface ITraffic {
  traffics: TrafficInfo[];
  templateInfoMap: ITemplateInfoMap;
}

interface ITemplateInfoMap {
  [key: string]: TemplateInfo;
}

const createTemplateInfo = (templates: Template[]): ITemplateInfoMap => {
  return templates.reduce((memo, template) => {
    const templateInfo = new TemplateInfo();
    templateInfo.template = template;
    templateInfo.selected = false;
    templateInfo.disabled = false;
    templateInfo.disabledWith = [];
    memo[template.key] = templateInfo;
    return memo;
  }, {});
};

const createTrafficData = (templates: Template[]): ITraffic => {
  const templateInfo = createTemplateInfo(templates);
  const traffics = groupByTraffic(templates);
  return {
    traffics,
    templateInfoMap: templateInfo,
  };
};

const groupByTraffic = (templates: Template[]): TrafficInfo[] => {
  const trafficsHash = templates.reduce((memo, template) => {
    if (!memo[template.trafficSource]) {
      memo[template.trafficSource] = [template];
    } else {
      memo[template.trafficSource].push(template);
    }
    return memo;
  }, {});

  return Object.keys(trafficsHash).map((key) => {
    const info = new TrafficInfo();
    info.title = key;
    info.templates = trafficsHash[key];
    return info;
  });
};

const Creation: React.FC = () => {
  const [trafficData, setTraffic] = React.useState<ITraffic>({ traffics: [], templateInfoMap: {}});
  const {traffics, templateInfoMap} = trafficData;

  React.useEffect(() => {
    getTemplates().then((newTemplates) => {
      const newTrafficInfo = createTrafficData(newTemplates);
      setTraffic(newTrafficInfo);
    });
  }, []);

  const onValueChange = (checked: boolean, template: Template) => {
    const { key } = template;
    const newTemplateInfoMap = {...templateInfoMap };

    if (checked) {
      checkTemplate(template).then((data: any) => {
        newTemplateInfoMap[key] = {
          ...templateInfoMap[key],
          selected: true,
          disabledWith: data.disabledTemplateKeys,
        };
        data.disabledTemplateKeys.forEach((disabledKey) => {
          newTemplateInfoMap[disabledKey].disabled = true;
        });
        setTraffic({
          ...trafficData,
          templateInfoMap: newTemplateInfoMap,
        });
      });
    } else {
      newTemplateInfoMap[key].disabledWith.forEach((disabledKey) => {
        newTemplateInfoMap[disabledKey].disabled = false;
      });
      newTemplateInfoMap[key] = {
        ...templateInfoMap[key],
        selected: false,
      };
      setTraffic({
        ...trafficData,
        templateInfoMap: newTemplateInfoMap,
      });
    }
  };

  return (
    <TemplateContext.Provider value={templateInfoMap}>
      <div>
        <Title>Tracking Code Generator</Title>
        <Container>
          {traffics &&
            traffics.map((traffic) => (
              <Traffic
                key={traffic.title}
                onValueChange={onValueChange}
                traffic={traffic}
              />
            ))}
        </Container>
      </div>
    </TemplateContext.Provider>
  );
};

export default Creation;
