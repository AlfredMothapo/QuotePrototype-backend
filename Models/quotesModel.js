export class QuotesModel {

    static getAllQuotes(dbCon)
    {
        return new Promise((resolve,reject)=>{
            dbCon.getConnection((error,connection)=>{
                if(error) 
                {
                    console.log("Unable to connect to dbpool")
                    connection.release()
                    return reject(error);
                };
                connection.query("Call getAllQuotes",(err,rows)=>{
                    resolve(rows[0]);
                    connection.release()
                })
            })
        }) 
    }
}