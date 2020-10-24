<Overlay 
  bind:show={anchor}
  modal={modal}
  centered={false}
  >
  {#if !!position && position=='right'}
    <Panel 
      bg="surface"
      shadow="md"
      fixed right=0 top=0 bottom=0 
      { ...props }
      >
      <slot></slot>
    </Panel>
  {/if}
  {#if !!position && position=='left'}
    <Panel 
      bg="surface"
      shadow="md"
      fixed left=0 top=0 bottom=0 
      { ...props }
      >
      <slot></slot>
    </Panel>
  {/if}

  <IconButton 
    on:click={()=> { anchor=false; }}
    name="close" xl
    pointer hover
    color="primary"
    round
    h=2.5 w=2.5
    absolute right=0.5 top=0.5/>

</Overlay>

<script>
  import { Overlay, Panel } from 'svelte-stylo'
  import IconButton from '../buttons/IconButton.svelte'

  export let
    anchor,
    modal = false,
    position = null ;

  let props = $$props;
</script>
