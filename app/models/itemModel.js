//Pour les produits des listes de courses

class itemModel{
    name="";
    quantity=0;
    bought=false;
    boughtBy="";
    boughtDate=null;
    constructor(name){
        this.name = name;
    }
}

export default itemModel;