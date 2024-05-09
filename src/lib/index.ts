// Reexport your entry components here
import AlertProvider from "./components/alert-provider.svelte";
import AlertCard from "./components/alert-card.svelte";
import AlertSuccess from "./components/alert-success.svelte";
import AlertError from "./components/alert-error.svelte";
import AlertWarn from "./components/alert-warn.svelte";
import AlertInfo from "./components/alert-info.svelte";

import { alert } from "./func/alert.js";
import { alerts } from "./stores/alerts.js";

import type { IAlert } from "./interfaces/IAlert.js";
import type { IOptions } from "./interfaces/IOptions.js";
import type { AlertType } from "./interfaces/IAlert.js";

export {
  AlertProvider,
  AlertCard,
  AlertSuccess,
  AlertError,
  AlertWarn,
  AlertInfo,
  alert,
  alerts,
};

export type { IAlert, IOptions, AlertType };
