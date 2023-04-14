function MyButton() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  function handleItemClick(id) {
    alert(`항목 ${id}가 클릭 되었습니다.`);
  }
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => handleItemClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MyButton;
