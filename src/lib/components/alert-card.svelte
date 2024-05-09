<script lang="ts">
  import { alert } from "$lib/func/alert.js";
  import type { AlertType } from "../interfaces/IAlert.js";

  export let alertType: AlertType;
  export let alertId: string;
</script>

<button
  type="button"
  on:click={() => alert.remove(alertId)}
  class="shadow-lg rounded-lg p-4 w-full max-w-[440px] text-left"
>
  <slot />
</button>
