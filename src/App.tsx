import React from 'react';
import Button from './components/Button/Button';
import ItemsModal from './components/ItemModal';

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const displayModal = () => setShowModal(true);
  return (
    <>
      <div className="w-2/3 h-2/3 bg-gray-200 m-64 shadow-2xl rounded-lg mx-auto text-center py-12">
        <h2 className="text-3xl leading-9 font-bold tracking-tight text-black sm:text-4xl sm:leading-10">
          Product Info Placeholder
        </h2>
        <div className="mt-8 flex justify-center">
          <Button
            data-testid="add-to-cart"
            color="indigo"
            onClick={displayModal}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
      {showModal && <ItemsModal setShowModal={setShowModal} />}
    </>
  );
}

export default App;
