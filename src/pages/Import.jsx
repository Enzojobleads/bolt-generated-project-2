import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Papa from 'papaparse';

export default function Import() {
  const { register, handleSubmit } = useForm();
  const [fileData, setFileData] = useState(null);

  const onSubmit = async (data) => {
    const file = data.file[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setFileData(results.data);
      }
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Import CSV</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="file"
          {...register('file')}
          accept=".csv"
          className="mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </form>

      {fileData && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Preview</h2>
          <table className="w-full">
            <thead>
              <tr>
                {Object.keys(fileData[0]).map((header) => (
                  <th key={header} className="text-left p-2 bg-gray-100">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fileData.slice(0, 5).map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((value, j) => (
                    <td key={j} className="p-2 border-b">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
