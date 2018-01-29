const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
    if (err) {
        return console.log('Conn Error');
    }

    db.collection('Todos').findOneAndUpdate({
        text:"Rashika"
    },{
        $set:{
            completed:true
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    },(err)=>{
        console.log("Couldn't Update");
    });
});