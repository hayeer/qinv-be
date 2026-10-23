import { ColumnType, GeneratedAlways } from "kysely";

export interface UserTable {
    id: string;
    username: string;
    password: string;
    fullname: string;
    created_at: GeneratedAlways<Date>;
    updated_at: ColumnType<Date, null, Date>;
}
