type PrivacyAndPolicy = {
  content: string;
};

const PrivacyAndPolicyPage = async () => {
  // Fetch data from the API
  const res = await fetch(
    " https://pulseayur-api.onrender.com/api/content/privacy-and-policy ",
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
        <h1>Privacy And Policy</h1>
        <p>No Privacy and Policy data available.</p>
      </div>
    );
  }

  const privacyAndPolicyData = data.privacyAndPolicy.map((item: any) => ({
    content: item.privacyAndPolicyContent,
  }));

  return (
    <div className="min-h-auto mt-4">
      <div className="bg-white text-black rounded-lg  w-full">
        <h1 className="text-center text-3xl md:text-3xl font-bold mb-4">
          Privacy And Policy
        </h1>

        {privacyAndPolicyData.map((item: PrivacyAndPolicy, index: any) => (
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

export default PrivacyAndPolicyPage;
