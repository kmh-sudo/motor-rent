export interface Motor {
name: string;
  brand: string;
  plate: string;
  type: string;
  monthlyRate: number;
  dailyRate: number;
  weeklyRate: number;
  description: string;
  status: string;
  image: {
    url: string;
    public_id: string;
  };
}