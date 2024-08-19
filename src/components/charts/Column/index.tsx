import React from 'react';
import { 
    BarChart, 
    Bar, 
    CartesianGrid, 
    ResponsiveContainer, 
    XAxis, 
    YAxis, 
    Tooltip 
} from 'recharts';

import CustomTooltip from '../Tooltip';
import { findMonth } from '@Utils/month.const';

import formatPrice from '@Utils/formatPrice';

import './style.sass';

const dataConst = [
    { month : "Jan", value : 200 },
    { month : "Fev", value : 50 },
    { month : "Mar", value : 150 },
    { month : "Abr", value : 75 },
    { month : "Mai", value : 250 },
    { month : "Jun", value : 50 },
    { month : "Jul", value : 200 },
    { month : "Ago", value : 180 },
    { month : "Set", value : 230 },
    { month : "Out", value : 160 },
    { month : "Nov", value : 200 },
    { month : "Dez", value : 80 },
]

const ChartColumn = ({ data, title } : { data : any[], title : string }) => {
    return (
        <div id='chart-bar-main-component'>
            <div id="chart-bar-header-component">
                <h1>{title}</h1>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dataConst} margin={{ top: 15, right: 40, left: 0, bottom: 15 }}>
                    <CartesianGrid horizontal vertical={false} stroke="#ccc" />
                    <XAxis dataKey="month" style={{ fontSize: "14px" }} />
                    <YAxis style={{ fontSize: "14px" }} axisLine={false} />
                    <Tooltip
                        content={({ active, payload }) => {
                            if (active && payload && payload.length > 0) {
                                const column = payload[0].payload;
                                return (
                                    <CustomTooltip>
                                        <h4>{`${findMonth(column.month)}`}</h4>
                                        <ul>
                                            <li>Valor: R$ {formatPrice(column.value)}</li>
                                        </ul>
                                    </CustomTooltip>
                                )
                            }
                            return null;
                        }}
                    />
                    <Bar type="monotone" dataKey="value" fill="#e0b439" barSize={18} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartColumn;