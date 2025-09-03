type Props = { specs: Record<string, string> };

export function SpecsTable({ specs }: Props) {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border p-2">Specification</th>
          <th className="border p-2">Details</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(specs).map(([key, value]) => (
          <tr key={key}>
            <td className="border p-2">{key}</td>
            <td className="border p-2">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
