import ReactApexChart from "react-apexcharts"
import type { ApexOptions } from "apexcharts"
export default function Heatmap(){
    
    const series = [
        {
            name : 'Jan',
            data : Array(31).fill(-1)
        },
        {
            name : 'Feb',
            data : Array(31).fill(0)
        },
        {
            name : 'Mar',
            data : Array(31).fill(0)
        },
        {
            name : 'Apr',
            data : Array(31).fill(0)
        },
        {
            name : 'May',
            data : Array(31).fill(10)
        },
        {
            name : 'Jun',
            data : Array(31).fill(0)
        },
        {
            name : 'Jul',
            data : Array(31).fill(0)
        },
        {
            name : 'Aug',
            data : Array(31).fill(0)
        },
        {
            name : 'Sep',
            data : Array(31).fill(50)
        },
        {
            name : 'Oct',
            data : Array(31).fill(0)
        },
        {
            name : 'Nov',
            data : Array(31).fill(0)
        },
        {
            name : 'Dec',
            data : Array(31).fill(100)
        },
    ]
    
    const options : ApexOptions ={
        chart: {
            height: 350,
            type : "heatmap",
            zoom : {
                enabled : false
            },
            events :{
                dataPointSelection(e, chart, options) {
                    console.log("e :", e)
                    console.log("chart :", chart)
                    console.log("options :", options)
                },
            }
        }, 
        plotOptions: {
            heatmap: {
                distributed : true,
                shadeIntensity: 0.5,
                useFillColorAsStroke: false,
                colorScale: {
                    ranges: [
                        {
                            from: -1,
                            to: -1,
                            name: 'None',
                            color: '#000000',
                            
                        },
                        {
                            from: 0,
                            to: 0,
                            name: 'Doing',
                            color: "#FF0000"
                        },
                        {
                            from: 1,
                            to : 99,
                            name: 'In Progress',
                            color: '#FFB200'
                        },
                        {
                            from: 100,
                            to : 1000,
                            name: 'Done',
                            color: '#00A100'
                        }
                    ]
                }
            }
        },
        xaxis : {
            type : 'category',
            categories : Array.from({length : 31}, (_,i)=>i+1)
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: 'HeatMap Chart with Color Range'
        },
    }

    return(
        <div>
            <h1>Heatmap</h1>
            <ReactApexChart options={options} series={series} type='heatmap'/>
        </div>
    )
}
