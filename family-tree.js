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
    if(this.children !== 'undefined'){
      return this.children.length + 1;
    } else {
      return 1;
    }
  }

  findMember(name){

    //  Take 1 - Initially failed the test spec, because the forEach method is returning inside the method. 
    //  Learned not to return 'index" inside the method, but instead reassign a variable with the value of 'index'.
      let person = '';
      this.children.forEach(function(index){
        if(index.value === name){
          person = index;
        }
      });
      return person;

    //  Take 2 - This is accepted as is, and will solve all test specs. 
    //  But learned not to return inside a for loop. 
    //  for (let i = 0; i < this.children.length; i++) {
    //    if (this.children[i].value === name) {
    //      return this.children[i];
    //    } 
    //   } 

    //  Take 3 - This passes this test spec, but will cause log test spec to fail 
    //  (Henry and Vivian will be Mike's children, not Amy's). This is because it's a spread operator, not a method to loop through arrays.
    //  return function(arg){
    //    return arg;
    //  }(...this.children);
  }

  log(){
      const parent = `-- ${this.value}`;
      let family = [parent];
      if(this.children.length === 0){
        return parent;
      } else {
        this.children.map(function(index){
          family.push(`---- ${index.value}`);
          return index.children.map(function(ind){
            family.push(`------ ${ind.value}`);
          });
        });
        return family.join('\n');
      }
    }
}

module.exports = FamilyTree;