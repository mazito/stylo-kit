{#if show && status}
  <Icon {...symbolProps} />
{/if}

<script>
  import { Icon, Box } from 'svelte-stylo';

  export let
    status = 'empty',
    show = true;

    let colored = {
    'empty': 'warning',
    'error': 'danger',
    'valid': 'success'
  }

  let sized = {
    'empty': 'xs',
    'error': 'sm',
    'valid': 'sm'
  }

  let symbolProps = {};

  $: if (status !== null) {

    symbolProps = {
      //position: "absolute", 
      //right: 0,
      //top: "2px",
      align: "center", 
      //pb: "xs",
      size: (sized[status] || "sm"),
      name: status, 
      color: (colored[status] || null)
    }
  }
</script>
