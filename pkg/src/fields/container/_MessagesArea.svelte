{#if show}
  <Panel flex items="center" nw="100%" pt="xs">

    {#if status==='empty' && hints}
      <Text xs color="muted">{@html hints}</Text>
    {/if}

    {#if (isError && errors.length)}
      <Text xs color={colored['error']}>
        {#each errors as err}
          {messages['errors'][err]} &nbsp;
        {/each}
      </Text>
    {/if}

    {#if (isValid && messages['valid'])}
      <Text xs color={colored['valid']}>{messages['valid']}</Text>
    {/if}
    
  </Panel>
{/if}

<script>
  import { Panel, Text } from 'svelte-stylo'

  export let 
    hints = '',
    errors = [],
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
    // hintsOn = !isError && !isValid 
    //           && !messages[status] && !messages[status].length;
  }
</script>
