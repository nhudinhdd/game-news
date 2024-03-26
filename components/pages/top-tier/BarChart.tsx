import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChart(props: any) {
  const {dataList} = props
  const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 0,
        images: ["https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/season/22UCL.png", "https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/season/22UCL.png"]
      },
    ],
  };

  const options: any = {
    scales: {
      x: {
        ticks: {
            callback: ((value, index, values) => {
                return ""
            })
        }
      },
      y: {
          ticks: {
            beginAtZero: true,
          }
        },
    },
    barPercentage: 1.25,
    // layout: {
    //     padding: {
    //         bottom: 30
    //     }
    // }
  };

  const imageItems = {
    id: "imageItems",
    afterDatasetsDraw(chart, args, pluginOptions) {
        console.log(chart)
        const {ctx, data, chartArea: {bottom}, scales: {x}} = chart;
        ctx.save();
        data.datasets[0].images.forEach((image: string, index: number) => {
            const logo = new Image();
            logo.src = image;
            const width = 30;
            ctx.drawImage(logo, x.getPixelForValue(index) - (width / 2), x.top, width, width)
        })
    }
  }

  const plugins = [imageItems]

  return (
    <div>
      <h2>Bar Chart Example</h2>
      <Bar data={data} options={options} plugins={plugins} />
    </div>
  );
}
