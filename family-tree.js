class FamilyTree {
  constructor (value){
    if(typeof value !== 'string' || value === 'undefined'){
      throw 'error';
    } else {
      this.value = value;
    }

    this.children = [];
  }
  
  insert(name){
    this.children.push(new FamilyTree(name));
  }

  familySize(){
    return this.children.length + 1;
  }

  findMember(name){
    if(this.children.includes(name)){
      console.log(true);
    } else {
      return 'undefined';
    }
  }

  log(name){
    
  }
}

module.exports = FamilyTree;
