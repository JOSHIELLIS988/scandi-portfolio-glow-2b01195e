interface Result {
  value: string;
  label: string;
}

interface ResultsProps {
  results: Result[];
  isVisible: boolean;
}

const Results = ({ results, isVisible }: ResultsProps) => {
  return (
    <div
      className={`opacity-0 transition-opacity duration-500 ease-out ${
        isVisible ? 'opacity-100' : ''
      }`}
    >
      <span className="text-xs font-medium text-white uppercase tracking-wider mb-1 block">
        Results
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        {results.map((result, i) => (
          <div key={i} className="glass p-6 sm:p-8 rounded-2xl text-center sm:text-left">
            <h3 className="text-5xl sm:text-6xl font-bold mb-2 tracking-tight">{result.value}</h3>
            <p className="text-sm sm:text-base text-muted-foreground font-medium">{result.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;