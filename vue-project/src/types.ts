export interface ITask{
	id: number,
	name: string,
	status: "TODO" | "IN_PROGRESS" | "DONE",
	description?: string
}