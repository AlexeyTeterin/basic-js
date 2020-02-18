const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if (value==null) this.result.push("null");
    else this.result.push(value.toString());
    return this;
  },
  removeLink(position) {
    if (this.result[position-1]===undefined) {this.result=[]; throw new Error;}
    else this.result.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let finishString = "";
    for (let x of this.result) {
      finishString+='( '+x+' )~~';
    }
    this.result=[];
    return finishString.slice(0,finishString.length-2);;
  }
};

module.exports = chainMaker;
