import { Template } from '../../db/entity/template';

export class TemplateInfo {
  public template: Template;
  public selected: boolean;
  public disabled: boolean;
  public disabledWith: string[];
}

// tslint:disable-next-line: max-classes-per-file
export class TrafficInfo {
  public templates: Template[];
  public title: string;
}
