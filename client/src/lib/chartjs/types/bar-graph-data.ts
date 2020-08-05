export interface IBarGraphData {
  labels: string[];
  datasets: IBarGraphDataset[];
}

interface IBarGraphDataset {
  data: any[]; // TODO
  backgroundColor?: string[];
  borderWidth?: number;
}
