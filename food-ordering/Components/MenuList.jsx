import styles from "../styles/Menu.module.css";
import Link from 'next/link';

export const MenuList = ({id, menu, listItemsData, isShowed}) => {


  return (
    <div className={styles.menuCard} id={id} style={{"display": isShowed ? "block" : "none"}}>
        <h2 className={styles.typedOut}>{menu}</h2>
        <ul className={styles.listItems}>
            {
                listItemsData.map(item => (
                    <div key={item.id} className={styles.itemWrapper}>
                        <Link  href={{
                            pathname: '/product/[id]',
                            query: { id: `${item.id}` }
                          }}>
                            <h3>{item.name}</h3>
                        </Link>
                        <h4>€ {item.price[0]}</h4>
                        <h5>{item.ingredients} - {item.extraInfo}</h5>
                    </div>
                ))
            }   
        </ul>
    </div>
  );
};
