import styles from "../../styles/Product.module.css"
import Image from "next/image"
import { BsCupStraw } from "react-icons/bs"
import Head from "next/head"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import {listProducts} from "../../fakeData/MenuData.js"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Cart/action"

export default function Product () {
    const router = useRouter()
    const dispatch = useDispatch();
    const [item, setItem] = useState(null)
    const [priceItem, setPriceItem] = useState(0)
    const [extraList, setExtraList] = useState([])

    const {listCarts} = useSelector(state => state.cart);

    useEffect(() => {
        const {id} = router.query
        if(listProducts.length > 0 && id) {
          const product = listProducts.find(item => item.id === id)
          product ? setItem(product) : setItem(null) 
          setPriceItem(product.price[0])         
        }
    }, [listProducts])

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        const formObj = Object.fromEntries(data.entries())
        const size = formObj.size
        const note = formObj.note
        const qty = parseInt(formObj.quantity)
        const creatingItem = {
            id: item.id,
            name: item.name,
            img: item.img,
            price: priceItem,
            size,
            note,
            qty,
            listAddIngredient: extraList
        }
        // dispatch
        dispatch(addToCart(creatingItem))
         // 👇️ clear all input values in the form
        event.target.reset();
    }

    const handleSelect = (event) => {
        event.preventDefault()
        if(event.target.value === "none" || event.target.value === "Small"){
            setPriceItem(item.price[0])
        } else if(event.target.value === "Medium"){
            setPriceItem(item.price[1])
        } else{
            setPriceItem(item.price[2])
        }
    }

    const handleCheck = (event) => {
        const itemName = event.target.name
        if(event.target.checked){
            setExtraList(pre => [...pre, itemName])
        } else{
            const removeItem = extraList.find(item => item === itemName)
            setExtraList(extraList.filter(item => item !== removeItem))
        }
    }

    // useEffect(() => console.log("Cart item",orderedItem))

    if(!item) {
        // ToDo: create PAGE404 component
        return (
            <div>cannot found</div>
        )
    } else {
        return (
            <div className={styles.container}>
                <Head>
                    <title>TeeTea</title>
                    <meta name="description" content="Best Street Food in Lahti" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className={styles.imgWrapper}>
                    <Image src={item.img} alt={item.name} className={styles.img}/>
                </div>
                <div className={styles.info}>
                    <h2>{item.name}</h2>
                    {priceItem ? <h2>€ {priceItem}</h2> : ""}
                    <form action="" onSubmit={handleSubmit}>
                        <label className={styles.title} htmlFor="size">Choose your favor size (only Drinks <BsCupStraw style={{"fontSize": "30px"}}/>) :</label>
                        <select name="size" id="size" className={styles.size} onChange={handleSelect}>
                            <option value="none">Select size</option>
                            {
                                item?.size?.map(size => <option value={size} key={size}>{size}</option>)
                            }
                        </select>

                        <label className={styles.title}> Choose addition ingredients for your meal:</label>
                        {
                            item?.listAddIngredient?.map(igr => (
                                <div className={styles.extraIgr}>
                                    <input type="checkbox" id={igr} name={igr} value={igr} onChange={handleCheck}/>
                                    <label>{igr}</label>
                                </div>
                            ))
                        }
                        <div>You want to add more: {extraList?.map(extraItem => <span> {extraItem},</span>)}</div>
                        <label className={styles.title} htmlFor="note">Unique taste! Leave your note here!</label>
                        <input type="text" placeholder="E.g: Allergic to sesame" className={styles.note} id="note" name="note"/>

                        <div className={styles.qtyWrapper}>
                            <label className={styles.title} htmlFor="quantity">Quantity</label>
                            <input type="number" id="quantity" name="quantity" min="0"/>
                        </div>
                        <input type="submit" value="Add Cart" className={styles.btn}/>
                    </form>
                </div>
            </div>
        )
    }
}
