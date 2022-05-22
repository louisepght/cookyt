//Pour les produits des listes de courses

class ItemModel{
    name="";
    quantity=0;
    bought=false;
    boughtBy="";
    boughtDate=null;
    constructor(name){
        this.name = name;
    }
}

export default ItemModel;