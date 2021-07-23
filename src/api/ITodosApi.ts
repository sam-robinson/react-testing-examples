export interface IServiceResponse<T> {
	result: T;
	isSuccessful: boolean;
	error?: string;
}

export interface ITodoDto {
	text: string;
	completed: boolean;
}

export interface ITodosApi {
	getTodos(): Promise<IServiceResponse<ITodoDto[]>>;
}
