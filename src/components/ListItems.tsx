import Item from "./Item";

export interface ICartItem {
  id: number;
  description: string;
}
const ListItem = ({ items }: { items: ICartItem[] }) => {
  return (
    <div>
      <span>
        {items.length ? (
          items.map((item: ICartItem) => <Item key={item.id} item={item} />)
        ) : (
          <div>empty</div>
        )}
      </span>
    </div>
  );
};

export default ListItem;
