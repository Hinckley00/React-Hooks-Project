function Filter({ titleFilter, setTitleFilter, rateFilter, setRateFilter }) {
  return (
    <div style={{ justifyContent: "flex-end", gap: "10px", display: "flex"}}>
      <input
        type="text"
        placeholder="Search by title"
        value={titleFilter}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        value={rateFilter}
        onChange={(e) => onRatingChange(e.target.value)}
      />
    </div>
  );
}

export default Filter;
