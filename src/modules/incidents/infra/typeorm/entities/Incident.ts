import {
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    Entity,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Card } from "../../../../cards/infra/typeorm/entities/Card";

@Entity("incidents")
class Incident {
    @PrimaryColumn()
    id?: string;

    @ManyToOne(() => Card)
    @JoinColumn({ name: "card_id" })
    card: Card;

    @Column()
    card_id: string;

    @Column()
    value: string;

    @Column()
    place_name: string;

    @Column()
    street: string;

    @Column()
    neighborhood: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column()
    is_online: boolean;

    @Column()
    service_name: string;

    @Column()
    note: string;

    @Column()
    time: Date;

    @Column()
    date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    qrcode: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Incident };
