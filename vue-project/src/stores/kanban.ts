import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ITask } from '@/types' 

export const useKanbanStore = defineStore('kanban', () => {
 	const todoRef = ref([])
 	const inProgressRef = ref([])
 	const doneRef = ref([])

 	function getTodo(){
 		return todoRef.value
 	}
 	function addTodo(task: ITask){
 		todoRef.value.push(task)
 	}
 	function updateTodo(task: ITask){
 		todoRef.value.forEach(todo => {
 			if(todo.id === task.id){
 				todo.name = task.name
 				todo.status = task.status
 				todo.description = task.description
 			}
 		})
 	}

 	function getInProgress(){
 		return inProgressRef.value
 	}
 	function addInProgress(task: ITask){
 		inProgressRef.value.push(task)
 	}
 	function updateInProgress(task: ITask){
 		inProgressRef.value.forEach(inProgress => {
 			if(inProgress.id === task.id){
 				inProgress.name = task.name
 				inProgress.status = task.status
 				inProgress.description = task.description
 			}
 		})
 	}

 	function getDone(){
 		return doneRef.value
 	}
 	function addDone(task: ITask){
 		doneRef.value.push(task)
 	}
 	function updateDone(task: ITask){
 		doneRef.value.forEach(done => {
 			if(done.id === task.id){
 				done.name = task.name
 				done.status = task.status
 				done.description = task.description
 			}
 		})
 	}


 	return { 
 		todoRef, 
 		inProgressRef, 
 		doneRef,
 		getTodo,
 		addTodo,
 		updateTodo,
 		getInProgress,
 		addInProgress,
 		updateInProgress,
 		getDone,
 		addDone,
 		updateDone
 	}

})
