const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Conn Error');
    }
    // console.log('Connected');
    // db.collection('Todos').find({_id:new ObjectID('5a6e9bf8a4234629c432e712')}).toArray().then((docs)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log("CANT FETCH !!");
    // });

        db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos Count: ${count}`);

    },(err)=>{
        console.log("CANT FETCH !!");
    });
    //db.close();
});