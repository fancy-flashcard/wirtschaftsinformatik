<script>
  import { fade, draw, fly } from "svelte/transition";
  import { quintOut, cubicOut } from "svelte/easing";
  import { onMount } from "svelte";

  const inner = "M45.41,108.86A21.81,21.81,0,0,1,22,100.18,20.2,20.2,0,0,1,18.53,84.9a19,19,0,0,1,.65-2.57l.52-1.58,1.41,1a35.32,35.32,0,0,0,10.75,5.37l1,.31-.1,1a6.2,6.2,0,0,0,1.11,4.08A6.57,6.57,0,0,0,41,95.19a6,6,0,0,0,1.68-.74L70.11,76.94a5.76,5.76,0,0,0,2.59-3.83,6.09,6.09,0,0,0-1-4.6,6.58,6.58,0,0,0-7.06-2.62,6.21,6.21,0,0,0-1.69.74L52.43,73.31a19.88,19.88,0,0,1-5.58,2.45,21.82,21.82,0,0,1-23.43-8.68A20.2,20.2,0,0,1,20,51.8a19,19,0,0,1,8.56-12.7L56,21.59a19.88,19.88,0,0,1,5.58-2.45A21.81,21.81,0,0,1,85,27.82,20.2,20.2,0,0,1,88.47,43.1a19,19,0,0,1-.65,2.57l-.52,1.58-1.41-1a35.32,35.32,0,0,0-10.75-5.37l-1-.31.1-1a6.2,6.2,0,0,0-1.11-4.08,6.57,6.57,0,0,0-7.06-2.62,6,6,0,0,0-1.68.74L36.89,51.06a5.71,5.71,0,0,0-2.58,3.83,6,6,0,0,0,1,4.6,6.58,6.58,0,0,0,7.06,2.62,6.21,6.21,0,0,0,1.69-.74l10.48-6.68a19.88,19.88,0,0,1,5.58-2.45,21.82,21.82,0,0,1,23.43,8.68A20.2,20.2,0,0,1,87,76.2a19,19,0,0,1-8.56,12.7L51,106.41a19.88,19.88,0,0,1-5.58,2.45";

  const outer = "M65,34 L37,52 A1 1 0 0 0 44 60 L70.5,44.5 A1 1 0 0 0 65,34Z M64,67 L36,85 A1 1 0 0 0 42 94 L68,77.5 A1 1 0 0 0 64,67Z";

  function expand(node, params) {
    const { delay = 0, duration = 400, easing = cubicOut } = params;

    const w = parseFloat(getComputedStyle(node).strokeWidth);

    return {
      delay,
      duration,
      easing,
      css: (t) => `opacity: ${t}; stroke-width: ${t * w}`,
    };
  }

  let visible = false;

  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 800);

    setTimeout(() => {
      visible = false;
    }, 4800);
  });
</script>

{#if visible}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 124">
  <g out:fade={{ duration: 200 }} opacity="0.5">
    <path
      in:expand={{ duration: 400, delay: 1000, easing: quintOut }}
      style="stroke: #ff3e00; fill: #ff3e00; stroke-width: 50;"
      d={outer}
    />
    <path
      in:draw={{ duration: 1000 }}
      style="stroke:#ff3e00; stroke-width: 1.5"
      d={inner}
    />
  </g>
</svg>

<div class="centered" out:fly={{ y: -20, duration: 800 }}>
  {#each "SNEL" as char, i}
    <span in:fade={{ delay: 1000 + i * 150, duration: 800 }}>{char}</span>
  {/each}
</div>
{/if}

<link
  href="https://fonts.googleapis.com/css?family=Overpass:100,400"
  rel="stylesheet"
  />

<style>
  svg {
    width: 100%;
    height: 100%;
  }

  path {
    fill: white;
    opacity: 1;
  }

  .centered {
    font-size: 20vw;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: "Overpass";
    letter-spacing: 0.12em;
    color: #4b4b5a;
    font-weight: 400;
  }

  .centered span {
    will-change: filter;
  }
</style>
