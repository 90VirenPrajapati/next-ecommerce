import Layout from '../../layouts/Main';
import {useSelector} from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import CheckoutItems from '../../components/checkout/items';
import {RootState} from 'store';

const paymentMethods = [
    {name: 'Paypal', src: '/images/logos/paypal.png'},
    {name: 'Visa', src: '/images/logos/visa.png'},
    {name: 'Mastercard', src: '/images/logos/mastercard.png'},
    {name: 'Maestro', src: '/images/logos/maestro.png'},
    {name: 'Discover', src: '/images/logos/discover.png'},
    {name: 'Ideal', src: '/images/logos/ideal-logo.svg'}
]
const deliveryMethods = [
    {name: 'InPost', src: '/images/logos/inpost.svg', price: '$20.00'},
    {name: 'DPD', src: '/images/logos/dpd.svg', price: '$12.00'},
    {name: 'DHL', src: '/images/logos/dhl.svg', price: '$15.00'},
    {name: 'Maestro', src: '/images/logos/maestro.png', price: '$10.00'}
]
const CheckoutPage = () => {

    const priceTotal = useSelector((state: RootState) => {
        const cartItems = state.cart.cartItems;
        let totalPrice = 0;
        if (cartItems.length > 0) {
            cartItems.map(item => totalPrice += item.price * item.count);
        }
        return totalPrice;
    })

    return (
        <Layout>
            <section className="cart">
                <div className="container">
                    <div className="cart__intro">
                        <h3 className="cart__title">Shipping and Payment</h3>
                        <CheckoutStatus step="checkout"/>
                    </div>
                    <div className="checkout-content">
                        <div className="checkout__col-6">
                            <div className="checkout__btns">
                                <button className="btn btn--rounded btn--yellow">Log in</button>
                                <button className="btn btn--rounded btn--border">Sign up</button>
                            </div>
                            <div className="block">
                                <h3 className="block__title">Shipping information</h3>
                                <form className="form">
                                    <div className="form__input-row form__input-row--two">
                                        <div className="form__col">
                                            <input className="form__input form__input--sm" type="text"
                                                   placeholder="Email" required/>
                                        </div>
                                        <div className="form__col">
                                            <input className="form__input form__input--sm" type="text"
                                                   placeholder="Address" required/>
                                        </div>
                                    </div>
                                    <div className="form__input-row form__input-row--two">
                                        <div className="form__col">
                                            <input className="form__input form__input--sm" type="text"
                                                   placeholder="First name" required/>
                                        </div>
                                        <div className="form__col">
                                            <input className="form__input form__input--sm" type="text"
                                                   placeholder="City" required/>
                                        </div>
                                    </div>
                                    <div className="form__input-row form__input-row--two">
                                        <div className="form__col">
                                            <input className="form__input form__input--sm" type="text"
                                                   placeholder="Last name" required/>
                                        </div>

                                        <div className="form__col">
                                            <input className="form__input form__input--sm" type="text"
                                                   placeholder="Postal code / ZIP" required/>
                                        </div>
                                    </div>
                                    <div className="form__input-row form__input-row--two">
                                        <div className="form__col">
                                            <input className="form__input form__input--sm" type="text"
                                                   placeholder="Phone number" required/>
                                        </div>
                                        <div className="form__col">
                                            <div className="select-wrapper select-form">
                                                <select>
                                                    <option>State</option>
                                                    {['Gujarat', 'Rajasthan', 'Punjab', 'Haryana', 'Delhi', 'Mumbai', 'Pune', 'Chennai', 'Bangalore', 'Assam', 'UP', 'MP'].map((state, index) => (
                                                        <option key={index} value={state}>{state}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="checkout__col-4">
                            <div className="block">
                                <h3 className="block__title"> Payment method </h3>
                                <ul className="round-options round-options--three">
                                    {paymentMethods.map((method, index) => (
                                        <li key={index} className="round-item">
                                            <img src={method.src} alt={method.name}/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="block">
                                <h3 className="block__title">Delivery method</h3>
                                <ul className="round-options round-options--two">
                                    {deliveryMethods.map((method, index) => (
                                        <li key={index} className="round-item round-item--bg">
                                            <img src={method.src} alt={method.name}/>
                                            <p>{method.price}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="checkout__col-2">
                            <div className="block">
                                <h3 className="block__title">Your cart</h3>
                                <CheckoutItems/>
                                <div className="checkout-total">
                                    <p>Total cost</p>
                                    <h3>${priceTotal}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-actions cart-actions--checkout">
                        <a href="/cart" className="cart__btn-back"><i className="icon-left"></i> Back</a>
                        <div className="cart-actions__items-wrapper">
                            <button type="button" className="btn btn--rounded btn--border">Continue shopping</button>
                            <button type="button" className="btn btn--rounded btn--yellow">Proceed to payment</button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default CheckoutPage