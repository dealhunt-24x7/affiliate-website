export function SpecsTable({ specs }: { specs: Record<string, string> }) {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border p-2 bg-gray-100 text-left">Specification</th>
          <th className="border p-2 bg-gray-100 text-left">Details</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(specs).map(([key, value]) => (
          <tr key={key}>
            <td className="border p-2 font-medium">{key}</td>
            <td className="border p-2">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
