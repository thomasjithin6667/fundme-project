import { useState } from 'react';
import { toast } from 'sonner';

const DonateForm = () => {
  const [amount, setAmount] = useState('');
  const [isAmountValid, setIsAmountValid] = useState(true);

  const validateAmount = (value:any) => {
    if (value.trim() === '') {
      setIsAmountValid(true);
      return;
    }

    const num = parseFloat(value);
    setIsAmountValid(!isNaN(num) && num > 0);
  };

  const handleChange = (e:any) => {
    const value = e.target.value;
    setAmount(value);
    validateAmount(value);
  };

  const openGooglePay = () => {
    if (!isAmountValid) {
      toast.error('Please enter a valid amount.');
      return;
    }

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const payeeAddress = 'sridhargoud.cherlapalli-2@okicici';
      const payeeName = 'Cherlapalli Sridhar Goud';
      const currency = 'INR';

      const url = `upi://pay?pa=${payeeAddress}&pn=${payeeName}&am=${amount}&cu=${currency}`;
      window.location.href = url;
    } else {
      alert('Please use a mobile device to make a donation using Google Pay.');
    }
  };

  return (
    <div className="space-y-4">
      <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
        Donate Now
      </div>
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
        Your Donation Can Make a Difference
      </h2>
      <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
        Every contribution, no matter the size, can help provide the necessary treatment and support for Priyansh. Your generosity can give them a fighting chance.
      </p>
      <div className="hide-on-desktop">
        <input
          type="text"
          value={amount}
          onChange={handleChange}
          placeholder="Enter donation amount"
          className="border rounded-md p-2 w-full mb-3"
        />
        {!isAmountValid && (
          <p className="text-red-500 text-sm">Please enter a valid amount.</p>
        )}
        <button
          onClick={openGooglePay}
          style={{ backgroundColor: '#0A8537' }}
          className="inline-flex w-full mb-4 h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonateForm;
