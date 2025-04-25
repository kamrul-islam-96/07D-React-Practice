// Name List Render
const names = ['Arif', 'Rima', 'Joy', 'Nila'];
const NameList = () => {
  return (
    <div style={boxStyles}>
      <h2>Name List</h2>
      <ol>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
    </div>
  );
};






// Even Number Filter & Display
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const EvenNumbers = () => {
  const evenNum = numbers.filter(num => num % 2 === 0);
  return (
    <div style={boxStyles}>
      <h2>Even Numbers</h2>
      {evenNum.map((numbers, index) => (
        <ul>
          <li key={index}>{numbers}</li>
        </ul>
      ))}
    </div>
  )
}


const Day1 = () => {
  return (
    <div>
      <NameList />
      <EvenNumbers />
    </div>
  );
};

const boxStyles = {
  width: '200px',
  height: 'auto',
  padding: '16px',
  margin: '60px',
  boxShadow: '2px 2px 2px grey'
}

export default Day1;
