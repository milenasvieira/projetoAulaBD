import { Request, Response } from "express";
import { getCustomerRepository } from "typeorm";
import { ClienteRepository } from "../repositories/ClienteRepository";

class ClienteController {
    async create(req: Request, res: Response) {
        const { cpfCnpj, nome } = req.body;
        var data = {cpfCnpj, nome};

        const repository = getCustomerRepository(ClienteRepository);
        data = await repository.save(data);

        return res.status(201).json({ data: data});
    }
}

export { ClienteController };