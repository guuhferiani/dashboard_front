// Dados de exemplo (vendas mensais)
var monthlySalesData = [2000, 1500, 3000, 2500, 1800, 3500];

// Labels para o eixo X (meses)
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

// Obter o elemento canvas e o contexto 2D
var ctx = document.getElementById('salesChart').getContext('2d');

// Criar o gráfico de barras
var salesChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: months,
    datasets: [{
      label: 'Vendas Mensais',
      data: monthlySalesData,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});