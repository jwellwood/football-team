import { Color } from '@material-ui/lab/Alert';

export interface IAlert {
  open: boolean;
  text: string;
  type: Color;
}
