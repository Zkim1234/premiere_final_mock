import styles from "@/app/globals.css";
import SimpleChip from "@/ui/onboarding/buttons/Simple-chip";

export default function Tutorial() {
  return (
    <div>
      <div>
        <h2>
          Select all categories you often shop
        </h2>
        {/* Chips for  'Select all categories you often shop'*/}
        <SimpleChip text="Hello" onClick={("text", false)} />
        <SimpleChip text="Hello" onClick={("hello", false)} />
        <SimpleChip text="Hello" onClick={("hello", false)} />
        <SimpleChip text="Hello" onClick={("hello", false)} />
      </div>
    </div>
  );
}
