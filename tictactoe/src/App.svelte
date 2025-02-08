<script lang="ts">
	import Button from './lib/button.svelte'
	import Tictactoe from './lib/tictactoe.svelte';
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Offside&display=swap');
</style>

<div class="flex justify-center items-center mt-10">
    <p class="object-center font-[Offside] text-3xl font-semibold">Have Fun!</p>
</div>

<Tictactoe/>

<div class="flex justify-stretch justify-items-stretch">
	<div class="absolute right-14 bottom-15 size-16">
		<Button/>
	</div>
</div>
