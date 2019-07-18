import React from 'react';
import { getTemplates, checkTemplateConflicts, getParameters } from './../../api/templates';
import { Template } from '../../../db/entity/template';
import { Title, TitleH2, TitleH3 } from './../../UIKit/Title';
import { Formik } from 'formik';
import { TrafficInfo, TemplateInfo } from '../../models/traffic';
import TemplateContext from './template-context';
import Traffic from './../../components/Traffic/Traffic';
import { Container, GridContainer } from '../../components/styled';
import ParameterBlock from '../../components/Parameter/Parameter';

interface ITraffic {
  traffics: TrafficInfo[];
  templateInfoMap: ITemplateInfoMap;
}

interface ITemplateInfoMap {
  [key: string]: TemplateInfo;
}

const initState = (templates: Template[]): ITraffic => {
  const templateInfo = createTemplateMap(templates);
  const traffics = groupByTraffic(templates);
  return {
    traffics,
    templateInfoMap: templateInfo,
  };
};

const createTemplateMap = (templates: Template[]): ITemplateInfoMap => {
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
  const [selectedTemplates, setSelectedTemplates] = React.useState<Template[]>([]);
  const [trafficData, setTraffic] = React.useState<ITraffic>({ traffics: [], templateInfoMap: {}});
  const {traffics, templateInfoMap} = trafficData;

  React.useEffect(() => {
    getTemplates().then((newTemplates) => {
      const newTrafficInfo = initState(newTemplates);
      setTraffic(newTrafficInfo);
    });
  }, []);

  const selectTemplate = (template) => {
    const { key } = template;
    const newTemplateInfoMap = {...templateInfoMap };

    getParameters(template).then((template: any) => {
      const newSelectedTemplates = [ template, ...selectedTemplates ];
      setSelectedTemplates(newSelectedTemplates);
    });

    checkTemplateConflicts(template).then((data: any) => {
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
  }
  
  const deselectTemplate = (template) => {
    const { key } = template;
    const newTemplateInfoMap = {...templateInfoMap };
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

    const newSelectedTemplates = selectedTemplates.filter((item) => item.key !== template.key);
    setSelectedTemplates(newSelectedTemplates);
  }

  const onValueChange = (checked: boolean, template: Template) => {
    if (checked) {
      selectTemplate(template);
    } else {
      deselectTemplate(template);
    }
  };

  return (
    <TemplateContext.Provider value={templateInfoMap}>
      <div>
        <Title>Tracking Code Generator</Title>
        <GridContainer>
          {traffics &&
            traffics.map((traffic) => (
              <Traffic
                key={traffic.title}
                onValueChange={onValueChange}
                traffic={traffic}
              />
            ))}
        </GridContainer>
        <Container>
          { selectedTemplates.length !== 0 &&
            <>
              <TitleH2>Parameters</TitleH2>
              {/* <Formik initialValues={{}} onSubmit={() => {}}> */}
              {
                selectedTemplates.map((template) => (
                  <React.Fragment key={template.key}>
                    <TitleH3>For "{template.name}" template</TitleH3>

                    {
                      template.templates2params.map((t2p) => (
                        <ParameterBlock
                          key={t2p.id}
                          templateKey={template.key}
                          parameter={t2p.parameter}/>
                      ))
                    }
                  </React.Fragment>
                )
                )}
              {/* </Formik> */}
            </>
          }
        </Container>
      </div>
    </TemplateContext.Provider>
  );
};

export default Creation;
