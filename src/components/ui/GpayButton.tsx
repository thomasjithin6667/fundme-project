

const DonateButton = () => {
  const openGooglePay = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const payeeAddress = 'recipient@upi'; // Replace with the correct UPI ID
      const payeeName = 'Recipient Name';
      const amount = '100'; // Specify the amount
      const currency = 'INR'; // Currency in INR (Indian Rupees)

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
