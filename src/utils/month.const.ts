const months = [
    {
        month: "Janeiro",
        abbreviation: "Jan"
    },
    {
        month: "Fevereiro",
        abbreviation: "Fev"
    },
    {
        month: "Março",
        abbreviation: "Mar"
    },
    {
        month: "Abril",
        abbreviation: "Abr"
    },
    {
        month: "Maio",
        abbreviation: "Mai"
    },
    {
        month: "Junho",
        abbreviation: "Jun"
    },
    {
        month: "Julho",
        abbreviation: "Jul"
    },
    {
        month: "Agosto",
        abbreviation: "Ago"
    },
    {
        month: "Setembro",
        abbreviation: "Set"
    },
    {
        month: "Outubro",
        abbreviation: "Out"
    },
    {
        month: "Novembro",
        abbreviation: "Nov"
    },
    {
        month: "Dezembro",
        abbreviation: "Dez"
    },
]

export function findMonth(abbreviation : string) {
    const result = {...[...months].find(m => m.abbreviation === abbreviation)};

    return result.month;
}