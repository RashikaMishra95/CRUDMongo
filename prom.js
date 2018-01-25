var addSync=(a,b)=>{
    return new Promise((res,rej)=>{
      setTimeout(()=>{
          if(typeof a ==='number' && typeof b === 'number')
              res(a+b);
          else
              rej("Invalid Types");
      },1500);
    })
}
addSync(10,5).then((res)=>{
    console.log("Result",res);
    return addSync(res,20);
}).then((res)=>{
    console.log("result should be 35",res)
}).catch((rej)=>{
    console.log(rej);
})