import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faCaretDown,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';
import ModalHeader from '../Modal/ModalHeader';
import ModalBody from '../Modal/ModalBody';
import ModalFooter from '../Modal/ModalFooter';
import Button from '../Button/Button';
import { Offer, OffersResponse } from '../../types/offer';
import Skeleton from '../Loader/Skeleton';
interface ItemsModalProps {
  setShowModal: (val: boolean) => void;
}

const StyledModalBodyHeader = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;

const ItemsModal: React.FC<ItemsModalProps> = ({ setShowModal }) => {

  const [offers, setOffers] = React.useState<Offer[]>([]);
  const [currency, setCurrency] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  // `selectedOffers` bych dal normalne jako Array. Nevidim duvod proc Set, stejne se vsude ten Set dava do Array
  const [selectedOffers, setSelectedOffers] = React.useState(new Set());
  // Zbytecne, neni potreba to mit ve state. `selectedOffers` jsou ve state a to staci
  const [total, setTotal] = React.useState(0);

  async function fetchOffers() {
    setIsLoading(true);

    // try/catch
    // v pripade vice API callu bych to dal jak separe funkci, ktera bude mit try/catch,
    // osetreny http 200 a vracela by uz primo json data

    const response = await fetch(
      'https://private-803503-digismoothietest.apiary-mock.com/offers',
    );
    // setIsLoading by se mel dat dolu. Pokud projde podminka response.ok tak se ceka na dalsi promise
    setIsLoading(false);
    if (response.ok) {
      const jsonResponse: OffersResponse = await response.json();
      // Tohle bych dal do jednoho state objektu, kdyz uz je ten response i otypovany
      // const [apiOffers, setApiOffers] = useState<OffersResponse>({ offers: [], currency: '' })
      setOffers(jsonResponse.offers);
      setCurrency(jsonResponse.currency);
    } else {
      alert('Error from api');
    }
  }
  React.useEffect(() => {
    fetchOffers();
  }, []);


  // Zbytecny effekt. `total` bych dal normalne jako constantu.
  React.useEffect(() => {
    const offersArr = Array.from(selectedOffers).map((v) =>
      offers.find((i) => i.title === v)
    );
    setTotal(
      offersArr.reduce(
        (acc, val) =>
          acc + (val && val.original_price ? val.original_price : 0),
        0
      )
    );
  }, [selectedOffers, offers]);



  return (
    // "toggler" bych ocekaval, ze bere boolean hodnotu a otevira/zavira modal. Tady by se spis hodilo neco jako "onClose"
    <Modal toggler={() => setShowModal(false)}>
      <ModalHeader toggler={() => setShowModal(false)}>
        Wait, don't miss our deals, today only!
      </ModalHeader>
      <ModalBody>
        <StyledModalBodyHeader className="bg-green-100 h-20 flex items-center px-6">
          <div className="mr-4 object-cover h-16 w-16 flex justify-center items-center rounded-full bg-white">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          </div>

          <span>Your Cart</span>
          <span className="ml-auto">
            Total: {total} {currency}
          </span>
        </StyledModalBodyHeader>
        <div className="ml-32 mr-2 my-8 flex flex-col">
          {isLoading && <Skeleton />}
          {!isLoading && offers.map((offer, index) => {
            return (
              <div className="flex items-center h-20 mb-8" key={index}>
                <img
                  alt=""
                  src={offer.image}
                  className="object-cover bg-gray-100 h-16 w-16"
                />
                <div className="mx-4 w-full">
                  <div className="flex items-center">
                    <div className="font-bold">{offer.title}</div>
                    {offer.discounted_price !== null && (
                      <div className="font-light ml-2 line-through">
                        {offer.discounted_price} {currency}
                      </div>
                    )}
                    <div className="font-medium ml-2">
                      {offer.original_price} {currency}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="font-medium">{offer.short_description}</div>
                    <div className="ml-auto flex">
                      <Button
                        buttonType="outline"
                        color="green"
                        onClick={() => setShowModal(true)}
                      >
                        Regular
                        <FontAwesomeIcon icon={faCaretDown} />
                      </Button>
                      <Button
                        color="green"
                        className="ml-2"
                        onClick={() => {
                          setSelectedOffers((o) => {
                            const newOffers = new Set(o);
                            newOffers.add(offer.title);
                            return newOffers;
                          });
                        }}
                      >
                        <FontAwesomeIcon className="mr-2" icon={faPlus} />
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Chybi "emptyState", v pripade, ze nemam zadne offers */}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          color="green"
          className="justify-end rounded w-1/3"
          disabled={!Array.from(selectedOffers).length}
          onClick={() => {
            setShowModal(false);
            // V zadani je, vypsat ids ne titles. Ale to je hadam detail.
            alert(
              `Selected offers are ${Array.from(selectedOffers).join(',')}`
            );
          }}
        >
          Continue To Checkout
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ItemsModal;
