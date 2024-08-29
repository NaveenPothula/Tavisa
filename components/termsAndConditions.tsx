type TermsAndCondition = {
  content: string;
};

const TermsAndConditions = async () => {
  // Fetch data from the API
  const res = await fetch(
    "https://pulseayur-api.onrender.com/api/content/terms-and-conditions",
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  console.log(data);

  // Handle error or empty data scenarios
  if (!data || data.success !== true) {
    return (
      <div>
        <h1>Terms And Conditions</h1>
        <p>No Terms and conditions data available.</p>
      </div>
    );
  }

  const termsAndConditionsData = data.termsAndCondition.map((item: any) => ({
    content: item.termsAndContionContent,
  }));

  return (
    <div className="flex justify-center items-center min-h-auto mt-4">
      <div className="bg-white text-black rounded-lg max-w-6xl w-full">
        <h1 className="text-center text-3xl md:text-3xl font-bold mb-4">
          Terms and Conditions
        </h1>

        {termsAndConditionsData.map((item: TermsAndCondition, index: any) => (
          <div
            key={index}
            className="prose max-w-none text-gray-700 mb-8"
            dangerouslySetInnerHTML={{
              __html: item.content,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
