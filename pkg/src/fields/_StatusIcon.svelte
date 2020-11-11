{#if show && status}
  <Box>
    <Icon {...symbolProps} />
  </Box>
{/if}

<script>
  import { Icon, Box } from 'svelte-stylo';

  export let
    status = 'empty',
    show = true;

  let colored = {
    'empty': 'muted',
    'incomplete': 'muted',
    'error': 'danger',
    'valid': 'success'
  }

  let symbolProps = {};

  $: if (status !== null) {

    symbolProps = {
      //position: "absolute", 
      //right: 0,
      //top: "2px",
      align: "center", 
      pb: "xs",
      size: "nm",
      name: status, 
      color: (colored[status] || null)
    }
  }
</script>
