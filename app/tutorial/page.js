"use client";
import { useState } from "react";
import Image from "next/image";
import SimpleChip from "@/ui/onboarding/buttons/Simple-chip";
import NextButton from "@/ui/onboarding/buttons/next-button";
import SkipButton from "@/ui/onboarding/buttons/Skip-button";
import styles from "@/app/tutorial/page.module.css";
import ProgressBar from "@/ui/onboarding/progress-bar/progress-bar";
import OptionButton from "@/ui/onboarding/buttons/Option-button";
import YesNoButton from "@/ui/onboarding/buttons/Yes-No-button";
import SmallBlueButton from "@/ui/onboarding/buttons/Small-blue-button";
import SmallWhiteButton from "@/ui/onboarding/buttons/Small-white-button";

export default function Tutorial() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedNotification, setSelectedNotification] = useState("Yes");
  const [isTutorial, setIsTutorial] = useState(false);
  const [tutorialStep, setTutorialStep] = useState(0);

  const handleNext = (skip = false) => {
    if (currentStep === 6 && skip) {
      setIsTutorial(true);
      setTutorialStep(0);
    } else if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 5) {
      setCurrentStep(6);
    }
  };

  const handleTutorialNext = () => {
    if (tutorialStep < 2) {
      setTutorialStep(tutorialStep + 1);
    }
  };

  const handleStartTutorial = () => {
    setIsTutorial(true);
    setTutorialStep(0);
  };

  const handleBackTutorial = () => {
    if (tutorialStep > 0) {
      setTutorialStep(tutorialStep - 1);
    }
  };

  const handleNotificationSelect = (text) => {
    setSelectedNotification(text);
  };

  // Tutorial button
  const tutorialButton = () => {
    return (
      <div className={styles.nextButtonContainer}>
        <div className="max-w-[440px] mx-auto flex flex-col items-center gap-4">
          {tutorialStep < 2 ? (
            <div className="flex flex-row w-full">
              {tutorialStep === 1 ? (
                <div className="flex flex-row justify-between w-full">
                  <SmallWhiteButton onClick={handleBackTutorial} text="Back" />
                  <SmallBlueButton onClick={handleTutorialNext} text="Next" />
                </div>
              ) : (
                <div className="flex flex-row justify-end w-full">
                  <SmallBlueButton onClick={handleTutorialNext} text="Next" />
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-row justify-between w-full">
              <SmallWhiteButton onClick={handleBackTutorial} text="Back" />
              <SmallBlueButton
                /*onClick={() => router.push("/home")}*/ text="Done"
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  // Tutorials
  if (isTutorial) {
    return (
      <div
        className={`${styles.container} ${
          tutorialStep === 0
            ? "bg-[#556A8D]"
            : tutorialStep === 1
            ? "bg-[#CBEEC5]"
            : "bg-[#5D94AA]"
        }`}
      >
        {tutorialStep < 2 && (
          <button //skip button
            onClick={() => setTutorialStep(2)}
            className="absolute top-4 right-6 text-white font-medium underline text-[20px]"
          >
            Skip
          </button>
        )}
        {tutorialStep === 0 && (
          <div className={styles.tutorialContainer}>
            <Image
              src="/onboarding/tutorial00.svg"
              alt="Find events and discounts"
              width={100}
              height={100}
              className={styles.tutorialImage}
              priority
            />
            <div className={styles.tutorialInstruction}>
              <h2>Step 1: Find your events and discounts</h2>
              <p>Search for your next game plan and deals.</p>
              {tutorialButton()}
            </div>
          </div>
        )}
        {tutorialStep === 1 && (
          <div className={styles.tutorialContainer}>
            <Image
              src="/onboarding/tutorial01.svg"
              alt="Save events and discounts"
              width={100}
              height={100}
              className={styles.tutorialImage}
              priority
            />
            <div className={styles.tutorialInstruction}>
              <h2>Step 2: Save it and use anytime</h2>
              <p>Save your events and discount in Premiere.</p>
              {tutorialButton()}
            </div>
          </div>
        )}
        {tutorialStep === 2 && (
          <div className={styles.tutorialContainer}>
            <Image
              src="/onboarding/tutorial02.svg"
              alt="Receive notifications"
              width={100}
              height={100}
              className={styles.tutorialImage}
              priority
            />
            <div className={styles.tutorialInstruction}>
              <h2>Step 3: Stay on the loop and start saving!</h2>
              <p>
                We'll keep you in touch for events and deals happening in
                Vancouver.
              </p>
              {tutorialButton()}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Main page
  return (
    <div className={styles.container}>
      {/* Progress bar */}
      <div>
        <ProgressBar currentStep={currentStep} />
      </div>
      {currentStep === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1>Find the Best Deal!</h1>
          <p>
            Personalize your shopping experience! Answer a few questions, and
            get the best deals and discounts for you!
          </p>
        </div>
      ) : currentStep === 1 ? (
        <div className={styles.content}>
          <h2>Select all categories you often shop</h2>
          <div className={styles.chips}>
            {/* Chips for  'Select all categories you often shop'*/}
            <SimpleChip
              text="Beauty & Personal Care"
              onClick={("Beauty & Personal Care", false)}
            />
            <SimpleChip text="Electronics" onClick={("Electronics", false)} />
            <SimpleChip text="Pharmacy" onClick={("Pharmacy", false)} />
            <SimpleChip
              text="Convenient Store"
              onClick={("Convenient Store", false)}
            />
            <SimpleChip text="Drugstore" onClick={("Drugstore", false)} />
            <SimpleChip text="Outlet" onClick={("Outlet", false)} />
            <SimpleChip text="Foot Wear" onClick={("Foot Wear", false)} />
            <SimpleChip text="Automobiles" onClick={("Groceries", false)} />
            <SimpleChip text="Books" onClick={("Books", false)} />
            <SimpleChip
              text="Home & Kitchen"
              onClick={("Home & Kitchen", false)}
            />
            <SimpleChip text="Toy & Game" onClick={("Toy & Game", false)} />
            <SimpleChip text="Sports" onClick={("Sports", false)} />
            <SimpleChip
              text="Clothing and Accessories"
              onClick={("Clothing and Accessories", false)}
            />
          </div>
        </div>
      ) : currentStep === 2 ? (
        <div className={styles.content + " " + styles.personalizationTwo}>
          <h2>What kind of discounts do you usually look for?</h2>
          <div className="flex flex-col items-center">
            <OptionButton
              text="Percentage off (e.g., 20%off)"
              onClick={() => {}}
            />
            <OptionButton text="Free Shipping" onClick={() => {}} />
            <OptionButton text="Buy one, get one free" onClick={() => {}} />
            <OptionButton text="Cashback or rewards" onClick={() => {}} />
            <OptionButton text="Other" onClick={() => {}} />
          </div>
        </div>
      ) : currentStep === 3 ? (
        <div className={styles.content}>
          <h2>Select all categories you often attend event</h2>
          <div className={styles.chips}>
            {/* Chips for  'Select all categories you often attend event'*/}
            <SimpleChip
              text="Conferences and Seminars"
              onClick={("Conferences and Seminars", false)}
            />
            <SimpleChip text="Parties" onClick={("Parties", false)} />
            <SimpleChip text="Art Gallery" onClick={("Art Gallery", false)} />
            <SimpleChip
              text="Music Concerts"
              onClick={("Music Concerts", false)}
            />
            <SimpleChip
              text="Festivals (food, arts, cultural)"
              onClick={("Festivals (food, arts, cultural)", false)}
            />
            <SimpleChip
              text="Sports Events"
              onClick={("Sports Events", false)}
            />
            <SimpleChip
              text="Theater & Performing Arts"
              onClick={("Theater & Performing Arts", false)}
            />
          </div>
        </div>
      ) : currentStep === 4 ? (
        <div className={styles.content}>
          <h2>Do you usually attend events alone or with friends/family?</h2>
          <div className="flex flex-col items-center">
            <OptionButton text="Alone" onClick={() => {}} />
            <OptionButton text="With friends" onClick={() => {}} />
            <OptionButton text="With family" onClick={() => {}} />
            <OptionButton text="Depends on the event" onClick={() => {}} />
          </div>
        </div>
      ) : currentStep === 5 ? (
        <div className={styles.content}>
          <h2>Would you like to receive notifications for new deals?</h2>
          <div className="flex flex-col items-center">
            <YesNoButton
              text="Yes"
              isSelected={selectedNotification === "Yes"}
              onClick={() => handleNotificationSelect("Yes")}
            />
            <YesNoButton
              text="No"
              isSelected={selectedNotification === "No"}
              onClick={() => handleNotificationSelect("No")}
            />
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1>Successful!</h1>
          <p>
            Check out all the upcoming events and receive the notification of
            the best deals!
          </p>
        </div>
      )}

      <div className={styles.nextButtonContainer}>
        <div className="max-w-[440px] mx-auto flex flex-col items-center gap-4">
          {currentStep >= 0 && currentStep <= 5 && (
            <NextButton onClick={handleNext} text="Next" />
          )}
          {currentStep === 6 && (
            <NextButton onClick={handleStartTutorial} text="Try Tutorial" />
          )}
          {currentStep >= 1 && currentStep < 5 && (
            <SkipButton onClick={() => handleNext(true)} />
          )}
        </div>
      </div>
    </div>
  );
}
