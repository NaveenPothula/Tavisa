import Symptoms from "@/components/symptoms";
import SymptomsDescription from "@/components/symptomsDescription";
import SymptomsFlex from "@/components/symptomsFlex";
import AssessmentButton from "@/components/AssessmentButton";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
      <Symptoms />
      <SymptomsDescription />
      <SymptomsFlex />
      <AssessmentButton />
      <FAQ />
    </>
  );
}
