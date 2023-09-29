<script lang="ts">
  import { updated } from "$app/stores";
</script>

<a href="/admin">Admin</a>
<a href="/carrier">Carrier</a>
<a href="/shipper">Shipper</a>
<a href="/admin">Admin</a>

<div data-sveltekit-reload={$updated ? "" : "off"}>
  <slot />
</div>
