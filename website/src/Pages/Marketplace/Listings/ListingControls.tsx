import ControlsRow from "./ControlsRow";
import ListingSection from "./ListingSection";
import "./listings.css";

export default function ListingsControl() {
  return (
    <section className="listings-control">
      <ControlsRow />
      <ListingSection />
    </section>
  );
}
