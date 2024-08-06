
// Define fixed positions and sizes for images
const imagePositions = [
  { size: 60, top: '10%', left: '15%',imageUrl:  'https://picsum.photos'},
  { size: 70, top: '30%', left: '70%' ,imageUrl:  'https://picsum.photos'},
  { size: 90, top: '50%', left: '25%' ,imageUrl:  'https://picsum.photos'},
  { size: 80, top: '20%', left: '50%' ,imageUrl:  'https://picsum.photos'},
  { size: 50, top: '69%', left: '40%' ,imageUrl:  'https://picsum.photos'},
  { size: 70, top: '70%', left: '60%' ,imageUrl:  'https://picsum.photos'},
  { size: 60, top: '80%', left: '20%' ,imageUrl:  'https://picsum.photos'},
  { size: 80, top: '50%', left: '80%' ,imageUrl:  'https://picsum.photos'},
  { size: 90, top: '30%', left: '9%' ,imageUrl:  'https://picsum.photos'},
  { size: 50, top: '85%', left: '70%' ,imageUrl:  'https://picsum.photos'},
  { size: 60, top: '60%', left: '10%' ,imageUrl:  'https://picsum.photos'},
  { size: 70, top: '40%', left: '90%' ,imageUrl:  'https://picsum.photos'},
  { size: 80, top: '80%', left: '45%' ,imageUrl:  'https://picsum.photos'},
  { size: 90, top: '90%', left: '60%' ,imageUrl:  'https://picsum.photos'},
  { size: 50, top: '10%', left: '80%' ,imageUrl:  'https://picsum.photos'}
];

const FundraisedSection = () => {

  return (
    <section id="fundraised" className="relative w-full py-24  min-h-screen flex items-center justify-center overflow-hidden">
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
            src={`${pos.imageUrl}/${pos.size}/${pos.size}?random=1${index}`} 
            alt="floating"
            className={`absolute rounded-full animate-float hover:animate-float-hover image-${index +1}`}
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
