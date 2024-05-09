<script lang="ts">
  import "../app.css";
  import { AlertProvider, alert } from "$lib/index.js";

  function showAlert() {
    // params[0] = "success" | "warn" | "error" | "info"
    // params[1] = Message
    // params[2] = Hidden time in ms
    // const alertId = alert.push("success", "Your username has been successfully activated!", 1500);
    const alertId = alert.push(
      "error",
      "Your username has been successfully activated!",
      4000
    );
  }
</script>

<AlertProvider options={{}} />

<div class="p-24">
  <button
    on:click={showAlert}
    class="bg-gray-500 text-black px-3 py-2 rounded-md"
  >
    Show Alert
  </button>
</div>
