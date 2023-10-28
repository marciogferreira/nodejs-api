import mysql from 'mysql';

class Connection {
    constructor() {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'par'
        });
        this.result = [];
    }

    setResults(error, results, fields) {
        if (error) throw error;
        this.result = results;
        
    }

    query(sql, callback) {
        this.connection.connect();
        this.connection.query(sql, callback);
        this.connection.end();
    }

    getResult() {
        console.log(this.result);
        const res = this.result;
        this.result = []
        
        return res;
    }
}

const connection = new Connection();
export default connection;
