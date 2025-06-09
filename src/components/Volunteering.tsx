export default function Volunteering() {
  const volunteeringExperiences = [
    {
      id: 1,
      role: "Restaurant Manager",
      organization: "Project Armonia",
      description:
        "Manager of a social restaurant for vulnerable people living in the refugee camp of Samos, Greece",
      responsibilities: [
        "Coordination of a team of 50 volunteers",
        "Management of team schedules and stocks",
        "Provide 700 – 800 daily meals for the most vulnerable refugees from the camp",
      ],
    },
    {
      id: 2,
      role: "Logistics Manager",
      organization: "Still I Rise NGO",
      description:
        "Logistics Manager of a non-formal school to provide education for unaccompanied minors living in the refugee camp of Samos, Greece",
      responsibilities: [
        "Purchasing and management of all goods and supplies",
        "Inventory management",
        "Coordination of distributions including FI and NFI",
        "Communicating with donors, handling all donations and grant agreements",
        "Keep track of rents and utilities of the school and associated buildings",
        "Create P&L monthly reports according to the budget",
      ],
    },
  ];
  return (
    <div className="max-w-4xl min-h-screen mx-auto p-6 space-y-8 -my-16 pt-32">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">
        Involved with Human Rights
      </h2>

      <div className="space-y-8">
        {volunteeringExperiences.map((experience) => (
          <div key={experience.id}>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {experience.role}
              </h3>
              <p className="text-gray-600 font-medium">
                {experience.organization}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {experience.description}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Key Responsibilities:
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>• {responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
