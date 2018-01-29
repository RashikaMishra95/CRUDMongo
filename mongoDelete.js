const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Conn Error');
    }

// deleteOne***
//     db.collection('Todos').deleteOne({text:"Work00"}).then((res)=>{
//         console.log("Deleted");
//     },(err)=>{
//         console.log("Error");
//     })
//deleteMany***
// db.collection('Todos').deleteMany({text:"Work3"}).then((res)=>{
//     console.log("Deleted");
// },(err)=>{
//     console.log("Error");
// })
//findOneAndDelete***

    db.collection('Todos').findOneAndDelete({text:"Work2"}).then((docs)=>{
        console.log(docs);
    },(err)=>{
        console.log("Not Deleted");
    })
});