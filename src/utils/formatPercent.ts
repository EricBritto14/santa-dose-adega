export default function formatPercent(percent : number | undefined | null) {
    if (percent === undefined || percent === null){
        return "0%";
    }

    let strpercent : string = percent.toString();

    if(strpercent.includes('.')){
        let splitpercent : string[] = strpercent.split('.');
         return `${splitpercent[0]},${splitpercent[1].padEnd(2, "0")}%`;
    }

    
    return `${percent}%`;
}