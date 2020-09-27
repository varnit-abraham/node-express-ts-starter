import { User } from "../models/user.model";

let instance: ApiService;

export class ApiService {
    constructor() {
        console.info(`ApiService Initialized`);
    }

    static getInstance() {
        if (!instance) {
            instance = new ApiService();
        }
        return instance;
    }

    async getData(): Promise<User> {
        // Just a sample async/await (replace with any Database service call)
        return await Promise.resolve({
            firstName: `John`,
            lastName: `Doe`,
            userId: `john.doe`
        });
    }
}
