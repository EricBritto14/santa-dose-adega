export default function formatPrice(price : number | undefined | null) {
    if (price === undefined || price === null){
        return "R$ 0,00";
    }

    let strPrice : string = price.toString();

    if(strPrice.includes('.')){
        let splitPrice : string[] = strPrice.split('.');
         return `R$ ${splitPrice[0]},${splitPrice[1].padEnd(2, "0")}`;
    }

    
    return `R$ ${price},00`;
}