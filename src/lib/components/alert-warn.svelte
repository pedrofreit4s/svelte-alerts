<script lang="ts">
  import type { IAlert } from "../interfaces/IAlert.js";
  import AlertCard from "./alert-card.svelte";

  export let alert: IAlert;
  export let icon: string | undefined;
</script>

<AlertCard alertId={alert.id} alertType={alert.type}>
  <div class="flex items-start gap-2">
    <div class="flex items-center justify-center w-10 h-10 rounded-full">
      <i class={`${icon} text-4xl text-yellow-600`}></i>
    </div>
    <div class="flex flex-col">
      <h1 class="text-lg font-semibold text-yellow-600">Ops!</h1>
      <p class="text-md text-gray-600">
        {alert.message}
      </p>
    </div>
  </div>
</AlertCard>
