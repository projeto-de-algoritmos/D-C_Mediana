const NumbersList = ({ numbers, setNumbers }) => {
  const deleteNumber = (index) => {
    const newArray = [...numbers];
    newArray.splice(index, 1);
    setNumbers(newArray);
  };

  return (
    <ul className="grid grid-cols-6 gap-4 max-h-[60%] overflow-auto p-5 scroll-m-1 scrollbar">
      {numbers &&
        numbers.map((number, index) => (
          <li
            className="border-2 p-2 text-center rounded cursor-pointer hover:bg-red-500"
            key={index}
            onClick={() => deleteNumber(index)}
          >
            {number}
          </li>
        ))}
    </ul>
  );
};

export default NumbersList;
