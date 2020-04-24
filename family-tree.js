class FamilyTree {
  constructor (value){
    if(typeof value !== 'string'){
      throw 'error';
    } else {
      this.value = value;
    }

    this.children = [];
  }
  
  insert(name){
    this.children.push(name);
    return this.children;
  }

  familySize(){
    return this.children.length + 1;
  }

  findMember(name){
    if(this.value.includes(name)){
      return this.children;
    } else {
      return 'undefined';
    }
  }

  log(){

  }
}

module.exports = FamilyTree;
