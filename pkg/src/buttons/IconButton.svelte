{#if show}
  <button 
    on:click
    class="icon-button"
    style={ bcss && bcss.styled(vw) }
    >
    <Icon { ...iprops }/>
  </button>
{/if}

<style>
.icon-button {
  display: inline-block;
  box-sizing: border-box;
  margin:0;
  padding:0;
  background-color: transparent;
  border: none;
}
</style>

<svelte:window bind:innerWidth={vw} />

<script>
  import { Css } from 'svelte-stylo'
  import { Icon } from 'svelte-stylo'

  export let
    show = true;
    
  let 
    vw = 0,
    bcss,
    icss,
    iprops;

  bcss = Css($$props)
          .whitelist(['m','mr','ml','mt','mb'])

  icss = Css($$props)
          .blacklist(['m','mr','ml','mt','mb'])

  iprops = icss.props()

  $: { if (vw && $$props) 
    show = icss.visible(show, vw);
  }
</script>
