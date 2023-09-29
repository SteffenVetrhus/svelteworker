<script lang="ts">
  import { updated } from "$app/stores";
</script>

<a data-sveltekit-reload={$updated ? "" : "off"} href="/admin">Admin</a>
<a data-sveltekit-reload={$updated ? "" : "off"} href="/carrier">Carrier</a>
<a data-sveltekit-reload={$updated ? "" : "off"} href="/shipper">Shipper</a>
<a data-sveltekit-reload={$updated ? "" : "off"} href="/admin">Admin</a>

<slot />
