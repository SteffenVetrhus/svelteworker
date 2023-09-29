<script lang="ts">
  import { updated } from "$app/stores";

  const checkforUpdate = () => {
    updated.subscribe((e) => console.log(e));
    updated.check();
  };

  const reloadApp = () => {
    if (location) {
      location.reload();
    }
  };
</script>

<h1>Shipper</h1>
<button on:click={() => checkforUpdate()}>Check for updates</button>
<button on:click={() => reloadApp()}>Update</button>
<h1>Du har en update klar?</h1>
<h1>{$updated}</h1>
