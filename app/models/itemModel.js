//Pour les produits des listes de courses

class ItemModel{
    name="";
    quantityIntial=0;
    quantityLeft=0;
    bought=false;
    boughtBy="";
    boughtDate=null;
    constructor(name){
        this.name = name;
    }
    initializeQuantity(q){
        this.quantityIntial=q;
        this.quantityLeft=q;
    }
}

export default ItemModel;