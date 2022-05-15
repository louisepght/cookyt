class GroceryListModel{
    constructor(name){
        this.name = name;
        this.contributors = [];
        this.items = [];
    }

    getName(){
        return this.name;
    }
    setName(n){
        this.name = n;
    }
    getContributors(){
        return this.contributors;
    }
    addContributor(c){
        this.contributors.push(c);
    }

    toString(){
        return this.name;
    }
}

export default GroceryListModel;