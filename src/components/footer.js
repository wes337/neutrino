import Link from "next/link";
import { TbMenu2 } from "react-icons/tb";

export default function Footer() {
  return (
    <div className="font-sans bg-teal-900 text-white p-5 md:p-8 text-center md:text-left">
      <div className="relative flex flex-col md:flex-row gap-8 md:max-w-[2000px] md:mx-auto">
        <div className="font-medium text-6xl md:text-8xl">Neutrino</div>
        <div className="font-light md:absolute md:bottom-0 md:right-0">
          © 2025 Neutrino
        </div>
        <div>
          <div className="flex flex-col gap-8 text-xs font-light md:max-w-2xl">
            <p className="border border-white p-4">
              * These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure or prevent any disease.
            </p>
            <p>
              Information on the Neutrino site is provided for informational
              purposes only. It is not meant to substitute for medical advice
              from your physician or other medical professional. You should not
              use the information contained herein for diagnosing or treating a
              health problem or disease, or prescribing any medication.
              Carefully read all product documentation. If you have or suspect
              that you have a medical problem, promptly contact your regular
              health care provider.
            </p>
            <p>** Offer valid for first time subscribers only.</p>
            <p>Actual Packaging May Vary</p>
            <ul className="flex flex-col gap-1 text-left list-decimal px-5">
              <li className="pl-2">
                In a triple-blind, randomized, placebo-controlled
                parallel-designed clinical trial evaluating nutrient biomarkers
                and microbiome shifts in 105 healthy adults ages 20-59 over the
                course of 12 weeks.
              </li>
              <li className="pl-2">
                In a double-blind, randomized, placebo-controlled 2-week
                crossover clinical trial assessing nutrient gaps and microbiome
                shifts in 20 active adults ages 19-37.
              </li>
              <li className="pl-2">
                In a double-blind, randomized, placebo-controlled 2-week
                crossover clinical trial assessing nutrient gaps and microbiome
                assessments of 24 healthy adults with occasional GI distress
                ages 26-59 over the course of 4 weeks.
              </li>
              <li className="pl-2">
                In a double-blind, randomized, placebo-controlled crossover
                clinical trial assessing nutrient gaps and bioavailability in 16
                healthy adults ages 18-42 over the course of 8 hours.
              </li>
              <li className="pl-2">
                In a third-party, single-arm, closed label interventional study
                of 104 healthy adults ages 25-59 assessing self-perceived
                efficacy of Neutrino Next Gen over 3 months.
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row mt-8 gap-4 text-sm">
            <Link className="hover:text-green-300" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-green-300" href="/terms">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
