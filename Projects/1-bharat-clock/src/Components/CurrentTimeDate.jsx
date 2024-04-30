function CurrentTimeDate() {
  let now = new Date();
  return (
    <div className="timedate">
      <p>Current Time: {now.toLocaleTimeString()}</p>
      <p>Current Date: {now.toLocaleDateString()}</p>
    </div>
  );
}
export default CurrentTimeDate;
