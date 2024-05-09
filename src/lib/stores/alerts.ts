import type { IAlert } from "$lib/interfaces/IAlert.js";
import { writable } from "svelte/store";

const alerts = writable<IAlert[]>([]);

export { alerts };
