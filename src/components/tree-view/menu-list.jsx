// components/tree-view/menu-list.jsx
import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  return (
    <div className="menu-list-container">
      {
        <ul style={{listStyle: "none"}}>
          {list && list.length
            ? list.map((listItem, index) => (
                <MenuItem key={index} item={listItem} />
              ))
            : null}
        </ul>
      }
    </div>
  );
}
