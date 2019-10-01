const projectDashboardAppDB = {
  widgets: {
    widgetCryptoUsd: {
      rows: []
    },
    widgetBudgetAllocation: {
      title: "Budget Details",
      table: {
        columns: [{
            id: "cryptocurrency",
            title: "Cryptocurrency"
          },
          {
            id: "balance",
            title: "Balance"
          },
          {
            id: "usdBalance",
            title: "Balance($)"
          }
        ],
        rows: []
      }
    },
    widgetPie: {
      title: "Crypto Allocation",
      mainChart: {
        labels: [],
        datasets: {
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: ["#f45a4d", "#ffd341", "#90EE90"]
        }
      }
    },
    widgetCryptoPrices: [],
    widgetLine: {
      title: "Crypto Allocation",
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      mainChart: [{
          label: "DON",
          borderColor: "red",
          pointHoverBackgroundColor: "red",
          pointHoverBorderColor: "red",
          data: [65, 59, 80, 81, 56, 55, 340]
        },
        {
          label: "BTC",
          borderColor: "orange",
          pointHoverBackgroundColor: "orange",
          pointHoverBorderColor: "orange",
          data: [15, 159, 80, 81, 56, 255, 40]
        },
        {
          label: "ETH",
          borderColor: "green",
          pointHoverBackgroundColor: "green",
          pointHoverBorderColor: "green",
          data: [65, 31, 80, 1, 56, 45, 140]
        }
      ],
      options: {
        fill: false,
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        legend: {
          display: true,
          position: "bottom",
          labels: {
            padding: 16,
            usePointStyle: true,
            fontColor: "white"
          }
        }
      }
    }
  },
  projects: [{
      id: 1,
      name: "ACME Corp. Backend App"
    },
    {
      id: 2,
      name: "ACME Corp. Frontend App"
    },
    {
      id: 3,
      name: "Creapond"
    },
    {
      id: 4,
      name: "Withinpixels"
    }
  ]
};

module.exports = projectDashboardAppDB;