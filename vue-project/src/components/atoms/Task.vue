<script setup lang="ts">
	import { useKanbanStore } from '@/stores/kanban'
	import { TODO, IN_PROGRESS, DONE } from '@/constants'
	const props = defineProps({
		task: Object 
	})
	const kanbanStore = useKanbanStore()
	const { updateTodo, updateInProgress, updateDone } = kanbanStore
	// function updateTask(status){
	// 	switch(status){
	// 		case TODO:
	// 			updateTodo({
	// 				name: 
	// 			})
	// 			break;
	// 		case IN_PROGRESS:
	// 			break;
	// 		case DONE:
	// 			break;
	// 	}
	// }
</script>
<template>
	<div class="d-flex border-black-1 space-between">
		<div>
			<label>{{task.name}}</label>
			<p>{{task.description}}</p>
		</div>
		<button>update</button>
	</div>
</template>