import React from 'react';
import { 
    LineChart, 
    Line, 
    CartesianGrid, 
    ResponsiveContainer, 
    XAxis, 
    YAxis, 
    Tooltip 
} from 'recharts';

import CustomTooltip from '../Tooltip';
import { findMonth } from '@Utils/month.const';

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

const ChartLine = ({ data, title } : { data : any[], title : string }) => {
    return (
        <div id='chart-line-main-component'>
            <div id="chart-line-header-component">
                <h1>{title}</h1>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dataConst} margin={{ top: 15, right: 40, left: 0, bottom: 15 }}>
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
                                            <li>Produtos vendidos: {column.value}</li>
                                        </ul>
                                    </CustomTooltip>
                                )
                            }
                            return null;
                        }}
                    />
                    <Line type="monotone" dataKey="value" stroke="#e0b439" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartLine;