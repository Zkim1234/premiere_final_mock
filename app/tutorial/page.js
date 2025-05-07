"use client";
import { useState } from "react";
import SimpleChip from "@/ui/onboarding/buttons/Simple-chip";
import NextButton from "@/ui/onboarding/buttons/next-button";
import SkipButton from "@/ui/onboarding/buttons/Skip-button";
import styles from "@/app/tutorial/page.module.css";
import ProgressBar from "@/ui/onboarding/progress-bar/progress-bar";
import OptionButton from "@/ui/onboarding/buttons/Option-button";

export default function Tutorial() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(2);
  };

  return (
    <div className={styles.container + " " + styles.personalizationOne}>
      {/* Progress bar */}
      <div>
        <ProgressBar currentStep={currentStep} />
      </div>
      {currentStep === 1 ? (
        <div className={styles.content}>
          <h2>Select all categories you often shop</h2>
          {/* Chips for  'Select all categories you often shop'*/}
          <SimpleChip text="Hello" onClick={("text", false)} />
          <SimpleChip text="Hello" onClick={("hello", false)} />
          <SimpleChip text="Hello" onClick={("hello", false)} />
          <SimpleChip text="Hello" onClick={("hello", false)} />
        </div>
      ) : (
        <div className={styles.content + " " + styles.personalizationTwo}>
          <h2>Select all categories you often shop</h2>
          <div className="flex flex-col items-center">
            <OptionButton text="Hello" onClick={() => {}} />
            <OptionButton text="Hello" onClick={() => {}} />
            <OptionButton text="Hello" onClick={() => {}} />
            <OptionButton text="Hello" onClick={() => {}} />
          </div>
        </div>
      )}

      <div className="fixed bottom-8 left-0 right-0 px-4">
        <div className="max-w-[440px] mx-auto flex flex-col items-center gap-4">
          <NextButton onClick={handleNext} />
          <SkipButton onClick={handleNext} />
        </div>
      </div>
    </div>
  );
}
