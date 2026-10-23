import { UserTable } from "./user.table";

export default interface Database {
    users: UserTable;
}
