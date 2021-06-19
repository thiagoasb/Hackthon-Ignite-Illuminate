import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateIncident1623870063426 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "incidents",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "card_id",
                        type: "uuid",
                    },
                    {
                        name: "value",
                        type: "numeric",
                    },
                    {
                        name: "place_name",
                        type: "varchar",
                    },
                    {
                        name: "street",
                        type: "varchar",
                    },
                    {
                        name: "neighborhood",
                        type: "varchar",
                    },
                    {
                        name: "city",
                        type: "varchar",
                    },
                    {
                        name: "state",
                        type: "varchar",
                    },
                    {
                        name: "country",
                        type: "varchar",
                    },
                    {
                        name: "is_online",
                        type: "boolean",
                    },
                    {
                        name: "service_name",
                        type: "varchar",
                    },
                    {
                        name: "note",
                        type: "varchar",
                    },
                    {
                        name: "date",
                        type: "timestamp",
                    },
                    {
                        name: "time",
                        type: "timestamp",
                    },
                    {
                        name: "qrcode",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKCardIncident",
                        referencedTableName: "cards",
                        referencedColumnNames: ["id"],
                        columnNames: ["card_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("incidents");
    }
}
