const {MongoClient}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
         return console.log('Conn Error');
    }
    console.log('Connected');
    db.collection('Todos').insertOne({
        text:"Work00",
        completed:false
    },(err,res)=>{
        if(err){
            return console.log('Insertion Error',err);
        }
        console.log(JSON.stringify(res.ops,undefined ,2))
    });
    db.close();
});