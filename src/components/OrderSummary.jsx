import { useLocation } from "react-router-dom";

export default function OrderSummary(props) {
  const { state } = useLocation();

  return (
    <>
      {state !== null ? (
        <div className='row justify-content-center'>
          <div className='col-4'>
            <h1>Order data</h1>
            <h5> The shopping has been requested.</h5>
            <div>Email: {state.email}</div>
            <div>
              The product will be sent to -<div>{state.card.name}</div>
              <div>{state.card.address_line1}</div>
              <div>{state.card.address_city}</div>
              <div>{state.card.address_zip}</div>
              <div>{state.card.address_country}</div>
            </div>
          </div>
        </div>
      ) : (
        <h4>Your cart is empty.</h4>
      )}
    </>
  );
}
