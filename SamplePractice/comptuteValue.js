var eval=function evalExpression(x1,x2){
    let res=[];
    let i=0;
    if(x1>x2){
        
        for(i=x2;i<x1;i++){
            res.push(i);
        }
        res.push(x1);
    }else{
        
        for(i=x1;i<x2;i++){
            res.push(i);
        }
        res.push(x2);
    }
    

    return res;
}
module.exports=eval;