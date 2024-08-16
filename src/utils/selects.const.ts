export type TypeSelect = {
    value: string | number,
    label: string,
}

export const category_select : TypeSelect[] = [
    {
        value: 'Comida',
        label: 'Comida',
    },
    {
        value: 'Não alcoólicas',
        label: 'Não alcoólicas',
    },
    {
        value: 'Alcoólicas',
        label: 'Alcoólicas',
    },
    {
        value: 'Doces',
        label: 'Doces',
    },
]

export const unit_of_measure_select : TypeSelect[] = [
    {
        value: 'L',
        label: 'L',
    },
    {
        value: 'ml',
        label: 'ml',
    },
    {
        value: 'G',
        label: 'G',
    },
    {
        value: 'Kg',
        label: 'Kg',
    },
]