export interface ILineGraphData {
  labels: string[] | number[];
  datasets: ILineGraphDataset[];
}

interface ILineGraphDataset {
  label: string;
  data: number[];
  fill?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
}
