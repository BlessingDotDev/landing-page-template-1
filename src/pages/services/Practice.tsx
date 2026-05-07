function Practice() {
  return (
    <>
    <div className="my-50 flex justify-between gap-12">
      <div className="bg-blue-500">
        Logo
      </div>

      <div className="bg-pink-500 flex-1 flexcenter">
        <input type="text" placeholder="Enter Name and your surname"
        className="bg-red-500 w-full shrink min-w-0 max-w-[500px]"
        />
      </div>

      <div className="bg-blue-500">
        icon
      </div>
    </div>
    </>
  );
}

export default Practice;