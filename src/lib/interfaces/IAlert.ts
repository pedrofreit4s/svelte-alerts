export type AlertType = "success" | "warn" | "error" | "info";

export interface IAlert {
  id: string;
  type: AlertType;
  message: string;
  hiddenTime: number;
}
