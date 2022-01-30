import React, {useEffect, useState} from "react";
import {Area, AreaChart, ResponsiveContainer, YAxis} from "recharts";
import {css} from "@emotion/css";
import {AREA_CHART_COLOR, CHART_LINE_COLOR} from "../../config/ColorSheet";
import {convertCurrency, getStartOfScale} from "../../util/ConverterUtil";


export interface LineChartData {
    time: string;
    amount: number | undefined;
}

export interface LineChartProps {
    cryptoKey: string
    selectedCurrency: string
    showYAxis: boolean;
    showXAxis: boolean;
    scale: string ;
}

const CARD_STYLE = css`
background-color:#fff;
border:1px solid #f5f5f5;
&:hover {
        cursor:pointer !important;
      }
`

interface PriceInfo {
    price: number
    timestamp: number
    volume24h: number
}

function createData(time: string, amount: number | undefined) {
    return {time, amount};
}

export function CardLineChart(props: LineChartProps) {
    const [priceInfo, setPriceInfo] = useState<PriceInfo[]>([])
    useEffect(() => {
        const getChartData = async () => {
            const response = await fetch(`https://api.blockchain.info/price/index-series?base=${props.cryptoKey}&quote=USD&start=${getStartOfScale(props.scale)}&scale=${props.scale}&cors=false`)
            const json: PriceInfo[] = await response.json()
            setPriceInfo(json)
        }
        getChartData()

    }, [props.selectedCurrency,props.scale])


    function findSmallest(data: LineChartData[]): number {
        if (data === undefined || data.length <= 0)
            return 0
        let small = data[0].amount
        data.forEach(it => {
            if (it.amount !== undefined && small !== undefined && it.amount < small)
                small = it.amount
        })
        return small ?? 0

    }

    function findBiggest(data: LineChartData[]): number {
        if (data === undefined || data.length <= 0)
            return 0
        let big = data[0].amount
        data.forEach(it => {
            if (it.amount !== undefined && big !== undefined && it.amount > big)
                big = it.amount
        })
        return big ?? 0

    }


    const data = priceInfo.map(info => createData(new Date(info.timestamp).toString(), convertCurrency(info.price, props.selectedCurrency)))
    const lowest = findSmallest(data);
    const highest = findBiggest(data);
    const yAxis = props.showYAxis ? (<YAxis hide domain={[Math.round(lowest), Math.round(highest)]} stroke={"#fff"}>
    </YAxis>) : (<div/>)
    // const xAxis = props.showXAxis ? (  <XAxis hide dataKey="timestamp"  tickFormatter={timeStr => moment(timeStr).format('DD/MM').toString()}  stroke={"#efefef"}>
    // </XAxis>): (<div/>)
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                data={data}
                className={CARD_STYLE}
            >)
                {yAxis}
                {/*{xAxis}*/}
                <Area
                    stroke={CHART_LINE_COLOR}
                    fill={AREA_CHART_COLOR}
                    type="monotone"
                    dataKey="amount"
                />
            </AreaChart>
        </ResponsiveContainer>)
}
