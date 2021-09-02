import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import { Endereco } from "./Endereco";

@Entity('tab_cliente')
export class Cliente extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'cpf_cnpj'})
    cpfCnpf: string;

    @Column()
    nome: string;

    @Column()
    ativo: boolean;

    @OneToOne(() => Endereco, { cascade: true, eager: true })
    @JoinColumn({ name: 'cd_endereco'})
    endereco: Endereco;

    @CreateDateColumn({ name: 'dt_inclusao' })
    dataInclusao:Date;

    @UpdateDateColumn({ name: 'dt_alteracao' })
    dataAlteracao:Date;


}