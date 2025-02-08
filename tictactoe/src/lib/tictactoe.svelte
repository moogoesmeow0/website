<script lang="ts">
	let board: string[][] = [
		['', '', ''],
		['', '', ''],
		['', '', '']
	];
	let currentPlayer: string = 'X';
	let winner: string | null = null;

	function whoWon(){
		// Check rows
		for(let i = 0; i < 3; i++){
			if(board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]){
				winner = board[i][0];
				return;
			}
		}

		// Check columns
		for(let i = 0; i < 3; i++){
			if(board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]){
				winner = board[0][i];
				return;
			}
		}

		// Check diagonals
		if(board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]){
			winner = board[0][0];
			return;
		}
		if(board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]){
			winner = board[0][2];
			return;
		}

		// Check for tie
		let tie = true;
		for(let i = 0; i < 3; i++){
			for(let j = 0; j < 3; j++){
				if(board[i][j] === ''){
					tie = false;
					break;
				}
			}
		}
		if(tie){
			winner = 'T';
		}
	}

	function click(row:number, col:number){
		if(board[row][col] === '' && !winner){
			board[row][col] = currentPlayer;
			whoWon();
			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		}
	}

	function resetBoard(){
		board = [
			['', '', ''],
			['', '', ''],
			['', '', '']
		];
		winner = null;
		currentPlayer = 'X';
	}

	async function upload(){
		console.log("po");
		let resp = await fetch("https://taranathan.com/api/boards", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({board: board})
		});
		console.log(resp);
	}


</script>

<div class="grid grid-cols-3 gap-1 w-64 mx-auto my-5">
	{#each board as row, rowIndex}
		{#each row as cell, colIndex}
			<div class="flex items-center justify-center w-20 h-20 border border-black text-2xl cursor-pointer" role="button" tabindex="0" on:click={() => click(rowIndex, colIndex)} on:keydown={(e) => e.key === 'Enter' && click(rowIndex, colIndex)}>
				{cell}
			</div>
		{/each}
	{/each}
</div>

{#if winner}
	<div class="text-center mt-5 text-xl">Winner: {winner}</div>
{/if}

<button class="block mx-auto mt-5 py-2 px-4 bg-purple-300 hover:bg-red-200 text-white font-bold py-2 px-4 rounded" on:click={resetBoard}>Reset Game</button>
<button class="block mx-auto mt-5 py-2 px-4 bg-purple-300 hover:bg-red-200 text-white font-bold py-2 px-4 rounded" on:click={upload}>Upload</button>
