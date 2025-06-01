export interface Agent {
  id: string;
  name: string;
  description: string;
  monitor: (wallet: string) => number;
}
