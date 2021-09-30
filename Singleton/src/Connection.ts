export class Connection
{

    private static conn: Connection = null;

    private constructor() { }

    public static getInstance() : Connection
    {
        if(this.conn == null)
        {
            this.conn = new Connection();
        }
        return this.conn;
    }
    public establishConnection()
    {
        console.log('The connection was established');
    }
}