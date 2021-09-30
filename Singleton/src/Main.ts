import { Connection } from "./Connection"

export class Main
{
    public static main() : void
    {
        var conn = Connection.getInstance();
        conn.establishConnection();
    }
    
}