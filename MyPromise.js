function MyPromise(func){
  //the func will accept two parameters
  this.func = func
}
MyPromise.prototype.then = function (resolve) {
   this.resolve = resolve
   this.execute()
   this.thenPromise = new MyPromise();
   return this.thenPromise
};
MyPromise.prototype.execute = function(){
  let scopeObj = this
  function MyResolve(val){
      //incase of varaible number of arguments we can
      //handler using arguments keyword in function or ... operator whih is introduced in the
      //es6
      scopeObj.PleaseResolve(val)
  }
  function MyReject(err){
    scopeObj.PleaseReject(err)
  }
  if(this.func){
    this.func(MyResolve, MyReject)
  }
}
MyPromise.prototype.catch = function(reject){
  this.reject = reject
  this.execute()
  this.thenPromise = new MyPromise();
  return this.thenPromise
}
MyPromise.prototype.PleaseResolve = function(val){
  if( typeof this.resolve == 'function'){
     let prom = this.resolve(val)
     if(! (prom instanceof MyPromise)){
       return
     }
     this.thenPromise.func = prom.func
     this.thenPromise.execute()
  }else{
    this.thenPromise.pleaseResolve(val)
  }
}
MyPromise.prototype.PleaseReject = function(err){
  if(typeof this.reject == 'function'){
     let prom = this.reject(err);
     if(! (prom instanceof MyPromise)){
       return
     }
     this.thenPromise.func = prom.func
     this.thenPromise.execute()
  }else{
    this.thenPromise.PleaseReject(err);
  }
}
