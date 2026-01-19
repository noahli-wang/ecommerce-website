interface Props {
  index: number;
}

export default function ListingCard({ index }: Props) {
  return (
    <div className="listing-card">
      <span>Item {index + 1}</span>
    </div>
  );
}
