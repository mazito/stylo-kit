{#if show}
  <Panel flex items="center" w="100%" pt="xs">

    {#if ((isError || isValid) && messages[status])}
      <Text xs color={colored[status]}>{messages[status]}</Text>
    {/if}

    {#if (!(isError || isValid) && hints)}
      <Text xs color="muted">{@html hints}</Text>
    {/if}

  </Panel>
{/if}

<script>
  import { Panel, Text } from 'svelte-stylo'

  export let 
    hints = '',
    messages = {},
    status = 'empty',
    show = true;

  let colored = {
    'empty': 'muted',
    'incomplete': 'warning',
    'error': 'danger',
    'valid': 'success'
  }

  let 
    hintsOn = true,
    isError = false,
    isValid = false;

  $: if (status !== null) {
    isError = (status === 'error');
    isValid = (status === 'valid');
    hintsOn = !isError && !isValid 
              && !messages[status] && !messages[status].length;
  }
</script>
