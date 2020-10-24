
<Popover 
  bind:anchor={anchor}
  position={position}
  x={x} y={y}
  >
  <Panel 
    maxw=17 py=0
    shadow="xxl" border="3" rounded=0.25 
    bg="surface"
    { ...props }
    >
    <slot></slot>
  </Panel>
</Popover>

<script>
  /*
  */ 
  import { Panel, Popover } from  'svelte-stylo'

  export let 
    anchor, // don't initialize this, it will be set by Trigger
    position = 'left', // or 'right'
    x = null, y = null; // for absolute positioning

  export let
    // FIX: es necesario que cada menu tenga un ID propio 
    // para que no genere conflictos con otros menues cuando 
    // las props 'anchor' y 'position' son exactamente iguales 
    // en mas de un menu. Aparentemente Svelte se confunde !!!
    id = 'id'+parseInt(1 + Math.floor((6001 - 1) * Math.random()));

  console.log("Menu", id, anchor, position)

  let props = $$props;
</script>
