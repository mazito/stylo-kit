<main>

  <Panel px="nm" py="md">
    <Heading h1 thin>Testing Stylo Kit components</Heading>
  </Panel>

  <Panel 
    flex="row" 
    items="start" 
    justify="start">

    <Panel border-right="3" w="18ch" px="xs" py="nm" align="left">

      <Heading xs px="nm" mb="nm">COMPONENTS</Heading>

      {#each demos as demo}
        <Panel 
          on:click={()=>{clicked(demo)}} 
          color="primary" 
          py="sm" px="nm" mb="sm"
          pointer hover>
          {demo.title}
          </Panel>
      {/each}

    </Panel>

    <Panel grow px="nm" nopy="nm">
      <svelte:component this={theDemo}/>
    </Panel>

  </Panel>

</main>

<script>
  import { Panel, Heading } from 'svelte-stylo'
  import { customizedTheme } from './customized-theme'
  import TextFieldDemo from './demos/TextFieldDemo.svelte'
  import NumberFieldDemo from './demos/NumberFieldDemo.svelte'

  customizedTheme();

  let demos = [
    { title: 'TextField', component: TextFieldDemo},
    { title: 'NumberField', component: NumberFieldDemo}
  ]

  let theDemo = demos[0].component;

  function clicked(demo) {
    theDemo = demo.component;
  }

</script>

<style>
	body {
		text-align: left;
		margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: normal;
    width: 100%;
	}
</style>