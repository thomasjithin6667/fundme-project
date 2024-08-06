

const DonateButton = ({ amount }:any) => {
  const openGooglePay = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const payeeAddress = 'sridhargoud.cherlapalli-2@okicici'; 
      const payeeName = 'Cherlapalli Sridhar Goud';
      const currency = 'INR'; 

      const url = `upi://pay?pa=${payeeAddress}&pn=${payeeName}&am=${amount}&cu=${currency}`;
      window.location.href = url;
    } else {
      alert("Please use a mobile device to make a donation using Google Pay.");
    }
  };

  return (
    <button onClick={openGooglePay}>
      Donate Now
    </button>
  );
};

export default DonateButton;
