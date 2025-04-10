const mongodb=require("mongodb")

const MongoClient=mongodb.MongoClient;

require('dotenv').config()

const url=process.env.url;

let _db;

// initail data base 


const initDb=callback=>{
    if(_db){
        console.log("the DataBase is Already initialized ");
        return callback(null,_db)
    }
    MongoClient.connect(url).then(client=>{
        _db=client.db();
        callback(null,_db)
    })
}


const getDb=()=>{
    if(!_db){
        throw Error("DataBase is Not initialized")
    }
    return _db;
}

module.exports={initDb,getDb}