class LibraryListModel{
    constructor(name){
        this.libraryname = name;
        this.contributors = [];
        this.recipes = [];
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

    getRecipes(){
        return this.items;
    }
    setRecipes(iarray){
        if(Array.isArray(iarray)){
            this.items=iarray; //transformer ça avec l'objet item peut être
        }
    }
    addRecipes(item){
        //Vérifier que c'est bien un item
        this.items.push(item);
    }

    toString(){
        return this.name;
    }
}

export default LibraryListModel;