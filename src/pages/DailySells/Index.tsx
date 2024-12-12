import TableSales from "@Components/TableSales"
import Title from "@Components/Title"
import "./style.sass"

const DailySells = () =>{
    return(
        <div id="product-list-main">
            <div id="product-list-header">
                <Title
                title='Vendas Diárias'
                subTitle='Veja as vendas diárias/mensal da Adega Santa Dose'
                />

                <button>
                    oi
                </button>
            </div>
            
            <TableSales
                title="Vendas Diárias"
                dayColumnTitle="Dias"
                salesColumTitle="Valores Venda"
                totalLabel="Total Do Mês"
                daysInMonth={31}
            />
        </div>
    )
}

export default DailySells