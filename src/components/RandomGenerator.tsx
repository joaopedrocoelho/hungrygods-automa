interface RandomGeneratorProps {
  onGenerate: () => void;
  result: string;
}

export function RandomGenerator({ onGenerate, result }: RandomGeneratorProps) {
  return (
    <details className="bg-white rounded-lg shadow-md my-5 p-5">
      <summary className="cursor-pointer text-2xl font-bold text-gray-700 p-2.5 hover:text-green-500">
        Random Direction and Steps
      </summary>
      <div className="p-5 border-t border-gray-200 mt-2.5">
        <button
          onClick={onGenerate}
          className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-lg"
        >
          Generate Random
        </button>
        <div className="text-3xl mt-5 p-2.5 border border-gray-200 rounded min-h-[50px]">
          {result}
        </div>
      </div>
    </details>
  );
}
