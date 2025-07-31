import SurveyForm from "../components/SurveyForm";

const SurveyPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400 p-6">
      <div className=" p-6 rounded-xl shadow-md w-full max-w-lg space-y-4">
        <h1 className="text-2xl font-bold">Roommate Preference Survey</h1>
        <p className="text-sm text-gray-500">
          Speak to the voice widget — your answers will appear below.
        </p>
        <SurveyForm />
      </div>
    </div>
  );
};

export default SurveyPage;
