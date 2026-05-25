function RightBar() {
  return (
    <div className="order-2 md:order-3 ring-1 ring-gray-800 rounded-2xl p-4">
      <div className="flex gap-3">
        <h4>Sort by:</h4>
        <p className="font-semibold text-sm">Recommended</p>
      </div>
    </div>
  );
}

export default RightBar;