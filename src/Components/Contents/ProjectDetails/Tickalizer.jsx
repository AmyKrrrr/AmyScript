export default function Tickalizer() {
  return (
    <>
      <p>
        <span className="purple">Tickalizer</span> is a Python-based stock market analytics tool focused on discovering historical price trends and market seasonality. 
      </p>
      <p>
        It analyzes up to 10 years of historical stock data using <span className="purple">Python, Pandas, and yfinance</span>, allowing users to study how stocks have historically performed during different periods.
      </p>
      <p>
        The application calculates important performance metrics such as Average Return, Win Rate, and Total Profit/Loss, and uses interactive <span className="purple">Plotly heatmaps</span> to visualize recurring seasonal patterns. 
      </p>
      <p>
        This makes it easier to explore historical market behavior and compare performance across different time periods.
      </p>
    </>
  );
}