<script lang="ts">
	import { sound, useSound } from "svelte-sound";
	import boing_mp3 from "../assets/boing.mp3"


	let count = $state(0);
	const click_sound = useSound(boing_mp3,["click"]);

	function increment(){
		count += Math.floor(Math.random() * 8); ;
	}
</script>

<button onclick={increment} use:click_sound class="bg-purple-300 hover:bg-red-200 text-white font-bold py-2 px-4 rounded">
	clicky here for {count} num
</button>