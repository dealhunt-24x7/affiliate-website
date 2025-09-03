export function SpecsTable({ specs }: { specs: Record<string, string> }) {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border p-2">Specification</th>
          <th className="border p-2">Details</th>
        </tr
