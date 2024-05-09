<script lang="ts">
  import type { IOptions } from "../interfaces/IOptions.js";

  import "../../app.css";
  import { alerts } from "$lib/stores/alerts.js";
  import AlertSuccess from "./alert-success.svelte";
  import AlertWarn from "./alert-warn.svelte";
  import AlertError from "./alert-error.svelte";
  import AlertInfo from "./alert-info.svelte";

  const defaultOptions: IOptions = {
    mode: "auto",
    error_icon: "bx bx-bug-alt",
    info_icon: "bx bx-info-circle",
    success_icon: "bx bx-check-circle",
    warn_icon: "bx bx-error",
  };
  export let options: IOptions;
</script>

<div class="flex flex-col gap-4 fixed bottom-5 right-5">
  {#each $alerts as alert}
    {#if alert.type === "success"}
      <div class="animated">
        <AlertSuccess
          icon={options?.success_icon || defaultOptions.success_icon}
          {alert}
        />
      </div>
    {/if}
    {#if alert.type === "warn"}
      <div class="animated">
        <AlertWarn
          icon={options?.warn_icon || defaultOptions.warn_icon}
          {alert}
        />
      </div>
    {/if}
    {#if alert.type === "error"}
      <div class="animated">
        <AlertError
          icon={options?.error_icon || defaultOptions.error_icon}
          {alert}
        />
      </div>
    {/if}
    {#if alert.type === "info"}
      <div class="animated">
        <AlertInfo
          icon={options?.info_icon || defaultOptions.info_icon}
          {alert}
        />
      </div>
    {/if}
  {/each}
</div>

<style>
  .animated {
    animation: show 0.5s;
  }

  @keyframes show {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
