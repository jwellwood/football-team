export interface IDonutGraphData {
  labels: string[];
  datasets: IDonutDataset[];
}

interface IDonutDataset {
  data: Array<string>;
  backgroundColor: string[];
  borderColor: string;
}
