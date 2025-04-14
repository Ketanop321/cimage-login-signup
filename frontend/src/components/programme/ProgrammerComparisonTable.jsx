const ProgrammeComparison = ({ programmes }) => {
    // If programmes is undefined or not provided, use an empty array as fallback
    const programmesList = programmes || [];
    
    return (
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Compare Our Programmes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our programmes compare and find the perfect match for your career goals
            </p>
          </div>
  
          <div className="overflow-x-auto">
            {programmesList.length > 0 ? (
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Programme</th>
                    <th className="py-4 px-6 text-left">Duration</th>
                    <th className="py-4 px-6 text-left">Level</th>
                    <th className="py-4 px-6 text-left">Field</th>
                    <th className="py-4 px-6 text-left">Career Paths</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {programmesList.map((prog) => (
                    <tr key={prog.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium">{prog.name}</td>
                      <td className="py-4 px-6">{prog.duration}</td>
                      <td className="py-4 px-6">{prog.level}</td>
                      <td className="py-4 px-6">
                        {prog.name.includes("BCA") || prog.name.includes("MCA") || prog.name.includes("B.Sc-IT") ? "Technology" :
                         prog.name.includes("BBA") || prog.name.includes("MBA") || prog.name.includes("PGDM") ? "Business" :
                         "Commerce"}
                      </td>
                      <td className="py-4 px-6">
                        {prog.careerPaths && prog.careerPaths.length > 0 ? 
                          `${prog.careerPaths.slice(0, 2).join(", ")}...` : 
                          "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center p-6 bg-white shadow rounded">
                No programmes available to compare
              </div>
            )}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProgrammeComparison;