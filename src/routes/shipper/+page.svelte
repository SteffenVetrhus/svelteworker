<script lang="ts">
  import { updated } from "$app/stores";

  const checkforUpdate = () => {
    updated.subscribe((e) => console.log(e));
    updated.check();
  };
</script>

<h1>Shipper</h1>
<button on:click={() => checkforUpdate()}>Btn</button>
