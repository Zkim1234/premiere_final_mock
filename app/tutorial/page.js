"use client";
import { useState } from "react";
import SimpleChip from "@/ui/onboarding/buttons/Simple-chip";
import NextButton from "@/ui/onboarding/buttons/next-button";
import SkipButton from "@/ui/onboarding/buttons/Skip-button";
import styles from "@/app/tutorial/page.module.css";
import ProgressBar from "@/ui/onboarding/progress-bar/progress-bar";
import OptionButton from "@/ui/onboarding/buttons/Option-button";
import YesNoButton from "@/ui/onboarding/buttons/Yes-No-button";

export default function Tutorial() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedNotification, setSelectedNotification] = useState("Yes");

  const handleNext = (skip = false) => {
    if (currentStep === 0 && skip) {
      setCurrentStep(6);
    } else if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleNotificationSelect = (text) => {
    setSelectedNotification(text);
  };

  return (
    <div className={styles.container + " " + styles.personalizationOne}>
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
          {currentStep === 6 ? (
            <>
              <NextButton text="Try Tutorial" onClick={handleNext} />
              <SkipButton onClick={handleNext} />
            </>
          ) : (
            <>
              {currentStep >= 0 && currentStep <= 5 && (
                <NextButton onClick={handleNext} text="Next" />
              )}
              {currentStep === 6 && (
                <NextButton onClick={handleNext} text="Try Tutorial" />
              )}
              {currentStep >= 0 && currentStep < 5 && (
                <SkipButton onClick={() => handleNext(true)} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
