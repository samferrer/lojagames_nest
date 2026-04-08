import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";
import { ILike, Repository } from "typeorm";
import { Categoria } from "../categoria/entities/categoria.entity";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private readonly produtoRepository: Repository<Produto>,

        @InjectRepository(Categoria)
        private readonly categoriaRepository: Repository<Categoria>,
    ){}

    async create(produto: Produto): Promise<Produto> {
        const categoria = await this.categoriaRepository.findOne({
            where: { id: produto.categoria.id },
        });

        if (!categoria) {
            throw new NotFoundException(`Categoria com ID ${produto.categoria.id} não encontrada`);
        }

        return await this.produtoRepository.save(produto);
    }

    async findAll(): Promise<Produto[]> {
        return await this.produtoRepository.find({
            relations: {
                categoria: true,
            },    
        });
    }

    async findById(id: number): Promise<Produto> {
        const produto = await this.produtoRepository.findOne({
            where: { id },
            relations: {
                categoria: true,
            },
        });

        if (!produto) {
            throw new NotFoundException(`Produto com ID ${id} não encontrado`);
        }

        return produto;
    }

    async findByNome(nome: string): Promise<Produto[]> {
        return await this.produtoRepository.find({
            where: {
                nome: ILike(`%${nome}%`),
            },
            relations: {
                categoria: true,
            },
        });
    }
    
    async update(produto: Produto): Promise<Produto> {
        await this.findById(produto.id);
       
        const categoria = await this.categoriaRepository.findOne({
            where: { id: produto.categoria.id },
        });

        if (!categoria) {
            throw new NotFoundException(`Categoria com ID ${produto.categoria.id} não encontrada`);
        }

        return await this.produtoRepository.save(produto);
    }

    async delete(id: number): Promise<void> {
        await this.findById(id);
        await this.produtoRepository.delete(id);
    }

}    