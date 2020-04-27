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

      // Take 1 -- same output as below when console.log(), but not accepted
      // return this.children.forEach(function(index){
      //   if(index.value === name){
      //     console.log(index);
      //   }
      // });

      // Take 2 - this is accepted.. and will solve all test specs
      for (let i = 0; i < this.children.length; i++) {
        if (this.children[i].value === name) {
          return this.children[i];
        } 
      }       

      // Take 3 -- this was an accidental solve... this passes this test spec, but will cause log test spec to fail (Henry and Vivian will be Mike's children, not Amy's)
      // return function(arg){
      //   return arg;
      // }(...this.children);
  }

  log(){
      const parent = `-- ${this.value}`;
      if(this.children.length === 0){
        return parent;
      } else {
        let family = [parent];
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

// log(){
//   const parent = `-- ${this.value}`;
//   let family = [parent];
  
//   if(this.children.length === 0){
//     return parent;
//   } else {
//     return this.children.map(function(index){
//       family.push(`---- ${index.value}`);
//       if(index.children.length !== 0){
//         index.children.map(function(ind){
//           family.push(`------ ${ind.value}`);
//         });
//       }
//       console.log(family.join('\n'));
//       // console.log(`${parent} ` + `---- ${current.value} ` + `------ ${current.children} ` + `---- ${next.value} ` + `------ ${next.children} `);
//     });
//   }
// }


// log(){
//   const parent = `-- ${this.value}`;
//   if(this.children.length === 0){
//     return parent;
//   } else {
//     let family = [parent];
//     this.children.map(function(index){
//       family.push(`---- ${index.value}`);
//       return index.children.map(function(ind){
//         family.push(`------ ${ind.value}`);
//       });
//     });
//     return family.join('\n');
//   }
// }