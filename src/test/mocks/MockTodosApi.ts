import { IServiceResponse, ITodoDto, ITodosApi } from "api";

export class MockTodosApi implements ITodosApi {
	constructor(minTimeout: number = 1000, maxTimeout: number = 2000) {
		this.minTimeout = minTimeout;
		this.maxTimeout = maxTimeout;
	}

	minTimeout: number;
	maxTimeout: number;

	private getTimeout() {
		return this.minTimeout + (this.maxTimeout - this.minTimeout) * Math.random();
	}

	getTodos(): Promise<IServiceResponse<ITodoDto[]>> {
		return new Promise((resolve: (result: IServiceResponse<ITodoDto[]>) => void) => {
			setTimeout(() => {
				resolve({
					result: this.generateTodos(),
					isSuccessful: true,
				});
			}, this.getTimeout());
		});
	}

	private generateTodos() {
		return [
			{
				text: "Take SAFe Certification Exam",
				completed: false,
			},
			{
				text: "Finish Aglearn courses",
				completed: false,
			},
		];
	}
}
