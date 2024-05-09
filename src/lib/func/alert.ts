import type { AlertType, IAlert } from "$lib/interfaces/IAlert.js";
import { alerts } from "$lib/stores/alerts.js";

function remove(id: string) {
  let allAlerts: IAlert[] = [];
  alerts.subscribe((v) => (allAlerts = v));

  let newAlerts = allAlerts.filter((al) => al.id !== id);
  alerts.set(newAlerts);
}

function push(type: AlertType, message: string, hiddenTime: number = 2500) {
  const id = crypto.randomUUID();
  const alert: IAlert = {
    id,
    type,
    message,
    hiddenTime,
  };

  let allAlerts: IAlert[] = [];
  alerts.subscribe((v) => (allAlerts = v));

  alerts.set([...allAlerts, alert]);

  setTimeout(() => {
    remove(id);
  }, hiddenTime);

  return id;
}

const alert = {
  push,
  remove,
};

export { alert };
