// var getUser=(id,callback)=> {
//     var user={
//         id:id,
//         name:'XYZ'
//     };
//     callback(user);
// };
// debugger;
// getUser(10,(userData)=>{
//     console.log(userData);
// })
var p1=new Promise((res,err)=>{
   // res('Working');
    setTimeout(()=>{
        err('Couldnt');
    },3000);
});
p1.then((msg)=>{
    console.log("Successfully",msg);
},(err)=>{
    console.log('Error :',err)
})