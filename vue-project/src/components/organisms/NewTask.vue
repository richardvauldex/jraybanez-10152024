<script setup lang="ts">
	import { TODO, IN_PROGRESS, DONE } from '@/constants' 
	import { useKanbanStore } from '@/stores/kanban'
	import { ref } from 'vue'
	const selectRef = ref(TODO)
	const nameRef = ref('')
	const descriptionRef = ref('')
	const kanbanStore = useKanbanStore()
	const { 
		getTodo, 
		addTodo, 
		getInProgress,
		addInProgress,
		getDone, 
		addDone 
	} = kanbanStore
	function addTask(){
		switch(selectRef.value){
			case TODO:
				addTodo({
					id: getTodo().length,
					name: nameRef.value,
					status: selectRef.value,
					description: descriptionRef.value
				})
				break;
			case IN_PROGRESS:
				addInProgress({
					id: getInProgress().length,
					name: nameRef.value,
					status: selectRef.value,
					description: descriptionRef.value
				})
				break;
			case DONE:
				addDone({
					id: getDone().length,
					name: nameRef.value,
					status: selectRef.value,
					description: descriptionRef.value
				})
				break;
		}
	}
</script>
<template>
	<h1>New Task</h1>
	<label>name:</label>
	<input v-model="nameRef" required maxlength=250>
	<label>status:</label>
	<select v-model="selectRef" required>
		<option>TODO</option>
		<option>IN_PROGRESS</option>
		<option>DONE</option>
	</select>
	<label>description:</label>
	<input v-model="descriptionRef" maxlength=1000>
	<button @click="addTask">ADD</button>
</template>