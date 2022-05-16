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
    setContributors(carray){
        if(Array.isArray(carray)){
            this.contributors=carray;
        }
    }

    getItems(){
        return this.items;
    }
    setItems(iarray){
        if(Array.isArray(iarray)){
            this.items=iarray; //transformer ça avec l'objet item peut être
        }
    }
    addItem(item){
        //Vérifier que c'est bien un item
        this.items.push(item);
    }

    toString(){
        return this.name;
    }
}

export default GroceryListModel;