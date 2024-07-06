export default function formatPrice(price : number) {
    let strPrice : string = price.toString();

    if(strPrice.includes('.')){
        let splitPrice : string[] = strPrice.split('.');
        return `R$ ${splitPrice[0]},${splitPrice[1]}`;
    }

    
    return `R$ ${price},00`;
}