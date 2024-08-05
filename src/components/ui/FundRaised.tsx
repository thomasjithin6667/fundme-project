import React from 'react';

// Define fixed positions and sizes for images
const imagePositions = [
  { size: 60, top: '10%', left: '15%' },
  { size: 80, top: '20%', left: '50%' },
//   { size: 70, top: '30%', left: '70%' },
//   { size: 90, top: '40%', left: '25%' },
//   { size: 50, top: '60%', left: '40%' },
//   { size: 70, top: '70%', left: '60%' },
//   { size: 60, top: '80%', left: '20%' },
//   { size: 80, top: '50%', left: '80%' },
//   { size: 90, top: '30%', left: '35%' },
//   { size: 50, top: '20%', left: '70%' },
//   { size: 60, top: '70%', left: '10%' },
//   { size: 70, top: '40%', left: '55%' },
//   { size: 80, top: '80%', left: '45%' },
//   { size: 90, top: '90%', left: '60%' },
//   { size: 50, top: '10%', left: '80%' }
];

const FundraisedSection = () => {
  return (
    <section id="fundraised" className="relative w-full py-24 bg-muted min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container flex flex-col items-center gap-6 px-4 md:px-6 lg:gap-10 z-10">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Progress</div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">Funds Raised So Far</h2>
          <Progress value={60} className="h-4 bg-primary rounded-full" />
          <div className="flex justify-between w-full max-w-sm text-muted-foreground">
            <span>₹200,000 raised</span>
            <span>₹300,000 needed</span>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {imagePositions.map((pos, index) => (
          <img
            key={index}
            src={`https://via.placeholder.com/${pos.size}`} // Placeholder image size
            alt="floating"
            className={`absolute rounded-full animate-float hover:animate-float-hover`}
            style={{
              width: `${pos.size}px`,
              height: `${pos.size}px`,
              top: pos.top,
              left: pos.left,
              transform: `translate(-50%, -50%)` // Center the image around its position
            }}
          />
        ))}
      </div>
    </section>
  );
};

const Progress = ({ value, className }:any) => (
  <div className={`w-full max-w-md bg-gray-200 rounded-full ${className}`}>
    <div
      className="bg-green-500 h-full rounded-full"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

export default FundraisedSection;
