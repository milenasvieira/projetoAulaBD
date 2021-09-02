import { Request, Response } from "express";
import knex from '../database/connection';

export default {
    async create(req: Request, res: Response) {
        const { nome, cpf } = req.body;
        const data = { nome, cpf };
        await knex('tab_cadastro').insert(data);
        return res.status(201).json({ data: data });
    },
    async list(req: Request, res: Response) {
        var result = await knex('tab_cadastro').orderBy('nome');
        return res.status(200).json({ data: result });
    },
    async find(req: Request, res: Response) {
        const { id } = req.params;
        const user = await knex('tab_cadastro').where({ id });
        return res.status(200).json(user);
    },
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, cpf } = req.body;
        const data = { cpf, nome };
        await knex('tab_cadastro').update(data).where({ id });
        const cadastro = await knex('tab_cadastro').where({ id });
        return res.status(200).json({ data: cadastro });
    },
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        await knex('tab_cadastro').del().where({ id });
        return res.status(200).json({ message: "Registro excluído com sucesso!" });
    }
}