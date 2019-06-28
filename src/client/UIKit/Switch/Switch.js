import { WithLabel } from './WithLabel/WithLabel';
import { Selector } from './Selector/Selector';
import { SwitchSize } from './constants';
import { PureSwitch } from './PureSwitch/PureSwitch';

const Switch = WithLabel;
Switch.Selector = Selector;
Switch.Pure = PureSwitch;
Switch.Size = SwitchSize;
export default Switch;
