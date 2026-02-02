import ListingCard from "./ListingCard";

export default function ListingSection() {
  return (
    <div className="listing-grid">
      {Array.from({ length: 20 }).map((_, i) => (
        <ListingCard key={i} index={i} />
      ))}
    </div>
  );
}
