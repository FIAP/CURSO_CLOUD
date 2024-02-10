class MainModel {
    static getStockData() {
        // Dados fictícios da bolsa de valores para várias empresas
        const stockData = [
            {
                company: "Exemplo Corp",
                symbol: "EXMPL",
                price: 150.25,
                volume: 50000,
                date: new Date().toISOString()
            },
            {
                company: "Google Inc.",
                symbol: "GOOGL",
                price: 2700.50,
                volume: 100000,
                date: new Date().toISOString()
            },
            {
                company: "Microsoft Corp",
                symbol: "MSFT",
                price: 300.75,
                volume: 75000,
                date: new Date().toISOString()
            },
            {
                company: "Amazon.com Inc.",
                symbol: "AMZN",
                price: 3400.80,
                volume: 120000,
                date: new Date().toISOString()
            }
        ];

        return stockData;
    }
}

module.exports = MainModel;
