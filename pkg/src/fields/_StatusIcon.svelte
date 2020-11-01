{#if show && status && symbols[status]}
<Label sm bold {...symbolProps}>
  {@html symbols[status].content}
</Label>
{/if}

<script>
  import { Label, Input, Text, Textarea, Panel } from 'svelte-stylo';

  export let
    status = 'empty',
    show = true;

  let symbols = {
    'empty': { color: 'muted', content: ''},
    'incomplete': { color: 'muted', content: ''},
    'error': { color: 'danger', content:  '!'},
    'valid': { color: 'success', content:  '&check;'}
  }

  let symbolProps = {};

  $: if (status !== null) {

    symbolProps = {
      //position: "absolute", 
      //right: 0,
      //top: "2px",
      w: "2ch", 
      align: "center", 
      pb: "xs",
      bg: "surface", 
      color: (symbols[status] ? symbols[status].color : null)
    }
  }
</script>
